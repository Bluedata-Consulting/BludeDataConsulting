import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image1 from "../../assets/a1.png";
import image2 from "../../assets/a2.jpeg";

const Article1 = () => {
  return (
    <div>
      <Navbar />
      <div className="relative pt-16 pb-4 px-2 sm:pt-24 lg:pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <div className="text-blue-shade-2 font-semibold text-sm pb-4">
                DATA & AUTOMATION
              </div>
              <h1
                href="/"
                className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Transforming Manufacturing Through Advance Analytics
              </h1>
              {/* <hr />   */}
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                These years have seen significant advances in data and analytics
                capabilities, resulting in many passages. Most progress has been
                made in a variety of ways, including B. Development of more
                sophisticated algorithms, exponential growth in the amount of
                data available, and constant improvement in storage and
                computational power. The combination of these trends has
                disrupted business and fuelled rapid technological progress.
              </p>
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Many industries are very slow-moving regarding the technological
                change, especially digital and data transformations. One of many
                vital sectors of this type is manufacturing, which is generally
                resilient to change. Over the course of the three industrial
                revolutions, companies depended on a variety of energy sources,
                from water and steam to electricity and information technology,
                to run their businesses, operate their businesses, manufacture
                their products, and provide their services.
              </p>
              <img src={image2} alt="" className="rounded-md" />
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                Manufacturing companies often face highly complex challenges
                like
              </p>
              <ul className="list-disc ml-12">
                <li className="pb-2">Labour shortage</li>
                <li className="pb-2">
                  Absence of data-driven process innovation
                </li>
                <li className="pb-2">Equipment maintenance</li>
                <li className="pb-2">Lack of information</li>
                <li className="pb-2">Interruptions in the supply chain</li>
              </ul>
              <img src={image1} alt="" />
              <p className="text-[15px] md:text-base leading-6 my-5 text-justify">
                To solve the problems within the industry, the growing volume of
                data they generate, and advanced tools and techniques are being
                leveraged by organizations to transform their business. For
                example, a tire manufacturing company is trying to improve the
                quality of the tires produced; using a heap of data and industry
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article1;
