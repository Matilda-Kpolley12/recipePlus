const Comment = require("../models/Comment");
const User = require("../models/User");
const Recipe = require("../models/Recipe");
const jwt = require("jsonwebtoken");
const { NotExtended } = require("http-errors");

const getAllComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getComment= async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      res.status(404).send("Comment with this ID could not be found.");
    }
    res.status(200).json({ comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment= async (req, res) => {
  try {
    let { fullName, comment, user, recipe } = req.body;
    //create post

    let token = req.headers["authorization"];
    token = token.split(" ")[1];
    let decode = jwt.verify(token, "123456780");
    const decodedUser = await User.findOne({ _id: decode.id });

    const userComment = new Comment({
      fullName,
      comment,
      user,
      recipe,
    });
    userComment.save();

    console.log(userComment, recipe);

    // add comment to recipe
    const commentRecipe = await Recipe.findById(recipe);
    console.log(userComment, commentRecipe);
    commentRecipe.comments.push(userComment);
    commentRecipe.save();

    console.log(commentRecipe)

    //return post
    res.status(201).json({ comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateComment= async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findByIdAndUpdate(commentId, req.body, {
      new: true,
    });
    res.status(200).json({ comment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment= async (req, res) => {
  try {
    const { commentId } = req.params;
    await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleLikeComment= async (req, res) => {
  const { commentId } = req.params;
  let comment = await Comment.findById(commentId);

  if (!comment) {
    return res.status(404).json({ message: "Comment Not Found." });
  }

  if (comment.likedBy.includes(req.user)) {
    comment = await Comment.findByIdAndUpdate(
      commentId,
      {
        $inc: { numberOfLikes: -1 },
        $pull: { likedBy: req.user },
      },
      {
        new: true,
      }
    );
  } else {
    comment = await Comment.findByIdAndUpdate(
      commentId,
      {
        $inc: { numberOfLikes: 1 },
        $push: { likedBy: req.user },
      },
      {
        new: true,
      }
    );
  }

  res.status(200).json({ comment });
};

module.exports = {
  getAllComment,
  getComment,
  createComment,
  updateComment,
  deleteComment,
  toggleLikeComment,
};
