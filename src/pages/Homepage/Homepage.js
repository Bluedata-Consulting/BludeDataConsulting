import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Hero from "./Hero";
import Article from "./Article";
import Services from "./Services";
import Testimonals from "./Testimonals";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Testimonals />
      <Article />
      <Footer />
    </div>
  );
};

export default Homepage;
