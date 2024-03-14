import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Scaling = () => {
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
          Scaling Teams
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
                We help our clients in upskilling their existing workforce to
                fill gaps in their skillsets by providing corporate training in
                technologies such as Artificial Intelligence, Machine Learning,
                Deep Learning, Robotics Process Automation, Internet of Things,
                Dev ops, etc.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                With the help of internationally certified and experienced
                instructors, we provide successful learning and development
                solutions to IT & non-IT clients.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/corporate_training_Blue_data_consulting-project_based_training-768x432.jpg"
                alt=""
                className="object-cover scale-90 rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mr-0 lg:mr-16 md:mt-0 scale-90">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/bluedata_consulting_coporate_training_why_us_technology_upskillling_porgrams_best_vendor.jpg"
                alt=""
                className="object-cover h-[90%] scale-75 rounded-lg "
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Why companies choose us for their upskilling needs?
              </h2>
              <ul>
                <li className="mt-4 text-gray-600 text-[18px]">
                  <span className="font-semibold">E2E managed Service:</span> We
                  do not limit ourselves to providing skilled and experienced
                  consultant/Instructor, rather we contribute by providing
                  managed learning solution which includes talent assessment,
                  blended learning, self-paced pre-learning, LMS-based learning
                  management, cloud labs for hands-on, case studies, datasets,
                  etc.
                </li>
                <li className="mt-4 text-gray-600 text-[18px]">
                  <span className="font-semibold">Quality:</span> Highly rated
                  courseware and manuals, certified instructors with real-time
                  industry experience
                </li>
                <li className="mt-4 text-gray-600 text-[18px]">
                  <span className="font-semibold">Flexibility:</span> With the
                  help of experienced SMEs and learning consultants, we provide
                  tailored learning programs to fit the need of the client
                </li>
                <li className="mt-4 text-gray-600 text-[18px]">
                  <span className="font-semibold">Multiple modalities:</span>{" "}
                  including classroom-based learning, instructor-led online
                  learning, self-paced learning, onsite corporate training, and
                  e-learning.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Talent assessment
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                Along with providing corporate training services we also provide
                services to get the analytical assessment of candidates by
                evaluating them on different technologies and at various levels
                of experience.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                We have served over 30 clients from the Asia Pacific and the
                Middle East region for talent assessment and analytics while
                delivering multiple corporate training programs.
              </p>
            </div>
            <div className="mt-12 md:mt-0 flex justify-center">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/10/analytics-2697949_1920-1-370x285-1.jpg"
                alt=""
                className="object-cover scale-110  rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mr-0 lg:mr-16 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/corporate_training_Blue_data_consulting_malaysia.jpg"
                alt=""
                className="object-cover scale-90 rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Certification from technology providers
              </h2>
              <ul>
                <li className="mt-4 text-gray-600 text-[18px]">
                  We help our clients in scaling up the skillsets of the
                  existing workforce with capabilities related to new and
                  disrupting technologies to get them certified by technology
                  providers.
                </li>
                <li className="mt-4 text-gray-600 text-[18px]">
                  So far, we have served 50+ clients to get their workforce
                  certified on different tools from Microsoft azure, IBM cloud,
                  AWS, UiPath, Automation Anywhere, etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Project based customized training
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                We help our clients in scaling up their teams with technical and
                non-technical skill sets needed for a specific project. As a
                result, the team delivers the project within the timeline
                successfully.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                Technology vendors such as Microsoft, AWS, IBM, and Google cloud
                bring new versions of their products and tools into the markets
                while following their path of continuous innovation. We help in
                providing corporate training programs to help our customers use
                these products and tools efficiently in the project
                implementation.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://www.bluedataconsulting.in/wp-content/uploads/2021/11/corporate_training_Blue_data_consulting_UAE_Saudi_Arabia_Singapore.jpg"
                alt=""
                className="object-cover scale-90 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Scaling;
