import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import anshu from "../../assets/anshu.png";
import aashish from "../../assets/aashish.png";
import rajeev from "../../assets/rajeev.png";
import deep from "../../assets/deep.png";
import divya from "../../assets/divya.png";
import hetvi from "../../assets/hetvi.png";
import rohitash from "../../assets/rohitash.png";
import ujjawal from "../../assets/ujjawal.png";
import devendra from "../../assets/devendra.png";
import krishna from "../../assets/krishna.png";
import snehal from "../../assets/snehal.png";
import feny from "../../assets/feny.png";
import madhav from "../../assets/madhav.png";
import sageer from "../../assets/sageer.png";
import vikash from "../../assets/vikash.png";
import { motion } from "framer-motion"; // Import Framer Motion

const Team = () => {
  const teamMembers = [
    {
      name: "Anshu Pandey",
      role: "Co-founder & Head of Business",
      image: anshu,
    },
    {
      name: "Aashish Pandey",
      role: "Co-founder & Head of Business",
      image: aashish,
    },
    {
      name: "Rajeev Kumar Pathak",
      role: "Advocate & Lawyer at Delhi High Court",
      image: rajeev,
    },
    {
      name: "Rohitash Singh",
      role: "Head of Finance & Accounting",
      image: rohitash,
    },
    {
      name: "Sageer Mohammad",
      role: "Operations & Delivery Manager",
      image: sageer,
    },
    {
      name: "Hetvi Dalvi",
      role: "Associate HR",
      image: hetvi,
    },
    {
      name: "Ujjwal Rana",
      role: "Analytics Consultant",
      image: ujjawal,
    },
    {
      name: "Deep Pipaliya",
      role: "Associate Graphic Designer",
      image: deep,
    },
    {
      name: "Madhav Jariwala",
      role: "PowerApps Developer",
      image: madhav,
    },
    {
      name: "Krishna Sharma",
      role: "Cloud Engineer",
      image: krishna,
    },
    {
      name: "Divya Rank",
      role: "Associate Data Scientist",
      image: divya,
    },
    {
      name: "Snehal Gamit",
      role: "Associate Data Scientist",
      image: snehal,
    },
    {
      name: "Vikash Singh",
      role: "Associate Data Scientist",
      image: vikash,
    },
    {
      name: "Devendra Parmar",
      role: "Associate Data Scientist",
      image: devendra,
    },
    {
      name: "Feny Ganeshwala",
      role: "Assistant Accountant",
      image: feny,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-white py-16 sm:pt-28 sm:pb-12 lg:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl mb-10 mt-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-28">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-blue-shade-4 uppercase rounded-full bg-teal-accent-400">
                Dream Team
              </p>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-shade-2 lg:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative ml-2">Welcome</span>
              </span>{" "}
              our talented team of professionals
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              With over 50 years of combined experience.
            </p>
          </div>
          <div className="flex justify-center my-12">
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
              {teamMembers.map((member, key) => (
                <motion.div
                  key={key}
                  className="flex"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: key * 0.1 }}
                >
                  <img
                    className="object-cover w-28 h-28 mr-4 rounded-full shadow"
                    src={member.image}
                    alt="Person"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-[18px] font-bold text-blue-shade-1">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-700">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
