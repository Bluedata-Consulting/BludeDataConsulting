import React from "react";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-3 sm:text-3xl">
                About the company
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] leading-7 text-justify">
                We are a technology consulting company operating in South East
                Asia, the Indian subcontinent, and the Middle East region. We
                are passionate about taking on immense challenges that matter to
                our clients and helping them in optimizing business processes,
                reducing costs, and improving profits.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] leading-7 text-justify">
                We work very closely with our clients and help them in building
                their capabilities and leadership skills at every level and
                every opportunity. For ongoing projects of our clients, we
                collaborate with project teams, help them in validating their
                approach, methodology, the technology chosen, accelerate the
                project by contributing to solving problems, errors, and bugs.
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
                src={about1}
                alt=""
                className="object-cover scale-90 md:scale-110 lg:scale-75 rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="bg-white">
        <motion.div
          className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <motion.div
              className="md:w-5/12 lg:w-5/12 md:mr-4 mr-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={about2}
                alt=""
                className="object-cover scale-75"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="md:w-7/12 lg:w-6/12"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-3 sm:text-3xl">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We aim to go global by collaborating with organizations across
                the geographies by helping via right technology adaption,
                suitable approach for digital transformation and effective use
                of latest technologies to grow faster and function more
                effectively.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                Our vision is to add more names to the list of organizations who
                can count on us for our advice/help related to organizational
                growth and technology adaption.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We aim to retain our identity of a face of cutting edge
                technology consulting company having consultants who solve every
                problem with their innovative and creative approach.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-lg"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-3 sm:text-3xl">
                Why us?
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We are a pool of 500+ consultants having expertise in Digital
                Transformation, Mobilization, Automation, Artificial
                Intelligence, Machine Learning, Analytics, Internet of Things
                and Blockchain.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                With indepth knowledge to their profession, detailed real time
                experience to solving problems, out consultants help in
                translating client's strategic direction to business process,
                organization and IT while smoothly transitioning between field,
                strategy, business goal, compliances and operations, maintaining
                the measurable results.
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
                src={about3}
                alt=""
                className="object-cover scale-90 md:scale-110 lg:scale-75 rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Section;
