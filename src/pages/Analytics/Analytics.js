import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image1 from "../../assets/ai1.jpg";
import image2 from "../../assets/ai2.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div>
      <Navbar />
      <section className="pt-32 bg-gradient-to-b from-blue-shade-4/65 to-blue-shade-5/85">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
          <motion.h1
            className="text-4xl font-bold text-blue-shade-3 leading-none sm:text-5xl"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Analytics & AI Solutions
          </motion.h1>
          <motion.p
            className="px-8 mt-8 mb-4 text-[18px] text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Driving Business Transformation through Advanced Analytics and AI
            Solutions
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <motion.div
              className="max-w-xl"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mt-4 text-gray-600 text-[18px] leading-8 text-justify">
                Analytics includes foundational capabilities and tools that
                generate powerful insights. Data management, data governance,
                and supporting architecture are age old problems that not only
                are critical building blocks for AI programs but are tactical
                concerns as organizations work in a dynamic and complex
                regulatory environment with mandates on data residency, privacy,
                and usage.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={image1}
                alt=""
                className="object-cover scale-75 rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="mt-12 mr-16 md:mt-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mt-4 text-gray-600 text-[18px] leading-8 text-justify">
                We at Blue Data Consulting are a team of experts, have been
                helping organizations in building AI & Data products. Our
                consultants have experience of 10+ years while working with
                multiple organizations and building the new age AI & analytics
                products.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section>
        <div className="container mx-auto py-4 lg:py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <motion.div
              className=""
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-center font-bold text-blue-shade-2 lg:text-4xl">
                Cognitive Technologies
              </h2>
              <div className="max-w-[85%] mx-auto mt-8">
                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  Cognitive technologies, such as machine learning, neural
                  networks, robotic process automation, bots, natural language
                  processing, neural nets, and the broader domain of AI, have
                  the potential to transform nearly every industry.
                </p>
                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  These technologies personalize and contextualize the
                  human-technology interaction, allowing businesses to provide
                  tailored language- and image-based information and services,
                  with minimal or no human involvement.
                </p>

                <blockquote class="p-4 my-4 border-s-4 border-blue-shade-3 bg-blue-shade-5/50">
                  <p class="text-xl italic font-medium leading-relaxed text-blue-shade-2 ">
                    "Demand for cognitive technologies is skyrocketing—IDC
                    forecasts spending to reach US$77.6 billion in 2022."
                  </p>
                </blockquote>

                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  We at Blue Data Consulting are a team of experts, have been
                  helping organizations in building AI & Data products. Our
                  consultants have experience of 10+ years while working with
                  multiple organizations and building the new age AI & analytics
                  products.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto pt-8 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <motion.div
              className="max-w-[85%] mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-blue-shade-2 sm:text-3xl">
                Computer Vision
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                Computer vision is a field where we deal with data in the form
                of images and videos. The common applications of computer vision
                include image classification, object localization, object
                detection, tag generation from images, semantic and instance
                segmentation.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We at Blue Data Consulting have the right set of experts to
                deliver computer vision-based applications and products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto pt-8 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <motion.div
              className="max-w-[85%] mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-blue-shade-2 sm:text-3xl">
                Natural Language Processing
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                Natural Language Processing is a field of AI which deals with
                data in the form of text and speech. Commonly used NLP
                applications are sentiment analysis, social media analysis,
                chatbots, conversational engines, operational bots, topic
                modeling, content filtering, language modeling, language
                translation, speech processing, speech to text, and text to
                speech conversion.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We offer all of these functionalities as solutions to our
                customers, integrate these functionalities with client products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
