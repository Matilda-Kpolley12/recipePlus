import { useState } from "react";
import CommentCard from "./CommentCard"
import axios from "axios";
import { useUserStore } from "../../state/store";
import { BsFillHeartFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";

const Comments = (props) => {
  const comments = useUserStore((state) => state.comments);
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  
  const [comment, setComment] = useState("");

  const recipeComments = comments.filter((comment) => {
    return comment.recipe[0] === props.recipeId
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (comment !== "") {
      // setComments({...comments, 'userComment': comment});
      // setComments({...comments, 'commeter': user.fullName});
      const formData = new FormData();

      formData.append("fullName", user.fullName);
      formData.append("comment", comment);
      formData.append("user", user._id);
      formData.append("recipe", props.recipeId)


      const options = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .post("/comments", {fullName: user.fullName, comment: comment, user: user._id, recipe: props.recipeId}, options)
        .then((result) => console.log("Successful: ", result))
        .catch((err) => console.log("Error: ", err));
      setComment("");
    }
  };
  return (
    <div className="border-l-2 border-gray-300 ml-16 mt-5">
      <div className="flex ml-20 justify-evenly">
        <button className="border-solid border-2 border-black-100 p-2 rounded focus:text-recipeRed-800 focus:outline-none">
          <BsBookmark className="text-lg" />
        </button>
        <button
          className="border-solid border-2 border-black-100 p-2 rounded focus:text-recipeRed-800 focus:outline-none"
          // numLikes={likes}
          // liked={liked}
          // onSelect={function clickLike(liked) {
          //   //This function is happening, but the else block
          //   // never fires.
          //   if (liked) {
          //     updateLikes(likes + 1);
          //   } else {
          //     updateLikes(likes - 1);
          //   }
          //   updateLiked(!liked);
          // }}
        >
          <RiShareForwardFill className="text-lg " />
        </button>
        <button className="border-solid border-2 border-black-100 p-2 rounded focus:text-recipeRed-800 focus:outline-none">
          <BsFillHeartFill className="text-lg" />
        </button>
      </div>

      <div className="border-b-2 border-gray-300  mx-28">
        <h1 className="mt-12 mb-10 text-sm font-bold">Give your comments</h1>
      </div>

      {recipeComments && recipeComments.map((comment) => (
        <CommentCard comment={comment.comment} commenter={comment.fullName} />
      ))}
      {/* 
      <div className="mt-5 ml-10">
        <div className="flex">
          <img
            src="images/janedoe.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-sm font-bold ml-4 mt-3">Jane Doe</h2>
        </div>
        <p className="text-xs mt-2 ml-12">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
          Simili <br /> que dolore ab iure ratione tempor
        </p>
      </div>

      <div className="mt-5 ml-10">
        <div className="flex">
          <img
            src="images/janedoe1.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-sm font-bold ml-4 mt-3">Richel Brown</h2>
        </div>
        <p className="text-xs mt-2 ml-12">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
          Simili <br /> que dolore ab iure ratione tempor
        </p>
      </div>

      <div className="my-10 ml-10 ">
        <d className="flex">
          <img
            src="images/webb.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <h2 className="text-sm font-bold ml-4 mt-3">Stephen Webb</h2>
        </d>
        <p className="text-xs mt-2 ml-12">
          Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
          Simili <br /> que dolore ab iure ratione tempor
        </p>
      </div> */}

      <div className="">
        <label for="comment" className="text-sm font-bold ml-10">
          Comment Section:
        </label>
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="50"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="focus:outline-none mt-5 ml-10 w-3/5 bg-gray-100"
          ></textarea>
          <button
            type="submit"
            className="bg-recipeRed-800 bg-opacity-69 text-white text-sm font-bold  p-2 focus:outline-none mb-20 mt-4"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;

