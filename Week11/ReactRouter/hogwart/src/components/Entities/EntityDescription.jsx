import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./EntityDescription.css";

const EntityDescription = ({ getCategoryData }) => {
  const { entityName, category } = useParams();
  const entity = getCategoryData(category).find(
    (entity) => entity.name === entityName
  );
  const { img, level, description } = entity;

  return (
    <>
      <div className="desc-card">
        <Link to={`/wiki/${category}`}>
          <button style={{ margin: "1em" }}>
            {" "}
            {"<<"} {category}
          </button>
        </Link>
        <img src={img} alt={entityName} />
        <h3>{entityName}</h3>
        <p className="desc-card-level">{level}</p>
        <p className="desc-card-description">{description}</p>
      </div>
    </>
  );
};

export default EntityDescription;
