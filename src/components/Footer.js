import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo40.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-2xl px-4 pt-8 pb-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link
              to="/"
              className="inline-flex items-center space-x-2"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <span className="scale-110">
                <img src={logo} alt="" className="scale-90" />
              </span>
            </Link>

            <div className="flex gap-x-2 mt-6">
              <Link
                to="https://www.youtube.com/@bluedatac"
                target="_blank"
                className="inline-flex items-center justify-center h-10 w-10 text-rose-700 rounded-full hover:text-rose-700/60"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/bluedatac/"
                target="_blank"
                className="inline-flex items-center justify-center h-10 w-10 text-blue-shade-4 rounded-full hover:text-blue-shade-4/60"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </Link>
              <Link
                to="https://www.instagram.com/bluedatac/"
                target="_blank"
                className="inline-flex items-center justify-center h-10 w-10 text-fuchsia-700 rounded-full hover:text-fuchsia-700/60"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </Link>
              <Link
                to="https://www.facebook.com/bluedatac"
                target="_blank"
                className="inline-flex items-center justify-center h-10 w-10 text-blue-shade-3 rounded-full hover:text-blue-shade-3/60"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-bold text-xl text-blue-shade-1">COMPANY</p>
              <nav className="flex flex-col mt-2 font-normal text-[16px] text-blue-shade-2/90">
                <ul className="leading-8">
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400 "
                    >
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/team"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-xl text-blue-shade-1 ">SERVICES</p>
              <nav className="flex flex-col mt-2 font-normal text-[16px] text-blue-shade-2/90">
                <ul className="leading-8">
                  <li>
                    <Link
                      to="/techconsulting"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400 "
                    >
                      Technology Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/analytics"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Analytics & AI Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scaling"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Scaling Teams
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-xl text-blue-shade-1 ">ARTICLES</p>
              <nav className="flex flex-col mt-2 font-normal text-[16px] text-blue-shade-2/90">
                <ul className="leading-8">
                  <li>
                    <Link
                      to="/article1"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400 "
                    >
                      Transforming Manufacturing Through Advance Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/article2"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      A New Era of AI: Meet ChatGPT, the OpenAI-Trained Language
                      Model
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/article3"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="hover:text-blue-400"
                    >
                      Transform Your Customer Experience with AI & Data
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-md text-blue-shade-2">
          Copyright © 2024 Blue Data Consulting. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
