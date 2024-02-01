import React from "react";
import "./HogwartsLogo.css";
import HogwartsIcon from "../../assets/hogwarts-icon.png";

const HogwartsLogo = () => {
  return (
    <div>
      <div className="hogwarts-logo">
        <img src={HogwartsIcon} alt="Hogwarts Icon" />
        <h1>Hogwarts School of Witchcraft and Wizardry</h1>
      </div>
    </div>
  );
};

export default HogwartsLogo;
