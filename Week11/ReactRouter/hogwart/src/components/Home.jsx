import React from "react";
import CategoryList from "./Categories/CategoryList.jsx";
import HogwartsLogo from "./Header/HogwartsLogo.jsx";
import "./Home.css";

const Home = ({ categories }) => {
  return (
    <div className="home">
      <HogwartsLogo />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;
