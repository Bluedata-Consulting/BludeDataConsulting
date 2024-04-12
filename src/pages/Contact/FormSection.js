import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      first: "",
      last: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://formspree.io/f/myyrbbdo"; // Your Formspree endpoint

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Network response was not ok: ${error.message}`);
      }

      console.log("Form submitted successfully:", response.data);
      toast.success("Form submitted successfully!");
      handleClear();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Failed to submit form. Please check the form data and try again."
      );
      handleClear();
    }
  };

  return (
    <div className="flex justify-center items-center bg-white mb-12">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl text-blue-shade-2">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                type="text"
                name="first"
                value={formData.first}
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="First Name"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="last"
                value={formData.last}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-shade-2 hover:bg-blue-shade-3  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:-mt-96 lg:w-1/3 px-8 py-12 ml-auto bg-blue-shade-2/95 rounded-2xl">
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-4xl my-4">
              Drop in our office
            </h1>
            <p className="text-gray-300">
              We would love to hear from you. Feel free to ask to have a call.
            </p>
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">Main Office</h2>
                <p className="text-gray-300">
                  T10, Atlanta Business Hub, VIP Road, Surat, Gujarat 395007
                </p>
              </div>
            </div>
            <div className="flex my-4 ">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Contact Us</h2>
                <p className="text-gray-300">Tel: +91-9104445059</p>
                <p className="text-gray-300">
                  Email: info@bluedataconsulting.in
                </p>
              </div>
            </div>
            <div className="flex my-4 w-2/3 lg:w-1/2">
              <Link
                className="mx-2 transition-colors duration-300 transform hover:text-blue-400"
                to="https://www.facebook.com/bluedatac"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-6 h-6  fill-current"
                />
              </Link>

              <Link
                className="mx-2 transition-colors duration-300 transform hover:text-red-500/90"
                to="https://www.youtube.com/@bluedatac"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-8 h-7 fill-current"
                />
              </Link>

              <Link
                className="mx-2 transition-colors duration-300 transform hover:text-pink-500"
                to="https://www.instagram.com/bluedatac/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-8 h-7 fill-current"
                />
              </Link>

              <Link
                className="mx-2 transition-colors duration-300 transform hover:text-blue-300"
                to="https://www.linkedin.com/company/bluedatac/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-7 h-7 fill-current"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
