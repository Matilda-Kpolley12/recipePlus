// import Logo from './Logo';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserStore } from "../state/store";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";

const Nav = (props) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  console.log(user);

  return (
    <div className="w-100%">
      <div className="container m-auto items-center flex justify-between bg-white py-2">
        <div className="text-xm font-corben font-bold">
          <Link to="/">
            Recipe <span className="text-recipeRed-800">Plus</span>
          </Link>
        </div>
        <div className="font-Inter font-bold text-sm">
          {isLoggedIn ? (
            <div className="flex">
              <div className="flex pt-1 ">
                <MdNotificationsNone className="mx-3 text-xl" />
                <NavLink to="/dashboard">
                  {/* <input type="file" /> */}
                  <img
                    src="https://placeimg.com/240/240/people"
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                  {/* <FaUserCircle type="file" className="text-xl" /> */}
                </NavLink>
                <Link to="/profile" className="pl-2">
                  {user?.userName}
                </Link>
              </div>
              {/* <NavLink
                to="/dashboard"
                className="rounded-md bg-recipeRed-800 text-white ml-5"
              >
                DashBoard
              </NavLink> */}

              <Link
                onClick={() => logout()}
                to=""
                className="border-recipeRed-800 pt-1 text-recipeRed-800 pl-3"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex">
              <NavLink
                to="/register"
                className="flex rounded-md bg-recipeRed-800 text-white py-2 px-3 items-center text-xs shadow-md"
              >
                {props.children}
              </NavLink>

              <NavLink
                to="/login"
                className="rounded-md text-recipeRed-800 shadow-md py-2 px-3 ml-5"
              >
                <h4>Login</h4>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
