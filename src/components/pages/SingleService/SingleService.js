import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { _id, name, picture, price, rating, description } = service;
  return (
    <div className="card w-96 h-full bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-cyan-600 font-semibold">Price: ${price}</p>
        <small>Ratings: {rating}</small>
        <p>{description.slice(0, 100)}</p>
      </div>
      <div className="flex justify-center my-6">
        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn btn-ghost btn border-solid border-2 border-cyan-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
