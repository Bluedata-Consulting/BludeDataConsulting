import React from "react";
import icon from "../../assets/icon.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-slate-100/75 flex items-center justify-center overflow-hidden z-50 ">
      <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className=" relative ">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <p className="flex text-2xl uppercase text-g1 text-blue-shade-1 font">
                Our Story
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug ">
                We make you look
                <span className="my-1 inline-block border-b-8 border-cyan-200/50 px-4 font-bold text-g4 animate__animated animate__flash text-blue-shade-2">
                  different
                </span>
              </h2>
              <p className="text-base text-gray-700">
                Discover the magic that happens when passion meets dentistry.
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <Link
                  to="/contact"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-g1 text-blue-shade-1"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  BE A PART IN OUR JOURNEY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            <div className="abg-orange-400 mx-auto w-fit overflow-hidden scale-125 rounded-br-none rounded-tl-none">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
        Our Story
      </div>
    </div>
  );
};

export default Hero;
