import React, { useState } from "react";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    "https://www.youtube.com/embed/OJilNlqaYqY",
    "https://www.youtube.com/embed/Z0ykfoNPM5I",
    "https://www.youtube.com/embed/VyNhc0GjT1E",
    "https://www.youtube.com/embed/i4M_rASz7cM",
    "https://www.youtube.com/embed/Ls3Zj6sudXM",
    "https://www.youtube.com/embed/v-yteMjx0GE",
    "https://www.youtube.com/embed/Ej81egg0Ah8",
    "https://www.youtube.com/embed/oxO-7ioWe-M",
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="py-12 bg-custom-gradient min-h-screen">
      {/* Gallery Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Video Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300"
            onClick={() => openModal(video)}
          >
            {/* Video Thumbnail */}
            <iframe
              src={video}
              title={`YouTube Video ${index + 1}`}
              className="w-full h-48 md:h-56 rounded-t-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 flex items-center justify-center transition duration-300">
              <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                🎥 Watch Now
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="relative w-[90%] max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden animate-scale-up">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Video */}
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              title="Selected Video"
              className="w-full h-[70vh] rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
