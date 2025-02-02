import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialLinks from "./SocialLinks"; // Assuming this component is already created

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ksk9nmf", // Replace with your EmailJS service ID
        "template_92j95f8", // Replace with your EmailJS template ID
        formData,
        "LxUq1SBWsLcVApen5" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setErrorMessage("Something went wrong. Please try again later.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="min-h-screen bg-custom-gradient text-white px-6 py-10 font-playfair">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Let’s connect! Whether for collaborations, performances, or inquiries,
          I'm here to help.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2">
          <img
            src="./images/contact.JPG"
            alt="Contact Me"
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Side (Form and Social Links) */}
        <div className="w-full md:w-1/2 bg-gray-900 bg-opacity-50 p-8 rounded-xl shadow-lg">
          {successMessage && (
            <p className="text-green-500 text-center font-bold mb-4">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center font-bold mb-4">
              {errorMessage}
            </p>
          )}

          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-bold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-bold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-bold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Write your message here"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-8">
            <SocialLinks
              image="./images/facebook.png"
              link="https://www.facebook.com/pratishprajwalofficial"
            />
            <SocialLinks
              image="./images/instagram.png"
              link="https://www.instagram.com/pratishprajwal/"
            />
            <SocialLinks
              image="./images/spotify.png"
              link="https://open.spotify.com/artist/0JCQnuX13MTRx7eNIzRPmK"
            />
            <SocialLinks
              image="./images/tik-tok.png"
              link="https://www.tiktok.com/@pratishprajwal"
            />
            <SocialLinks
              image="./images/youtube.png"
              link="https://www.youtube.com/@PratishPrajwal"
            />
            <SocialLinks
              image="./images/itunes.png"
              link="https://music.apple.com/us/artist/pratish-prajwal/1682089420"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
