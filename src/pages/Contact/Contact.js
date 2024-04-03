import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FormSection from "./FormSection";

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/*Hero Section */}
      <div className="flex flex-col space-y-4 pb-10 pt-36 mb-8 md:pt-48">
        <p className="text-center text-3xl font-bold text-blue-shade-2 md:text-[48px] md:leading-10">
          Love to hear from you
        </p>
        <p className="mx-auto max-w-3xl text-center text-base text-gray-600 md:text-xl">
          Your questions spark innovation. Let's begin our journey today.
        </p>
      </div>

      <FormSection />

      {/* Map Section */}
      <section className="bg-white">
        <div className=" px-6 pb-28 mx-auto">
          <div className="flex justify-center gap-12 mt-10">
            <div className="overflow-hidden rounded-lg lg:col-span-2 w-full lg:w-2/3 h-[500px] ">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.813603759028!2d72.7893611!3d21.1443022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0533566cf49dd%3A0xdcb844e8eb1d921f!2sBlue%20Data%20Consulting!5e0!3m2!1sen!2sin!4v1704365547215!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
