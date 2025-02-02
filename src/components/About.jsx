import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-custom-gradient text-white px-6 py-10 font-playfair">
      {/* Hero Section with Image */}
      <div className="relative">
        <img
          src="./images/about-bg.JPG"
          alt="Live Performance"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            Discover the journey of my music and passion for live performances.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Am</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
            Hi, I’m{" "}
            <span className="font-bold text-white">Pratish Prajwal</span>, a
            singer, songwriter, and performer. My music is an expression of
            life, love, and the stories that connect us all. With my latest song{" "}
            <span className="font-bold text-blue-400">Tuteka Chhan Bacha</span>,
            I’ve embarked on an incredible journey, blending soulful melodies
            with electrifying beats to create something truly special.
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="relative group">
            <img
              src="./images/studio-session.JPG"
              alt="Studio Session"
              className="w-full h-[250px] object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold">Studio Sessions</p>
            </div>
          </div>

          <div className="relative group">
            <img
              src="./images/new-album-cover.JPG"
              alt="Album Cover"
              className="w-full h-[250px] object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold">New Album Art</p>
            </div>
          </div>

          <div className="relative group">
            <img
              src="./images/live-music.JPG"
              alt="Live Performance Close-Up"
              className="w-full h-[250px] object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <p className="text-white text-lg font-bold">Live Performances</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <a
            href="/contact"
            className="px-8 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-all"
          >
            Contact Me
          </a>
          <a
            href="/gallery"
            className="px-8 py-4 bg-gray-800 text-white font-bold text-lg rounded-lg hover:bg-gray-700 transition-all"
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
