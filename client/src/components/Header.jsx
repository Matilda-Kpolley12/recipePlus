import {FaSearch } from "react-icons/fa";
const Header = () => {
    return (
      <div className="bg-cover bg-home-image3 h-screen w-screen pt-72">
        <div className="flex w-2/5 h-10 border-2 ml-80 border-recipeRed-800 border-opercity-19 shadow-xl rounded-full bg-white">
          <button className="border-none bg-white ml-2">
            <FaSearch className="text-2xl text-searchColor-200 ml-3 mt-2" />
          </button>
          <input
            placeholder="search"
            type="text"
            className="border-none outline-none pl-5 w-full mr-5"
          />
        </div>
      </div>
    );
}

export default Header
