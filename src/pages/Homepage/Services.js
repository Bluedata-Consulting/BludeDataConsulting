import React from "react";

const Card = ({ imgSrc, category, title, link, description }) => {
  return (
    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col ">
      <div className="border border-gray-400 h-full shadow-gray-300 shadow-md">
        <img
          src={imgSrc}
          alt="Card img"
          className="object-cover object-center w-full h-48 "
        />
        <div className="flex flex-grow">
          <div className="flex flex-col justify-between px-4 py-2 bg-white ">
            <div>
              <a
                href="/"
                className="block mb-4 mt-2 text-2xl font-bold text-blue-800 leading-tight hover:underline hover:text-blue-600"
              >
                {title}
              </a>
              <p className="mb-4">{description}</p>
            </div>
            <div>
              <a
                href={link}
                className="inline-block pb-1 text-[18px] font-medium text-blue-600 uppercase border-b border-transparent hover:text-[19px]"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <section className="flex flex-col justify-center max-w-6xl px-4 pt-32 pb-8 mx-auto sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-shade-3 lg:text-4xl">
            Services We Offer
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl text-gray-500 sm:mt-2">
            Our commitment is to provide comprehensive quality services
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <Card
            imgSrc="https://source.unsplash.com/Lki74Jj7H-U/400x300"
            title="Technology Consulting"
            description="We help organizations to accelerate projects and plan their upcoming projects from AI, automation and IoT domain. we get involved in mentoring, monitoring and architecting technology projects."
            link="/"
          />
          <Card
            imgSrc="https://source.unsplash.com/L9_6GOv40_E/400x300"
            title="Analytics & AI Solution"
            description="We at Blue Data Consulting help organizations by building AI, Data engines, integrating silos with in the organizations, analyzing their business processes & developing productive solutions."
            link="/"
          />
          <Card
            imgSrc="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
            title="Scaling Teams"
            description="We help organizations to scale up their existing teams by providing required coaching and training on the relevant tools, technology, approach and project development methodology."
            link="/"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
