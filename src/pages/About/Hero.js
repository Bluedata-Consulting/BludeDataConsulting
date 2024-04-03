import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section className="pb-24 pt-48 flex items-center justify-center bg-gradient-to-b from-blue-shade-4/65 to-blue-shade-5/85">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-medium leading-8 text-blue-shade-1/80">
            Revolutionizing Businesses with Advanced Analytics and AI Solutions
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-blue-shade-3">
            Welcome to Blue Data Consulting
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Blue Data Consulting leverages advanced analytics and AI to drive
            innovation and growth for businesses. Our solutions unlock insights
            and optimize processes, empowering organizations to stay ahead.
          </p>
        </motion.div>
        <motion.div
          className="mt-6 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className=" rounded-md bg-blue-shade-4 px-5 py-3 font-medium text-blue-shade-5 hover:bg-blue-shade-4/80"
          >
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
