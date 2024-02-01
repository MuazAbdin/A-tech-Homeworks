import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA } from "./Constants.js";
import Home from "./components/Home.jsx";
import HogwartNavbar from "./components/Header/HogwartNavbar.jsx";
import Entities from "./components/Entities/Entities.jsx";
import EntityDescription from "./components/Entities/EntityDescription.jsx";
import About from "./components/About.jsx";

const App = (props) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [potions, setPotions] = useState(POTIONS_DATA);
  const [charms, setCharms] = useState(CHARMS_DATA);
  const STATE_MAP = {
    potions: potions,
    charms: charms,
  };

  const getCategoryData = (category) => {
    return STATE_MAP[category];
  };

  return (
    <Router>
      <div className="App">
        <HogwartNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/wiki/:category"
          element={<Entities getCategoryData={getCategoryData} />}
        />
        <Route
          path="/wiki/:category/:entityName"
          element={<EntityDescription getCategoryData={getCategoryData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
