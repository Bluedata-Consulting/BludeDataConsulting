import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Technology Consulting",
      description:
        "We help organizations to accelerate ongoing projects and plan their upcoming projects from AI, data, automation and IoT domain. we get involved in mentoring, monitoring and architecting technology projects.",
      link: "/techconsulting",
    },
    {
      title: "Analytics & AI Solution",
      description:
        "We at Blue Data Consulting help organizations by building AI, Data engines, integrating silos with in the organizations, analyzing their business processes & developing productive solutions.",
      link: "/analytics",
    },
    {
      title: "Scaling Teams",
      description:
        "We help organizations to scale up their existing teams by providing required coaching and training on the relevant tools, technology, approach and project development methodology.  ",
      link: "/scaling",
    },
  ];

  return (
    <motion.div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h2
          className="max-w-lg mb-2 text-3xl font-bold leading-none tracking-normal sm:text-4xl md:mx-auto text-blue-shade-3"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative pl-2 text-blue-shade-3"> Services</span>
          </span>{" "}
          we Offers.
        </motion.h2>
        <motion.p
          className="text-md text-gray-700 md:text-lg tracking-wide"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          Our commitment is to provide comprehensive quality services.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.8,
          staggerChildren: 0.2,
        }}
      >
        {services.map((service, key) => (
          <motion.div
            className="flex flex-col justify-between p-5 border rounded shadow-sm"
            key={key}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.div
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-shade-5/40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <svg
                  className="w-12 h-12 text-blue-shade-3"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </motion.div>
              <motion.h6
                className="mb-2 font-bold leading-7 text-xl text-blue-shade-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                {service.title}
              </motion.h6>
              <motion.p
                className="mb-3 text-[16px] text-gray-700 text-justify"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                {service.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <Link
                to={service.link}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-shade-3 hover:text-blue-shade-2"
              >
                Learn more
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
