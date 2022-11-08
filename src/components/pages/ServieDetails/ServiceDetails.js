import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, picture, price, rating, description } = service;
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={picture}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
          />
        </div>
        <div className="p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-lg font-semibold leading-none sm:text-2xl">
            {name}
          </h1>
          <p className="text-lg my-2 text-cyan-600 font-semibold ">
            Price: ${price}
          </p>
          <p className="flex items-center">
            Rating:{" "}
            <FaStarHalfAlt className="mx-2 text-yellow-400"></FaStarHalfAlt>{" "}
            {rating}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <p className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
