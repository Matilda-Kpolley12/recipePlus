// import {Link} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header'

const Popular = () => {
    return (
      <div>
      <Header/>
        <h2 className="ml-10 font-corben font-bold text-sm mt-7">
          Popular Recipies
        </h2>
        <div className="w-full rounded bg-gray-100 rounded-t-3xl mt-10">
          <div className="flex">
            <FaArrowLeft className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
            <div className="lg:grid grid-cols-3 gap-10 container m-auto pt-10">
              {/* Beginning of First card */}
              <ProfileCard
                cImage="/images/cardImage2.png"
                cName="Pesto Pasta"
                category1="Junk Food,"
                category2="French Fries,"
                category3="CheeseBurgar"
                like={475}
                view={557}
                className="mr-5"
              />
              {/* End of First card */}

              {/* Beginning of second card */}
              <ProfileCard
                cImage="/images/3.png"
                cName="Toasted Bread"
                category1="Junk Food,"
                category2="French Fries,"
                category3="CheeseBurgar"
                className="pr-5"
                like={712}
                view={890}
              />
              {/* End of second card */}

              {/*Beginning of Third card  */}
              <ProfileCard
                cImage="/images/4.png"
                cName="Pesto Pasta"
                category1="Junk Food,"
                category2="French Fries,"
                category3="CheeseBurgar"
                className="pr-5"
                like={402}
                view={908}
              />
              {/* End of Third card */}
            </div>
            <FaArrowRight className="border-2 w-16 h-10 text-white bg-recipeRed-800 rounded-lg mt-52" />
          </div>
        </div>
      </div>
    );
}

export default Popular
