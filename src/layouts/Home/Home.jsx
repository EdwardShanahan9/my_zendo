import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
const Home = () => {
  return (
    <div className="w-[90%] lg:w-[90%] mx-auto">
      <Navbar />

      <main>
        <Hero />

        <Features />
      </main>
    </div>
  );
};

export default Home;
