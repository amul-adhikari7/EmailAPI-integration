import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const ContentImage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="w-full h-auto flex bg-custom-gradient items-center justify-center py-16">
      <div className="w-full lg:w-[1330px] mx-6 lg:mx-[75px] flex flex-col lg:flex-row justify-between items-center">
        {/* Content Section (Right side) */}
        <div className="flex flex-col items-center lg:items-start lg:ml-[50px] mt-6 lg:mt-12 z-10">
          <h1 className="font-inter text-white font-extrabold text-[24px] lg:text-[32px] text-center lg:text-left">
            Singer / Musician / Composer
          </h1>
          <h2 className="font-aboreto text-white text-[28px] lg:text-[42px] tracking-wider text-center lg:text-left mt-2">
            PRATISH PRAJWAL
          </h2>
          <p className="font-playfair text-white tracking-wide text-center lg:text-left mt-4 max-w-md">
            Elevating every moment with soulful melodies and high-energy beats.
            Let the rhythm speak!
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="px-4 py-2 lg:w-[112px] bg-white text-black rounded-lg hover:bg-gray-300 transition-all"
              onClick={navigateToContact}
              aria-label="Hire Pratish Prajwal"
            >
              HIRE ME
            </button>
            <button
              className="px-4 py-2 lg:w-[132px] bg-white text-black rounded-lg hover:bg-gray-300 transition-all"
              onClick={toggleModal}
              aria-label="View Services"
            >
              SERVICES
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 items-center mt-6 flex-wrap justify-center lg:justify-start">
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
              link="https://open.spotify.com/artist/0JCQnuX13MTRx7eNIzRPmK?si=g0XnqkwtSPKcFZiD7zedcA"
            />
            <SocialLinks
              image="./images/tik-tok.png"
              link="https://www.tiktok.com/@pratishprajwal?is_from_webapp=1&sender_device=pc"
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

        {/* Image Section (Above content) */}
        <div className="flex justify-center w-full lg:w-[350px] mt-10 lg:mt-0">
          <img
            src="./images/bg-prati.png"
            alt="Pratish Prajwal"
            className="rounded-full w-[150px] lg:w-[200px] shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* New Section: Fun Facts */}
      <div className="w-full mt-16 flex flex-col items-center text-center">
        <h3 className="text-white font-inter text-xl lg:text-2xl font-bold">
          Fun Facts About Pratish
        </h3>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 w-10/12 max-w-5xl">
          {[
            {
              image: "./images/microphone.png",
              title: "Started Singing at Very Young Age",
              description:
                "Pratish discovered his passion for music as a child and never looked back.",
            },
            {
              image: "./images/recording.png",
              title: "Soulful Songs Production",
              description:
                "From soulful ballads to upbeat tracks, his music has touched countless hearts.",
            },
            {
              image: "./images/globe.png",
              title: "Performed on International Platforms",
              description:
                "Taking his talent worldwide, Pratish has performed for diverse audiences.",
            },
            {
              image: "./images/teacher.png",
              title: "Music Mentor",
              description:
                "Helping aspiring musicians hone their craft through personalized mentoring.",
            },
          ].map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 shadow-lg hover:bg-opacity-20 transition-all"
            >
              <img src={fact.image} alt="" className="w-16 h-16 mb-4" />
              <h4 className="text-white font-bold text-lg">{fact.title}</h4>
              <p className="text-gray-200 text-sm mt-2">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative transform transition-all duration-300">
            <h2 className="text-2xl font-bold text-black mb-4">My Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Live Performances</li>
              <li>Studio Recordings</li>
              <li>Music Composition</li>
              <li>Event Hosting</li>
              <li>Music Production</li>
            </ul>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 px-2 py-1 bg-black text-white rounded-full hover:bg-gray-700 transition-all"
              aria-label="Close Modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentImage;
