import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Tech = () => {
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
          Technology Consulting
        </p>
        <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p>
      </div>
      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-xl">
              <p className="mt-4 text-gray-600 text-[18px]">
                As technologies such as Digital platforms, RPA, machine
                learning, and AI increasingly become key drivers of
                organizational performance, enterprises are realizing the need
                to shift from personal heroics to engineered performance to more
                efficiently move ML models from development through to
                production and management.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                From health care to agriculture, fintech to media and
                entertainment, ML holds great promise for many industries.
                Driven by the wide availability of cloud-based computing power,
                storage capacity, and easy-to-use AI toolsets, the normalization
                of AI and ML continues at a rapid pace.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                However, before enterprises can scale from dozens to thousands
                of ML models and make machine learning an integral part of their
                strategy, they need to address the AI skills gap and integrate
                ML practices into individual lines of business.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/corporate_training_Blue_data_consulting-1024x634.png"
                alt=""
                className="object-cover scale-90 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 mr-16 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/bluedata_consulting_analytics_data_ai_solution-1024x691.jpg"
                alt=""
                className="object-cover scale-90 rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-xl">
              <p className="mt-4 text-gray-600 text-[18px]">
                A successful adaption of technology within the right timeline
                requires the right approach & strategy which comes from
                experience and expertise that some of the project teams may lag
                based on the type of technology they are utilizing.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                This is where we come in by partnering with our clients we act
                as an extension to the internal team and help to develop the
                strategy & adopt the right approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tech;
