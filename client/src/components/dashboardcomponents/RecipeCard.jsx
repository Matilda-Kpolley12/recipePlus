import {RiPencilFill} from "react-icons/ri"
import {Link} from "react-router-dom"
import axios from "axios";
import {BiTrash} from "react-icons/bi"

const RecipeCard = (props) => {
  const token = localStorage.getItem("token");

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  // console.log(props.recipeId)
  const deleteRecipe = (id) => {
    axios
      .delete(`/recipe/${id}`, options)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
    return (
      <div className="shadow-lg bg-gray-100 flex">
        <img
          src={props.CImage}
          alt=""
          className="w-24 h-24 rounded-full mr-16"
        />

        <div className="">
          <div className="flex justify-between">
            <Link to="/food/:recipeId" className="hover:text-recipeRed-800">
              <h1 className="text-xs font-bold pt-3 mr-8">{props.CName}</h1>
            </Link>

            <Link to="/recipe">
              <RiPencilFill className="text-gray-500 text-lg font-semibold" />
            </Link>
            {/* <BiTrash onClick={deleteRecipe(props.recipeId)} /> */}
          </div>
          <div className="flex mt-10">
            <h3 className=" text-xs mr-8">{props.reactions}</h3>
            <h3 className=" text-xs">{props.comments}</h3>
          </div>
        </div>
      </div>
    );
}

export default RecipeCard
