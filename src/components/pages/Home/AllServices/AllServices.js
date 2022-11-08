import React from "react";

const AllServices = ({ service }) => {
  const { name, rating, description, picture, price } = service;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
