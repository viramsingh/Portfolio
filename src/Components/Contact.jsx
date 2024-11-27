import React, { useRef, useState } from "react";
import { useDarkMode, ThemeIcon } from "../DarkModeContext";
import { Button, Input, Textarea } from "@material-tailwind/react";
// import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import contactimg from "../assets/contactus.gif";

const Contact = () => {
  const form = useRef();
  const [message, showMessage] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmfl4tl",
        "template_iuiqjym",
        form.current,
        "OXZnr8t5wvH9KlEaY"
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          showMessage(true);
          toast.success("Your Message Has Been Submitted!");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      className={`w-full pb-16 min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Header */}
      <h1 className="text-3xl font-bold text-center border-b-2 border-red-600 my-10">
        Contact
      </h1>

      {/* Main Form Container */}
      <div className="flex flex-col md:flex-row lg:w-[70%] items-center justify-around gap-10">
        {/* Form */}
        <div className="w-full max-w-lg p-5">
          <div
            className={`relative rounded-lg bg-opacity-60 backdrop-blur-sm p-8 sm:p-8 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <Input
                  type="text"
                  name="from_name"
                  label="Enter Your Name"
                  required
                  className="dark:text-white"
                />
              </div>
              <div className="mb-6">
                <Input
                  type="email"
                  name="from_email"
                  label="Enter Your Email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address"
                />
              </div>
              <div className="mb-6">
                <Input
                  type="tel"
                  name="mobile"
                  label="Enter Your Phone Number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  inputMode="numeric"
                />
              </div>
              <div className="mb-6">
                <Textarea
                  rows="6"
                  name="message"
                  label="Enter Message"
                  required
                />
              </div>
              <div>
                <Button
                  // onClick={submitHandle}
                  variant="gradient"
                  color="red"
                  fullWidth
                  type="submit"
                >
                  Send Message
                </Button>
                <ToastContainer />
              </div>
              {/* {message && (
                <p className="text-green-500 text-center mt-2">
                  Message Sent Successfully!
                </p> */}
              {/* )} */}
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]"
            src={contactimg}
            alt="Contact Us"
          />
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        className=" absolute top-5 right-5 rounded-full bg-gray-200 dark:bg-gray-700"
        onClick={toggleDarkMode}
      >
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Contact;
