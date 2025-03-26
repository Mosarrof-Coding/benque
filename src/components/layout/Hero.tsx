"use client";
import React from "react";
import Image from "next/image";
import frontcard from "../../../public/frontcard.png";

export default function Hero() {
  return (
    <div className="contizer2">
      <div className="hero_main">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-[100px] text-[#1a191e] dark:text-[#e4e4e4] leading-[1.1] tracking-tight bg-indigo-300">
          Banking <br className="hidden lg:block" /> starts here.
        </h1>
        <h4 className="text-lg sm:text-xl lg:text-2xl text-[#1a191e] dark:text-[#e4e4e4] leading-[1.3] lg:leading-[1.7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </h4>
        <div>
          <div className="w-fit bg-fuchsia-200">
            <Image src={frontcard} alt="moss" layout="intrinsic" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
