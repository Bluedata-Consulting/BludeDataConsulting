import React from "react";
import image from "../../assets/bg.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Welcome to
                <strong className="block font-extrabold text-blue-shade-3">
                  {" "}
                  Blue Data Consulting
                </strong>
              </h1>

              <p className="mt-4 max-w-xl sm:text-xl/relaxed">
                Empowering businesses with cutting-edge technologies like AI,
                ML, Data Science, IoT, and RPA, guiding you on the path to
                success.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-4"> */}
              <Link
                to="/about"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="px-6 py-3 font-medium text-[18px] text-white rounded-lg  bg-blue-shade-3 hover:bg-blue-shade-2"
              >
                Get Started
              </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
