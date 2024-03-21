import React from "react";
import image from "../../assets/bdc.png";

const Intro = () => {
  return (
    <div className="mt-12 py-16 bg-white mx-4">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-1/3">
            <img src={image} alt="" />
          </div>

          <div className="md:7/12 lg:w-2/3">
            <h2 className="text-3xl text-blue-shade-2 font-bold lg:text-[40px] lg:leading-tight">
              We are a technology consulting company
            </h2>
            <p className="mt-6 text-lg text-gray-700 lg:text-[18px]">
              Hi, we are a consulting company, we thank you for your time to
              read about us.
            </p>
            <p className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify">
              We work with companies and partners like you to help you
              accelerate your company and ongoing projects by using disruptive
              technologies.
            </p>
            <p className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify">
              Are you planning to start your journey with technologies such as
              Artificial Intelligence, Machine Learning, Data Science, IoT, RPA
              and facing challenge of right approach, tools, team and process
              selection?
            </p>
            <p className="mt-4 text-lg text-gray-700 lg:text-[18px] text-justify">
              No worries! We have created a group of like-minded people to help
              you grow your business with their expertise in these disruptive
              technologies. Everything is about you and what you want to do, We
              are only here to guide you and support to make you realize your
              vision!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
