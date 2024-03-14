import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// import { ToastContainer, toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
// import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!captchaValue) {
    //   // Display an error or prevent form submission
    //   console.error("reCAPTCHA verification failed");
    //   return;
    // }
    // // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
    // const endpoint = "https://formspree.io/f/xwkgvppn";

    // fetch(endpoint, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Form submitted successfully:", data);
    //     toast.success("Form submitted successfully!");
    //     handleClear();
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting form:", error);
    //     toast.error(
    //       "Failed to submit form. Please try again or try contact on given mail."
    //     );
    //     handleClear();
    //   });
  };

  return (
    <section className="min-h-screen bg-cover mb-0">
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <div className="flex flex-col min-h-screen bg-white">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-blue-shade-2 lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-bold capitalize lg:text-4xl">
                Send Us a Message
              </h1>

              <p className="max-w-xl mt-6 text-lg">
                Got a question or need assistance? Drop us a message, and we'll
                get back to you as soon as possible.
              </p>

              <div className="mt-6 md:mt-8">
                <h3 className="text-blue-shade-2 text-xl font-bold  ">
                  Follow us
                </h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <Link
                    className="mx-2 text-blue-shade-3 transition-colors duration-300 transform"
                    to="https://www.facebook.com/bluedatac"
                    target="_blank"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="w-9 h-10  fill-current"
                    />
                  </Link>

                  <Link
                    className="mx-2 text-red-700 transition-colors duration-300 transform hover:text-red-500/90"
                    to="https://www.youtube.com/@bluedatac"
                    target="_blank"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="w-12 h-12 fill-current"
                    />
                  </Link>

                  <Link
                    className="mx-2 text-pink-700 transition-colors duration-300 transform hover:text-pink-500"
                    to="https://www.instagram.com/bluedatac/"
                    target="_blank"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-12 h-12 fill-current"
                    />
                  </Link>

                  <Link
                    className="mx-2 text-blue-600 transition-colors duration-300 transform hover:text-blue-400"
                    to="https://www.linkedin.com/company/bluedatac/"
                    target="_blank"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-12 h-12 fill-current"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-md shadow-blue-shade-4/40 rounded-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-blue-shade-2">
                  Contact Form
                </h1>

                <p className="mt-2 text-md text-gray-500 ">
                  Ask us everything and we would love to hear from you
                </p>

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="flex-1">
                    <label className="block mb-2 text-md font-medium text-blue-shade-2 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  "
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-md font-medium text-blue-shade-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 "
                    />
                  </div>

                  <div className="w-full my-6">
                    <label className="block mb-2 text-md font-medium text-blue-shade-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 "
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="flex align-center justify-center">
                    {/* <ReCAPTCHA
                      sitekey="6LdzA2MpAAAAAGZXjeK9ZYc34y2_38fflXR7ti4T" // Replace with your actual reCAPTCHA Site Key
                      onChange={handleCaptchaChange}
                    /> */}
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={!captchaValue}
                      className="w-[20%] px-4 py-2 mt-6 text-[18px] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-shade-4 rounded-md hover:bg-blue-shade-5 hover:text-blue-shade-2 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
