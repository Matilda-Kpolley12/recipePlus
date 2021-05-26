import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { GiPadlock } from "react-icons/gi";
import Logo from "../components/Logo";
import { useUserStore } from "../state/store";

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

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const setUser = useUserStore((state) => state.setUser);

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };

    const { token, user, recipes } = await fetchQuery({
      uri: "/auth/login",
      method: "POST",
      body: newUser,
    });

    setUser(token, user, recipes);
    history.push("/");
  };

  return (
    <div className="w-screen bg-recipeRed-800 bg-opacity-19">
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col lg:flex-row shadow-lg rounded">
          <div className="bg-recipeRed-800 bg-opacity-69 w-80 pt-5 text-white text-center">
            <Link to="/">
              <Logo className="" />
            </Link>
            <img
              src="images/1.png"
              alt=""
              className="m-auto lg:mt-24 lg:w-4/5 sm:w-44"
            />
          </div>

          <div className="bg-white pt-5 w-80">
            <div className="container m-auto pl-6 pr-6">
              <h2 className="text-lg font-bold hover:text-recipeRed-800 bg-opacity-69">
                Login
              </h2>
              <p className="text-sm pt-5 text-activity-300">
                Login to explore recipes and connect to people globally
              </p>

              <form onSubmit={submitHandler}>
                <div className="pt-3 mb-3 grid grid-rows-2">
                  <label for="email">Email</label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-9">
                    <GrMail className="pr-1 w-10 mt-2 text-gray-600" />
                    <input
                      type="text"
                      name="email"
                      placeholder="you@example.com"
                      id="email"
                      className="outline-none focus:outline-none bg-gray-100 text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3 grid grid-rows-2 ">
                  <label for="password">Password</label>
                  <div className="border-2 bg-gray-100 shadow-md flex text-black-100 h-9">
                    <GiPadlock className="pr-1 w-10 mt-2 text-gray-600" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      className="outline-none focus:outline-none bg-gray-100 text-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3 flex text-sm justify-between">
                  <label type="checkbox" for="">
                    Remember me
                  </label>
                  <Link
                    to="/login"
                    className="text-recipeRed-800 bg-opacity-69 font-bold"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <>
                  <button
                    type="submit"
                    className="w-full mb-3 focus:outline-none bg-recipeRed-800 text-center py-1 text-white rounded mt-3 items-center"
                  >
                    Login
                  </button>
                </>

                <div className=" mb-3 text-center rounded shadow-md bg-gray-100 mt-3 py-1 text-sm">
                  <Link to="/login">G Sign in with Google</Link>
                </div>

                <div className="mb-3 text-sm flex text-bold pt-1">
                  <p>Don't have an account?</p>
                  <Link
                    to="/register"
                    className="text-recipeRed-800 bg-opacity-19 font-bold"
                  >
                    Create Account
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

export default Login;
