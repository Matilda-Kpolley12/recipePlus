// import Logo from './Logo'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      <div className="bg-recipeRed-800 bg-opacity-69 h-16 w-full">
        <div className=" container m-auto text-white  pt-5 lg:flex justify-between">
          <Link to="/home">
            <h3 className="font-corben font-bold lg:text-lg md:text-sm">
              Recipe <span className="text-Recipe-800">Plus</span>
            </h3>
          </Link>
          <Link to="/terms" className="text-sm">
            Terms of Services
          </Link>
          <Link to="/privacy" className="text-sm">
            Privacy Policy
          </Link>
          <Link to="/tillyWeb" className="text-sm">
            {" "}
            &copy; 2021 TillyWeb, Inc
          </Link>
        </div>
      </div>
    );
}

export default Footer
