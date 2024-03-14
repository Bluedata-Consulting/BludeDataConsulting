import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Analytics = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-12 md:py-32 px-12 lg:px-12 bg-blue-shade-5/25">
        <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-center text-xs font-semibold leading-normal md:text-sm">
            Share your thoughts
          </p>
        </div>
        <p className="text-center text-4xl font-bold text-gray-900 md:text-5xl md:leading-10 mt-4 mb-4">
          Analytics & AI Solution
        </p>
        <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
          Digital experience, analytics, and cloud are enabling technologies
          that have proven their value already to many digital companies across
          the world.
        </p>
      </div>

      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="max-w-xl">
              <p className="mt-4 text-gray-600 text-[18px] leading-8">
                Analytics includes foundational capabilities and tools that
                generate powerful insights. Data management, data governance,
                and supporting architecture are age old problems that not only
                are critical building blocks for AI programs but are tactical
                concerns as organizations work in a dynamic and complex
                regulatory environment with mandates on data residency, privacy,
                and usage.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/blue_data_consulting_analytics_blog_latest_india_usa_sea_uae-768x256.png"
                alt=""
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 mr-16 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/analytics_consulting_data_ai_it_services_career-768x313.jpg"
                alt=""
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-xl">
              <p className="mt-4 text-gray-600 text-[18px] leading-8">
                We at Blue Data Consulting are a team of experts, have been
                helping organizations in building AI & Data products. Our
                consultants have experience of 10+ years while working with
                multiple organizations and building the new age AI & analytics
                products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-4 lg:py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <div className="">
              <h2 className="text-3xl text-center font-bold text-gray-800 lg:text-4xl">
                Cognitive Technologies
              </h2>
              <div className="max-w-[85%] mx-auto mt-8">
                <p className="mt-4 text-gray-600 text-[18px]">
                  Cognitive technologies, such as machine learning, neural
                  networks, robotic process automation, bots, natural language
                  processing, neural nets, and the broader domain of AI, have
                  the potential to transform nearly every industry.
                </p>
                <p className="mt-4 text-gray-600 text-[18px]">
                  These technologies personalize and contextualize the
                  human-technology interaction, allowing businesses to provide
                  tailored language- and image-based information and services,
                  with minimal or no human involvement.
                </p>

                <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50">
                  <p class="text-xl italic font-medium leading-relaxed text-gray-900 ">
                    "Demand for cognitive technologies is skyrocketing—IDC
                    forecasts spending to reach US$77.6 billion in 2022."
                  </p>
                </blockquote>

                <p className="mt-4 text-gray-600 text-[18px]">
                  We at Blue Data Consulting are a team of experts, have been
                  helping organizations in building AI & Data products. Our
                  consultants have experience of 10+ years while working with
                  multiple organizations and building the new age AI & analytics
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto pt-8 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <div className="max-w-[85%] mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                Computer Vision
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                Computer vision is a field where we deal with data in the form
                of images and videos. The common applications of computer vision
                include image classification, object localization, object
                detection, tag generation from images, semantic and instance
                segmentation.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                We at Blue Data Consulting have the right set of experts to
                deliver computer vision-based applications and products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto pt-8 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center">
            <div className="max-w-[85%] mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                Natural Language Processing
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                Natural Language Processing is a field of AI which deals with
                data in the form of text and speech. Commonly used NLP
                applications are sentiment analysis, social media analysis,
                chatbots, conversational engines, operational bots, topic
                modeling, content filtering, language modeling, language
                translation, speech processing, speech to text, and text to
                speech conversion.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                We offer all of these functionalities as solutions to our
                customers, integrate these functionalities with client products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
