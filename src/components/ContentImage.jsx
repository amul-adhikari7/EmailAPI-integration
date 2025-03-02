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
    <div className="w-full min-h-screen flex flex-col bg-custom-gradient items-center justify-center py-16 px-4 sm:px-8 relative overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase">
            Singer | Musician | Composer
          </h1>
          <h2 className="text-white font-aboreto text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            PRATISH PRAJWAL
          </h2>
          <p className="text-white text-base sm:text-lg max-w-lg leading-relaxed opacity-90">
            Elevating every moment with soulful melodies and high-energy beats.
            Let the rhythm speak to your soul.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <button
              className="px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all text-sm sm:text-base"
              onClick={navigateToContact}
            >
              HIRE ME
            </button>
            <button
              className="px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all text-sm sm:text-base"
              onClick={toggleModal}
            >
              SERVICES
            </button>
          </div>
          <div className="flex gap-3 sm:gap-4 items-center flex-wrap justify-center lg:justify-start mt-6">
            {[
              {
                img: "facebook.png",
                link: "https://www.facebook.com/pratishprajwalofficial",
              },
              {
                img: "instagram.png",
                link: "https://www.instagram.com/pratishprajwal/",
              },
              {
                img: "spotify.png",
                link: "https://open.spotify.com/artist/0JCQnuX13MTRx7eNIzRPmK?si=g0XnqkwtSPKcFZiD7zedcA",
              },
              {
                img: "tik-tok.png",
                link: "https://www.tiktok.com/@pratishprajwal?is_from_webapp=1&sender_device=pc",
              },
              {
                img: "youtube.png",
                link: "https://www.youtube.com/@PratishPrajwal",
              },
              {
                img: "itunes.png",
                link: "https://music.apple.com/us/artist/pratish-prajwal/1682089420",
              },
            ].map((social, index) => (
              <SocialLinks
                key={index}
                image={`./images/${social.img}`}
                link={social.link}
              />
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="relative w-[250px] sm:w-[300px] lg:w-[350px] flex justify-center">
          <img
            src="./images/bg-prati.png"
            alt="Pratish Prajwal"
            className="rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-8 border-white"
          />
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="w-full mt-20 text-center px-4">
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Fun Facts About Pratish
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 w-11/12 max-w-5xl mx-auto">
          {[
            {
              image: "microphone.png",
              title: "Started Singing at Young Age",
              description:
                "Pratish discovered his passion for music as a child and never looked back.",
            },
            {
              image: "recording.png",
              title: "Soulful Songs Production",
              description:
                "From soulful ballads to upbeat tracks, his music has touched countless hearts.",
            },
            {
              image: "globe.png",
              title: "Performed on International Platforms",
              description:
                "Taking his talent worldwide, Pratish has performed for diverse audiences.",
            },
            {
              image: "teacher.png",
              title: "Music Mentor",
              description:
                "Helping aspiring musicians hone their craft through personalized mentoring.",
            },
          ].map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-20 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-opacity-30 transition-all"
            >
              <img
                src={`./images/${fact.image}`}
                alt=""
                className="w-16 sm:w-20 h-16 sm:h-20 mb-4"
              />
              <h4 className="text-white font-semibold text-lg sm:text-xl">
                {fact.title}
              </h4>
              <p className="text-gray-200 text-sm sm:text-md mt-3">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl relative transform transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
              My Services
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-3 text-base sm:text-lg">
              <li>Live Performances</li>
              <li>Studio Recordings</li>
              <li>Music Composition</li>
              <li>Event Hosting</li>
              <li>Music Production</li>
            </ul>
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 px-3 py-2 bg-black text-white rounded-full hover:bg-gray-700 transition-all text-lg sm:text-xl"
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
