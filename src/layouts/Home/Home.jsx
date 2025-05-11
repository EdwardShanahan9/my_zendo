import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import CTA from "./CTA/CTA";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />

      <main>
        <Hero />

        <Features />

        <About />

        <Testimonials />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
