import React from "react";
import image from "../../assets/bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:pr -8">
          <motion.div
            className="max-w-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="mb-8">
              <motion.h1
                className="text-3xl font-extrabold sm:text-5xl leading-normal"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
              >
                Welcome to{" "}
                <p className="block font-extrabold text-blue-shade-3 leading-normal">
                  {" "}
                  Blue Data Consulting
                </p>
              </motion.h1>
              <motion.p
                className="mt-4 max-w-xl sm:text-xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
              >
                Empowering businesses with cutting-edge technologies like AI,
                ML, Data Science, IoT, and RPA, guiding you on the path to
                success.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            >
              <Link
                to="/about"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="px-6 py-3 font-medium text-[18px] text-white rounded-lg bg-blue-shade-3 hover:bg-blue-shade-2"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
