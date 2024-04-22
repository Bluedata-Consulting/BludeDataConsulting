import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import image1 from "../../assets/tech1.jpg";
import image2 from "../../assets/tech2.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Tech = () => {
  return (  
    <div>
      <Navbar />

      <section className="pt-48 bg-gradient-to-b from-blue-shade-4/65 to-blue-shade-5/85">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 lg:max-w-5xl">
          <motion.h1
            className="text-3xl font-bold leading-none text-blue-shade-3 sm:text-5xl"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            Technology Consulting
          </motion.h1>
          <motion.p
            className="px-8 mt-8 mb-4 text-[17px] text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 2.0 }}
            viewport={{ once: true }}
          >
            Strategic Consulting for Digital Transformation and Emerging
            Technologies{" "}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 2.0 }}
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
              className="px-4 py-2 m-2 bg-blue-shade-3 hover:bg-blue-shade-2 text-[16px] font-semibold rounded-lg text-white"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-5 to-blue-shade-6/95 text-blue-shade-1 parallax-section">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <motion.div
                className="max-w-xl"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
                viewport={{ once: true }}
              >
                <p className="mt-4 text-gray-900 text-[18px] text-justify">
                  As technologies such as Digital platforms, RPA, machine
                  learning, and AI increasingly become key drivers of
                  organizational performance, enterprises are realizing the need
                  to shift from personal heroics to engineered performance to
                  more efficiently move ML models from development through to
                  production and management.
                </p>
                <p className="mt-4 text-gray-900 text-[18px] text-justify">
                  From health care to agriculture, fintech to media and
                  entertainment, ML holds great promise for many industries.
                  Driven by the wide availability of cloud-based computing
                  power, storage capacity, and easy-to-use AI toolsets, the
                  normalization of AI and ML continues at a rapid pace.
                </p>
                <p className="mt-4 text-gray-900 text-[18px] text-justify">
                  However, before enterprises can scale from dozens to thousands
                  of ML models and make machine learning an integral part of
                  their strategy, they need to address the AI skills gap and
                  integrate ML practices into individual lines of business.
                </p>
              </motion.div>
              <motion.div
                className="mt-12 md:mt-0"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={image1}
                  alt=""
                  className="object-cover scale-90 rounded-lg shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="sticky  flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-6/95 to-blue-shade-5 text-blue-shade-1 parallax-section">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <motion.div
                className="mt-12 mr-16 md:mt-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={image2}
                  alt=""
                  className="object-cover scale-90 rounded-lg shadow-md"
                />
              </motion.div>
              <motion.div
                className="max-w-xl"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
                viewport={{ once: true }}
              >
                <p className="mt-4 text-gray-900 text-[18px] text-justify">
                  A successful adaption of technology within the right timeline
                  requires the right approach & strategy which comes from
                  experience and expertise that some of the project teams may
                  lag based on the type of technology they are utilizing.
                </p>
                <p className="mt-4 text-gray-900 text-[18px] text-justify">
                  This is where we come in by partnering with our clients we act
                  as an extension to the internal team and help to develop the
                  strategy & adopt the right approach.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      <div className="sticky ">
        <Footer />
      </div>
    </div>
  );
};

export default Tech;
