import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/doctor.jpg";
import Article from "./Article/Article";
import Choose from "./Choose/Choose";

const Home = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div className="hero bg-base-200 mt-12">
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
      </div>
      <div className="text-center">
        <h2>services</h2>
        <Link>
          <button className="btn btn-outline hover:bg-cyan-600">See All</button>
        </Link>
      </div>
      <Choose></Choose>
      <Article></Article>
    </div>
  );
};

export default Home;
