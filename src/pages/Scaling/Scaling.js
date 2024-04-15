import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import scale1 from "../../assets/scale1.jpg";
import scale2 from "../../assets/scale2.jpg";
import scale3 from "../../assets/scale3.jpg";
import scale4 from "../../assets/scale4.jpg";
import { motion } from "framer-motion";

const Scaling = () => {
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
            Scaling Teams
          </motion.h1>
          <motion.p
            className="px-8 mt-8 mb-4 text-[17px] text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 2.0 }}
            viewport={{ once: true }}
          >
            Empowering Workforces Through Corporate Training and Talent
            Analytics in Advanced Technologies
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

      {/* <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-xl"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We help our clients in upskilling their existing workforce to
                fill gaps in their skillsets by providing corporate training in
                technologies such as Artificial Intelligence, Machine Learning,
                Deep Learning, Robotics Process Automation, Internet of Things,
                Dev ops, etc.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                With the help of internationally certified and experienced
                instructors, we provide successful learning and development
                solutions to IT & non-IT clients.
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
                src={scale1}
                alt=""
                className="object-cover scale-90 rounded-md shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="mr-0 lg:mr-16 md:mt-0 scale-90"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/bluedata_consulting_coporate_training_why_us_technology_upskillling_porgrams_best_vendor.jpg"
                alt=""
                className="object-cover h-[90%] scale-75 rounded-lg "
              />
            </motion.div>
            <motion.div
              className="max-w-2xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                Why companies choose us for their upskilling needs?
              </h2>
              <ul>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  <span className="font-semibold text-blue-shade-1">
                    E2E managed Service:
                  </span>{" "}
                  We do not limit ourselves to providing skilled and experienced
                  consultant/Instructor, rather we contribute by providing
                  managed learning solution which includes talent assessment,
                  blended learning, self-paced pre-learning, LMS-based learning
                  management, cloud labs for hands-on, case studies, datasets,
                  etc.
                </li>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  <span className="font-semibold text-blue-shade-1">
                    Quality:
                  </span>{" "}
                  Highly rated courseware and manuals, certified instructors
                  with real-time industry experience
                </li>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  <span className="font-semibold text-blue-shade-1">
                    Flexibility:
                  </span>{" "}
                  With the help of experienced SMEs and learning consultants, we
                  provide tailored learning programs to fit the need of the
                  client
                </li>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  <span className="font-semibold text-blue-shade-2">
                    Multiple modalities:
                  </span>{" "}
                  including classroom-based learning, instructor-led online
                  learning, self-paced learning, onsite corporate training, and
                  e-learning.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-xl"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                Talent assessment
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                Along with providing corporate training services we also provide
                services to get the analytical assessment of candidates by
                evaluating them on different technologies and at various levels
                of experience.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We have served over 30 clients from the Asia Pacific and the
                Middle East region for talent assessment and analytics while
                delivering multiple corporate training programs.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 md:mt-0 flex justify-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <img
                src={scale2}
                alt=""
                className="object-cover scale-90  rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="mr-0 lg:mr-16 md:mt-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <img
                src={scale3}
                alt=""
                className="object-cover rounded-lg shadow-md"
              />
            </motion.div>
            <motion.div
              className="max-w-2xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                Certification from technology providers
              </h2>
              <ul>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  We help our clients in scaling up the skillsets of the
                  existing workforce with capabilities related to new and
                  disrupting technologies to get them certified by technology
                  providers.
                </li>
                <li className="mt-4 text-gray-600 text-[18px] text-justify">
                  So far, we have served 50+ clients to get their workforce
                  certified on different tools from Microsoft azure, IBM cloud,
                  AWS, UiPath, Automation Anywhere, etc.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <motion.div
              className="max-w-xl"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                Project based customized training
              </h2>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                We help our clients in scaling up their teams with technical and
                non-technical skill sets needed for a specific project. As a
                result, the team delivers the project within the timeline
                successfully.
              </p>
              <p className="mt-4 text-gray-600 text-[18px] text-justify">
                Technology vendors such as Microsoft, AWS, IBM, and Google cloud
                bring new versions of their products and tools into the markets
                while following their path of continuous innovation. We help in
                providing corporate training programs to help our customers use
                these products and tools efficiently in the project
                implementation.
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
                src={scale4}
                alt=""
                className="object-cover scale-90 rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      <div className="relative">
        <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-5 to-blue-shade-6/95 text-blue-shade-1 parallax-section">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  className="max-w-xl"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <p className="mt-4 text-gray-900 text-[20px] text-justify">
                    We help our clients in upskilling their existing workforce
                    to fill gaps in their skillsets by providing corporate
                    training in technologies such as Artificial Intelligence,
                    Machine Learning, Deep Learning, Robotics Process
                    Automation, Internet of Things, Dev ops, etc.
                  </p>
                  <p className="mt-4 text-gray-900 text-[20px] text-justify">
                    With the help of internationally certified and experienced
                    instructors, we provide successful learning and development
                    solutions to IT & non-IT clients.
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
                    src={scale1}
                    alt=""
                    className="object-cover scale-90 rounded-md shadow-md"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-6/95 to-blue-shade-5 text-blue-shade-2 parallax-section">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  className="mr-0 lg:mr-16 md:mt-0 scale-90"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/bluedata_consulting_coporate_training_why_us_technology_upskillling_porgrams_best_vendor.jpg"
                    alt=""
                    className="object-cover h-[90%] scale-75 rounded-lg "
                  />
                </motion.div>
                <motion.div
                  className="max-w-2xl"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                    Why companies choose us for their upskilling needs?
                  </h2>
                  <ul>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      <span className="font-semibold text-blue-shade-1">
                        E2E managed Service:
                      </span>{" "}
                      We do not limit ourselves to providing skilled and
                      experienced consultant/Instructor, rather we contribute by
                      providing managed learning solution which includes talent
                      assessment, blended learning, self-paced pre-learning,
                      LMS-based learning management, cloud labs for hands-on,
                      case studies, datasets, etc.
                    </li>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      <span className="font-semibold text-blue-shade-1">
                        Quality:
                      </span>{" "}
                      Highly rated courseware and manuals, certified instructors
                      with real-time industry experience
                    </li>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      <span className="font-semibold text-blue-shade-1">
                        Flexibility:
                      </span>{" "}
                      With the help of experienced SMEs and learning
                      consultants, we provide tailored learning programs to fit
                      the need of the client
                    </li>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      <span className="font-semibold text-blue-shade-2">
                        Multiple modalities:
                      </span>{" "}
                      including classroom-based learning, instructor-led online
                      learning, self-paced learning, onsite corporate training,
                      and e-learning.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-5 to-blue-shade-6/95 text-blue-shade-2 parallax-section">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  className="max-w-xl"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                    Talent assessment
                  </h2>
                  <p className="mt-4 text-gray-600 text-[18px] text-justify">
                    Along with providing corporate training services we also
                    provide services to get the analytical assessment of
                    candidates by evaluating them on different technologies and
                    at various levels of experience.
                  </p>
                  <p className="mt-4 text-gray-600 text-[18px] text-justify">
                    We have served over 30 clients from the Asia Pacific and the
                    Middle East region for talent assessment and analytics while
                    delivering multiple corporate training programs.
                  </p>
                </motion.div>
                <motion.div
                  className="mt-12 md:mt-0 flex justify-center"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={scale2}
                    alt=""
                    className="object-cover scale-90  rounded-lg shadow-md"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-6/95 to-blue-shade-5 text-blue-shade-2 parallax-section">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  className="mr-0 lg:mr-16 md:mt-0"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={scale3}
                    alt=""
                    className="object-cover rounded-lg shadow-md"
                  />
                </motion.div>
                <motion.div
                  className="max-w-2xl"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                    Certification from technology providers
                  </h2>
                  <ul>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      We help our clients in scaling up the skillsets of the
                      existing workforce with capabilities related to new and
                      disrupting technologies to get them certified by
                      technology providers.
                    </li>
                    <li className="mt-4 text-gray-600 text-[18px] text-justify">
                      So far, we have served 50+ clients to get their workforce
                      certified on different tools from Microsoft azure, IBM
                      cloud, AWS, UiPath, Automation Anywhere, etc.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className="sticky top-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-shade-5 to-blue-shade-6/95 text-blue-shade-2 parallax-section">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <motion.div
                  className="max-w-xl"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-blue-shade-2 sm:text-3xl">
                    Project based customized training
                  </h2>
                  <p className="mt-4 text-gray-600 text-[18px] text-justify">
                    We help our clients in scaling up their teams with technical
                    and non-technical skill sets needed for a specific project.
                    As a result, the team delivers the project within the
                    timeline successfully.
                  </p>
                  <p className="mt-4 text-gray-600 text-[18px] text-justify">
                    Technology vendors such as Microsoft, AWS, IBM, and Google
                    cloud bring new versions of their products and tools into
                    the markets while following their path of continuous
                    innovation. We help in providing corporate training programs
                    to help our customers use these products and tools
                    efficiently in the project implementation.
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
                    src={scale4}
                    alt=""
                    className="object-cover scale-90 rounded-lg shadow-md"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scaling;
