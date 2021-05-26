import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import Logo from "../components/Logo";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Register = () => {
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState();

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullName: fullName,
      userName: userName,
      location: location,
      email: email,
      password: password,
    };

    const data = await fetchQuery({
        uri: "/auth/register",
        method: "POST",
        body: newUser,
      });

      // localStorage.setItem("token", data.token);
      history.push("/login");
  };

  return (
    <div className="w-screen ">
      <div className="flex justify-center items-center bg-recipeRed-800 bg-opacity-19 h-screen">
        <div className="flex flex-col lg:flex-row shadow-lg rounded">
          <div className="bg-recipeRed-800 bg-opacity-69 w-80 pt-5 text-white text-center lg:pt-20">
            <Link to="/" className="">
              <Logo />
            </Link>
            <img
              src="images/1.png"
              alt=""
              className="m-auto lg:mt-32 lg:w-4/5 sm:w-44"
            />
          </div>

          <div className="bg-white pt-5 w-80">
            <div className="container m-auto pl-6 pr-6">
              <h2 className="text-lg font-bold hover:text-recipeRed-800 bg-opacity-69">
                Create Account
              </h2>
              <p className="text-xs pt-3 text-activity-300">
                Register to explore recipes and connect to people globally
              </p>

              <form onSubmit={submitHandler}>
                <div className="pt-3 grid grid-rows-2">
                  <label for="name" className="text-xs">
                    Full Name
                  </label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-7">
                    <FaUser className="pr-1 w-4 m-1 text-gray-600" />
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      id="name"
                      className="outline-none mt-0 focus:outline-none bg-gray-100 text-xs"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-3 grid grid-rows-2">
                  <label for="username" className="text-xs">
                    Username
                  </label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-7">
                    <FaUser className="pr-1 w-4 m-1 text-gray-600" />
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      className="outline-none mt-0 focus:outline-none bg-gray-100 text-xs"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-3 grid grid-rows-2">
                  <label for="location" className="text-xs">
                    Location
                  </label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-7">
                    <FaUser className="pr-1 w-4 m-1 text-gray-600" />
                    <input
                      type="text"
                      name="locationusername"
                      placeholder="location"
                      id="location"
                      className="outline-none mt-0 focus:outline-none bg-gray-100 text-xs"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-3 grid grid-rows-2">
                  <label for="email" className="text-xs">
                    Email
                  </label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-7">
                    <GrMail className="pr-1 w-4 m-1 text-gray-600" />
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      id="email"
                      className="outline-none mt-0 focus:outline-none bg-gray-100 text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-3 mb-3 grid grid-rows-2">
                  <label for="password" className="text-xs">
                    Password
                  </label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-7">
                    <GiPadlock className="pr-1 w-4 m-1 text-gray-600" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      className="outline-none mt-0 focus:outline-none bg-gray-100 text-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 flex  justify-between">
                  <label type="checkbox" className="text-xs">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <Link className="text-recipeRed-800 bg-opacity-69 font-bold text-xs">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-xs font-bold mt-0 focus:outline-none bg-recipeRed-800 text-center py-1 text-white rounded items-center"
                >
                  Create Account
                </button>

                <div className="mb-3 text-center rounded shadow-md bg-gray-100 mt-3 py-1">
                  <Link to="" className="text-xs font-bold">
                    G Sign in with Google
                  </Link>
                </div>
                <div className="mb-3 text-xs flex text-bold pt-1">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="text-recipeRed-800 bg-opacity-19 font-bold text-xs"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
