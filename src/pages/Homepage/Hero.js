import React from "react";
import Image from "../../assets/homepageBg.jpg";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="py-64 relative bg-cover bg-clip-border backdrop-blur-sm bg-center"
      style={backgroundImageStyle}
    >
      <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h1 className="text-gray-100 font-bold text-4xl lg:text-[55px] leading-tight mb-6">
          Blue Data Consulting
        </h1>
        <p className="text-gray-100 text-lg md:text-2xl mb-12">
          Efficient, Accurate, and Automated Systems for Amplified Business
          Intelligence.
        </p>
      </div>
    </div>
  );
};

export default Hero;
