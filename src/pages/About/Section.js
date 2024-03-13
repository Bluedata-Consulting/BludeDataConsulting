import React from "react";

const Section = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                About the company
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                We are a technology consulting company operating in South East
                Asia, the Indian subcontinent, and the Middle East region. We
                are passionate about taking on immense challenges that matter to
                our clients and helping them in optimizing business processes,
                reducing costs, and improving profits.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                We work very closely with our clients and help them in building
                their capabilities and leadership skills at every level and
                every opportunity. For ongoing projects of our clients, we
                collaborate with project teams, help them in validating their
                approach, methodology, the technology chosen, accelerate the
                project by contributing to solving problems, errors, and bugs.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt=""
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                We aim to go global by collaborating with organizations across
                the geographies by helping via right technology adaption,
                suitable approach for digital transformation and effective use
                of latest technologies to grow faster and function more
                effectively.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                Our vision is to add more names to the list of organizations who
                can count on us for our advice/help related to organizational
                growth and technology adaption.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                We aim to retain our identity of a face of cutting edge
                technology consulting company having consultants who solve every
                problem with their innovative and creative approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Why us?
              </h2>
              <p className="mt-4 text-gray-600 text-[18px]">
                We are a pool of 500+ consultants having expertise in Digital
                Transformation, Mobilization, Automation, Artificial
                Intelligence, Machine Learning, Analytics, Internet of Things
                and Blockchain.
              </p>
              <p className="mt-4 text-gray-600 text-[18px]">
                With indepth knowledge to their profession, detailed real time
                experience to solving problems, out consultants help in
                translating client’s strategic direction to business process,
                organization and IT while smoothly transitioning between field,
                strategy, business goal, compliances and operations, maintaining
                the measurable results.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt=""
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
