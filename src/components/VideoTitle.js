import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3 text-justify">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-bold p-4 px-12 text-xl rounded-lg mx-1 hover:bg-opacity-70">
          Play
        </button>
        <button className="bg-gray-500 text-white font-bold p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-1 hover:bg-opacity-25">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
