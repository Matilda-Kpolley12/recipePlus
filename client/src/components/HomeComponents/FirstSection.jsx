import ProfileCard from "../ProfileCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserStore } from "../../state/store";

// import { FaRegThumbsUp } from "react-icons/fa";
// import { FiEye } from "react-icons/fi";

const Popular = () => {
  const recipes = useUserStore((state) => state.recipes);

  console.log(recipes);

  return (
    <div className="">
      {/* Beginning of popular */}
      <h2 className="ml-10 font-corben font-bold text-sm mt-7">
        Posts
      </h2>
      <div className="w-full rounded bg-gray-100 rounded-t-3xl mt-10">
        <div className="flex">
          <FaArrowLeft className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
          <div className="lg:grid grid-cols-3 gap-10 container m-auto pt-10 sm:block">
            {/* Beginning of First card */}
            {recipes &&
              recipes.map((recipe) => (
                <ProfileCard
                  cImage={`/${recipe.image}`}
                  recipeId={recipe._id}
                  cName={recipe.title}
                  like={recipe.numberOfLikes}
                  view={557}
                  key={recipe._id}
                  // className="mr-5"
                />
              ))}
            {/* End of First card */}
          </div>
          <FaArrowRight className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
        </div>
        <div className="ml-10 text-sm font-bold mt-10 mb-10">
          <Link to="/popular">View All</Link>
        </div>
      </div>
      {/* End of Popular */}

      {/* Beginning of Recommended Recipies */}
      {/* <h2 className="ml-10 font-corben font-bold text-sm mt-7">
        Reommended Recipies
      </h2>
      <div className="w-full rounded bg-gray-100 rounded-t-3xl mt-10">
        <div className="flex">
          <FaArrowLeft className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
          <div className="lg:grid grid-cols-3 gap-10 container m-auto pt-10">
            {recipes.map((recipe) => (
              <ProfileCard
                cImage={`http://localhost:8081/${recipe.image}`}
                cName={recipe.title}
                like={475}
                view={557}
                key={recipe._id}
                className="mr-5"
              />
            ))}
          </div>
          <FaArrowRight className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
        </div>
        <div className="ml-10 text-sm font-bold mt-10 mb-10">
          <Link to="/popular">View All</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Popular;
