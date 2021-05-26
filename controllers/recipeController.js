const Recipe = require("../models/Recipe");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const createValidator = require("../utils/recipeValidation");
const { NotExtended } = require("http-errors");
const multer = require("multer");

let fileName = "";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets");
  },
  filename: function (req, file, cb) {
    fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).array("file");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate({
      path: "postBy",
      select: "fullName",
    });
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      res.status(404).send("Recipe with this ID could not be found.");
    }
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipeByUSer = async (req, res) => {
  try {
    const recipes = await Recipe.find({ postBy: req.user });
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRecipe = async (req, res) => {
  // const result = await createValidator.validateAsync(req.body);

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    try {
    
    const { title, ingredient, postBy } = req.body;
    const image = fileName;

    const recipe = new Recipe({
      title,
      image,
      ingredient,
      postBy
    });

    recipe.save()

     

    // const user = User.findById({ _id: recipe.postBy });

    // user.recipe.push(recipe);
    // user.save();

    // console.log(user);

    return res.status(200).send(req.file);
  } catch(error){
     res.status(500).json({ error: error.message });
  }
    // Everything went fine.
  });

  // try {
  //   const {
  //     title,
  //     image,
  //     ingredient
  //   } = req.body;

  //   //create post

  //   let token = req.headers["authorization"];
  //   token = token.split(" ")[1];
  //   let decode = jwt.verify(token, "123456780");
  //   const decodedUser = await User.findOne({ _id: decode.id });
  //   console.log(decodedUser);

  //   const recipe = await Recipe.create({
  //     title,
  //     image,
  //     ingredient
  //   });

  //   decodedUser.recipe.push(recipe._id);
  //   await decodedUser.save();

  //   //return post
  //   res.status(201).json({ recipe });
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
};

const updateRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {
      new: true,
    });
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    await Recipe.findByIdAndDelete(recipeId);
    res.status(200).json({ message: "Recipe deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleLikeRecipe = async (req, res) => {
  const { recipeId } = req.params;
  let recipe = await Recipe.findById(recipeId);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe Not Found." });
  }

  if (recipe.likedBy.includes(req.user)) {
    recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $inc: { numberOfLikes: -1 },
        $pull: { likedBy: req.user },
      },
      {
        new: true,
      }
    );
  } else {
    recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $inc: { numberOfLikes: 1 },
        $push: { likedBy: req.user },
      },
      {
        new: true,
      }
    );
  }

  res.status(200).json({ recipe });
};

// const assets = assync()

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  toggleLikeRecipe,
  getRecipeByUSer,
};
