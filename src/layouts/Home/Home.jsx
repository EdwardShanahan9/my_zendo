import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
const Home = () => {
  return (
    <div className="w-[90%] lg:w-[90%] mx-auto">
      <Navbar />

      <Hero />
    </div>
  );
};

export default Home;
