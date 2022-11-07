import React from "react";
import img from "../../../assets/home-bg.jpg";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <img className="h-full w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
