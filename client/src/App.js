// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import JunkFood from "./pages/categories/JunkFood";
import CheeseBurger from "./pages/categories/CheeseBurger";
import FrenchFries from "./pages/categories/FrenchFries";
import Footer from "./components/Footer";
import Popular from "./pages/Popular";
import UserDashBoard from "./pages/dashboard/UserDashBoard";
import Recipe from "./pages/recipe/Recipe";
import DetailedRecipe from "./pages/recipe/DetailedRecipe";
import ProtectedRoute from "./components/ProtectedRoute";
// import "./components/RouterWithNav"

// const RouteWithNavbar = ({exact, path, component:Component, ...rest}) => {
//    return <Route exact={exact} path={path} {...rest} render={(routeProps) => {
//       // return <><Navbar {...routeProps}/><Component {...routeProps}/>
//    }}
//    />
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <RouteWithNavbar path="/profile" component={UserProfile}/> */}
          <div>
            <Nav>
              <FaUser className="" />
              <h4 className="ml-1 text-xs">Create Account</h4>
            </Nav>
            <Route path="/" exact component={Home} />
            <Route path="/junk" component={JunkFood} />
            <Route path="/cheese" component={CheeseBurger} />
            <Route path="/french" component={FrenchFries} />
            <Route path="/popular" component={Popular} />
            <ProtectedRoute path="/profile" component={UserDashBoard} />
            {/* <Route path="/hireme" component={HireMe} /> */}
            <Route path="/recipe" component={Recipe} />
            <Route path="/food/:recipeId" component={DetailedRecipe} />
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
