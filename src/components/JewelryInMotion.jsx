import React, { useRef, useState, useEffect } from "react";
import CuratedVideo from "@/api/video";
import MainTitle from "./MainTitle";

const JewelryInMotion = () => {
  return (
    <section className="container mx-auto bg-white">
        <MainTitle
            title="Jewelry in Motion"
            subTitle="Curated specially for you"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full px-4">
            {CuratedVideo.map((item, idx) => (
            <VideoCard
                key={idx}
                title={item.title}
                videoUrl={item.videoUrl}
                poster={item.imageUrl}
                price={item.price}
                crossPrice={item.crossPrice}
            />
            ))}
        </div>
    </section>
  );
};

const VideoCard = ({ title, videoUrl, poster, price, crossPrice }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onPlay = () => setIsPaused(false);
      const onPause = () => setIsPaused(true);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);
      return () => {
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
      };
    }
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <div
        className="relative aspect-[3/4] cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          poster={poster}
          muted={muted}
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Mute Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-2 right-2 w-[35px] h-[35px] bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-[10px] flex items-center justify-center z-10"
        >
          {muted ? (
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M11 5L6 9H2V15H6L11 19V5Z" />
              <path d="M23 9L17 15" />
              <path d="M17 9L23 15" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M11 5L6 9H2V15H6L11 19V5Z" />
              <path d="M19.07 4.93C20.95 6.81 22 9.35 22 12C22 14.65 20.95 17.19 19.07 19.07" />
              <path d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.32 16.48 14.59 15.54 15.53" />
            </svg>
          )}
        </button>

        {/* Play Icon Overlay */}
        {isPaused && (
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[60px] h-[60px] rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-black"
                viewBox="0 0 10 14"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.48 0.81C0.82 0.45 0 0.93 0 1.69V12.21C0 12.99 0.86 13.47 1.53 13.06L10.54 7.5C11.19 7.1 11.17 6.14 10.5 5.77L1.48 0.81Z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

        <div className="p-4">
            <div className="flex justify-start items-center gap-4">
                <div className="flex justify-center items-center w-20 h-20 rounded-md overflow-hidden group">
                <img
                    src={poster}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-200 transition-transform duration-600 ease-in-out"
                />
                </div>
                <div className="flex flex-col justify-center items-start">
                <h3 className="text-md font-semibold text-gray-800 text-left line-clamp-1">
                    {title}
                </h3>
                <div className="text-sm text-gray-600 mt-1">
                    <span className="text-black font-bold text-md">₹{price}</span>
                    <span className="ml-2 line-through text-gray-400">₹{crossPrice}</span>
                </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default JewelryInMotion;
