import React, { useEffect, useState } from "react";
import Ring from "@/assets/image/ring.png";
import Sprite from "@/assets/image/Diamond_Sprite.png";

export default function DesignRingSection() {
  return (
    <section className="relative w-full bg-white mt-20">
      <h2 className="w-full text-center text-[8rem] md:text-[12rem] font-bold text-[#f5f0eb] select-none hidden md:block">
        design your own
      </h2>
      <div className="absolute w-full bg-[#FAF7F4] left-0 top-45 z-10 flex flex-col md:flex-row items-center justify-between h-60"/>
      <div className="container absolute left-1/2 -translate-x-1/2  top-30 z-10 flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-[40%] p-6 md:p-12 rounded-md relative top-16">
          <div className="text-2xl md:text-4xl font-semibold text-gray-900">
            DESIGN YOUR OWN <br />
            <span className="font-title tracking-wide text-3xl md:text-5xl">
              ENGAGEMENT RING
            </span>
          </div>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Design your engagement ring your way. Start with a ring setting
            and then add the perfect center stone – or vice versa. It’s really
            up to you!
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="border border-black text-black px-6 py-2 font-medium hover:bg-black hover:text-white transition">
              START WITH A SETTING
            </button>
            <span className="text-sm text-gray-500">OR</span>
            <button className="border border-black text-black px-6 py-2 font-medium hover:bg-black hover:text-white transition">
              START WITH A DIAMOND
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Spark your imagination with these{" "}
            <a href="#" className="text-red-500 underline">
              recently purchased engagement rings
            </a>
            .
          </p>
        </div>
        <div className="w-full md:w-[60%] mt-10 md:mt-0 flex justify-center">
          <img
            src={Ring}
            alt="Engagement Ring"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}