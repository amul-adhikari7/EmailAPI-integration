import React from "react";

const SocialLinks = ({ name, link, image }) => {
  return (
    <div className="flex items-center justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 group text-center transition-transform duration-300 hover:scale-110"
      >
        <img
          src={image}
          alt={`${name} logo`}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20"
        />
        <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-black transition-all duration-300">
          {name}
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
