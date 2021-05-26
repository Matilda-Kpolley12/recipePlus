import Header from "../components/Header";
import FirstSection from "../components/HomeComponents/FirstSection";
import { useUserStore } from "../state/store";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const setRecipes = useUserStore((state) => state.setRecipes);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { recipes },
      } = await axios.get("/recipe");
      setRecipes(recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden ">
      <Header />
      <div>
        <FirstSection />
      </div>
    </div>
  );
};

export default Home;
