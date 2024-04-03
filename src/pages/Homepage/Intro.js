import React from "react";
import image from "../../assets/bdc.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      className="mt-12 py-16 bg-white mx-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <motion.div
          className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="md:5/12 lg:w-1/3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <img src={image} alt="" className="rounded-lg" />
          </motion.div>
          <motion.div
            className="md:7/12 lg:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.h2
              className="text-3xl text-blue-shade-2 font-bold lg:text-[40px] lg:leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              We are a technology consulting company
            </motion.h2>
            <motion.p
              className="mt-6 text-lg text-gray-700 lg:text-[18px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              Hi, we are a consulting company, we thank you for your time to
              read about us.
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            >
              We work with companies and partners like you to help you
              accelerate your company and ongoing projects by using disruptive
              technologies.
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            >
              Are you planning to start your journey with technologies such as
              Artificial Intelligence, Machine Learning, Data Science, IoT, RPA
              and facing challenge of right approach, tools, team and process
              selection?
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
            >
              No worries! We have created a group of like-minded people to help
              you grow your business with their expertise in these disruptive
              technologies. Everything is about you and what you want to do, We
              are only here to guide you and support to make you realize your
              vision!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
