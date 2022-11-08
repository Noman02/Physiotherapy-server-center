import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/home-bg.jpg";
import Choose from "./Choose/Choose";

const Home = () => {
  return (
    <div>
      <div>
        <div className="hero mt-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-cyan-600 font-bold">Dr: Bruno</span>{" "}
                Professional Physiotherapist
              </h1>
              <p className="py-6  text-2xl">
                He is providing high quality{" "}
                <span className="text-cyan-600">Physiotherapy</span> Services
              </p>
              <button className="btn bg-cyan-600">Get Started</button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2> Three service</h2>
          <Link>
            <button className="btn btn-outline hover:bg-cyan-600">
              See All
            </button>
          </Link>
        </div>
      </div>
      <Choose></Choose>
    </div>
  );
};

export default Home;
