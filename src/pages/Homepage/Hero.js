import React from "react";
import image from "../../assets/bg.jpg";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us find your
                <strong className="block font-extrabold text-blue-shade-3">
                  {" "}
                  Forever Home.{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/"
                className="px-8 py-3 text-sm font-medium text-white bg-blue-shade-3 hover:bg-blue-shade-2"
              >
                Get Started
              </a>

              <a
                href="/"
                className="px-8 py-3 text-sm font-medium text-blue-shade-3 hover:text-blue-shade-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
