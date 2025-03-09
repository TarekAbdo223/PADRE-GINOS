import React from "react";

const Pizza = ({ name, description }) => {
  return (
    <div className="pizza">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Pizza;
