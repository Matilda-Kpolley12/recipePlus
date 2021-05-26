import { Link } from "react-router-dom";
// import { FaRegThumbsUp } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import axios from "axios";
import { useUserStore } from "../state/store";

const ProfileCard = (props) => {
  const token = useUserStore((state) => state.token);

  console.log(props);

  const handleLike = async (recipeId) => {
    // await axios.patch(`http://localhost:8081/recipe/${recipeId}/toggle`, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    const res = await fetch(`/recipe/${recipeId}/toggle`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="shadow-lg w-full rounded-xl bg-card-100">
      <div className="container mx-auto flex justify-center pl-1">
        <img
          src={props.cImage}
          alt="bigImage"
          className="h-72 w-full px-5 py-5 mx-auto lg:h-72 lg:w-full"
        />
      </div>
      <div className="px-5">
        <p className="font-corben font-bold text-xs pl-1 hover:text-recipeRed-800">
          <Link to={`/food/${props.recipeId}`}>{props.cName}</Link>
        </p>
        <Link to="/junk" className="text-xs font-bold pl-1">
          {props.category1}
        </Link>
        <Link to="/french" className="text-xs font-bold pl-1">
          {props.category2}
        </Link>
        <Link to="/cheese" className="text-xs font-bold pl-1">
          {props.category3}
        </Link>
      </div>
      <div className="flex ml-5 mb-10 mt-4 text-xs font-bold sm:flex">
        <button onClick={() => handleLike(props.recipeId)} className="focus:outline-none focus:text-recipeRed-800">
          <BsFillHeartFill className="mr-2 " />
        </button>
        {props.like}
        <FiEye className="mr-2 ml-44" />
        {props.view}
        {/* <div className="">{props.children} {props.like}</div> */}
      </div>
    </div>
  );
};

export default ProfileCard;
