import { IoEllipse } from "react-icons/io5";
import { BsFillHeartFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { useState, useEffect } from "react";
import Comments from "../../components/comment/Comments";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useUserStore } from "../../state/store";

const DetailedRecipe = () => {
  const user = useUserStore((state) => state.user);
  const recipes = useUserStore((state) => state.recipes);
  const setComments = useUserStore((state) => state.setComments);

  let { recipeId } = useParams();
  const [userName, setUserName] = useState({user: {}});
  const [recipe, setRecipe] = useState({
    foodRecipe: {},
  });

  const fetchARecipe = (recipeId) => {
    axios
      .get(`/recipe/${recipeId}`)
      .then((res) => setRecipe({ ...recipe, foodRecipe: res.data.recipe }))
      .catch((err) => console.log(err));
  };

  const getRecipeUser = (postBy) => {
    axios
      .get(`/${postBy}`)
      .then((res) => {
        setUserName({ ...userName, user: res.data })
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { comments },
      } = await axios.get("http://localhost:8081/comments");
      setComments(comments);
    };
    fetchData();
    fetchARecipe(recipeId);
    // getRecipeUser(recipe.foodRecipe.postBy);
  });

  return (
    <div className="w-full bg-gray-50">
      <div className="container m-auto grid grid-cols-2 bg-white shadow-lg mb-15">
        <div>
          <div className="flex justify-between mt-5">
            <div className="flex  ">
              <img
                src="https://placeimg.com/240/240/people"
                alt="big"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-3">
                <h1 className="text-lg font-bold">{recipe.foodRecipe.title}</h1>
                <div className="flex justify-between font-bold">
                  <h1 className="text-sm mt-3">{user.fullName}</h1>
                  <div className="flex text-recipeRed-800 pl-10 mt-5 font-bold">
                    <IoEllipse className="mr-3" />
                    <button className="focus:outline-none text-sm font-bold">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="focus:outline-none bg-recipeRed-800 p-2 text-white text-sm font-bold">
                Hire Me
              </button>
            </div>
          </div>

          <div className="">
            <img
              src={`http://localhost:8081/${recipe.foodRecipe.image}`}
              alt=""
              className="w-full mt-5"
            />
            <div className="mt-5 text-sm">
              {ReactHtmlParser(recipe.foodRecipe.ingredient)}
            </div>
          </div>
        </div>

        <Comments recipeId={recipeId} />

        <div className="container m-auto">
          <div className="ml-40">
            <img
              src="https://placeimg.com/240/240/people"
              alt="big"
              className="w-16 h-16 rounded-full ml-5"
            />
            <h1 className="text-base font-bold mt-5">{user.fullName}</h1>
            <p className="text-xs mt-3">
              {user.fullName} is my name and I am a nutritionist, Chef who owns a restaurant. Cooking is my hoobie and I am very passionate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedRecipe;
