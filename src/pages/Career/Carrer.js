import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Carrer = () => {
  return (
    <div>
      <Navbar />
      <motion.section className="pb-24 pt-48 flex items-center justify-center bg-gradient-to-b from-blue-shade-4/65 to-blue-shade-5/85">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium leading-8 text-blue-shade-1/80">
              Unlock Your Career Potential with Blue Data Consulting
            </p>
            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-blue-shade-3">
              JOIN OUR DYNAMIC TEAM
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Blue Data Consulting offers diverse career opportunities in
              advanced analytics, AI, and data-driven solutions. Discover your
              path to growth and innovation.
            </p>
          </motion.div>
          <motion.div
            className="mt-6 flex items-center justify-center gap-4"
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
              className=" rounded-md bg-blue-shade-4 px-4 py-2 font-medium text-blue-shade-5 hover:bg-blue-shade-4/80"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section>
        <div className="container mx-auto py-4 lg:py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <motion.div
              className=""
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <div className="max-w-[85%] mx-auto mt-8">
                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  We at Blue Data Consulting are expanding at a faster pace by
                  adding more creative thinkers, innovators, and problem-solvers
                  to our team of experienced professionals and doers.
                </p>
                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  We invite you to join us and work with a diverse group of
                  creative professionals, developers to solve industries’ and
                  organizations’ most challenging problems.
                </p>

                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  You will work with teams having different expertise, various
                  levels of experiences, use cutting-edge technologies and
                  strategies to reinvent the way every job is done. You will
                  contribute to helping our clients to speed up the process of
                  turning ideas into value, developing, and adapting solutions
                  that transform the markets and lives.
                </p>

                <p className="mt-4 text-gray-600 text-[18px] text-justify">
                  For the latest job openings, visit our{" "}
                  <Link
                    to="https://www.linkedin.com/company/bluedatac/"
                    target="_blank"
                    className="text-blue-shade-4 font-bold hover:text-blue-shade-3"
                  >
                    LinkedIn page
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carrer;
