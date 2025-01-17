import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-5 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/3 text-justify">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black font-bold px-3 py-1 md:py-4 md:px-12  text-xl rounded-lg mx-1 hover:bg-opacity-70">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white font-bold py-4 px-12 text-xl bg-opacity-50 rounded-lg mx-1 hover:bg-opacity-25">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
