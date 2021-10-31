import React from "react";
import "./Card.css";

export const Card = (props) => {
  const { description, name, imagen1, imagen2 } = props;
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={imagen1 + "/portrait_medium." + imagen2}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Description: {description}</p>
        </div>
      </div>
    </>
  );
};
