import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Hero from "./Hero";
import Article from "./Article";
import Services from "./Services";
import Testimonals from "./Testimonals";
import AnimatedComponent from "./AnimatedComponent";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>
      <AnimatedComponent>
        <Intro />
      </AnimatedComponent>
      <AnimatedComponent>
        <Services />
      </AnimatedComponent>
      <AnimatedComponent>
        <Testimonals />
      </AnimatedComponent>
      {/* <AnimatedComponent> */}
      <Article />
      {/* </AnimatedComponent> */}
      <Footer />
    </div>
  );
};

export default Homepage;
