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
const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-shade-5/30 py-4 text-gray-800 px-8">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
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
                  <img src={logo} alt="" className="scale-75" />
                </span>
              </Link>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl text-blue-shade-3 font-bold pb-2 mb-4 border-b-4 border-blue-shade-3">
                  Company
                </h2>
              </div>
              <ul className="leading-8">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-blue-400"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl text-blue-shade-3 font-bold pb-2 mb-4 border-b-4 border-blue-shade-3">
                  Blog
                </h2>
              </div>
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
                    className="hover:text-blue-400"
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
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl text-blue-shade-3 font-bold pb-2 mb-4 border-b-4 border-blue-shade-3">
                  Connect With Us
                </h2>
              </div>
              <div className="flex gap-x-1">
                <Link
                  to="https://www.youtube.com/@bluedatac"
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 w-10 border border-blue-shade-1 text-blue-shade-1 rounded-full mr-1 hover:text-blue-shade-3 hover:border-blue-shade-3"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/bluedatac/"
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 w-10 border border-blue-shade-1 text-blue-shade-1 rounded-full mr-1 hover:text-blue-shade-3 hover:border-blue-shade-3"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  to="https://www.instagram.com/bluedatac/"
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 w-10 border border-blue-shade-1 text-blue-shade-1 rounded-full mr-1 hover:text-blue-shade-3 hover:border-blue-shade-3"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to="https://www.facebook.com/bluedatac"
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 w-10 border border-blue-shade-1 text-blue-shade-1 rounded-full mr-1 hover:text-blue-shade-3 hover:border-blue-shade-3"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-shade-2 py-2 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024 Blue Data Consulting. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
