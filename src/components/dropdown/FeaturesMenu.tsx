import React from "react";
import comcard1 from "../../../public/comcard1.png";
import comcard2 from "../../../public/comcard2.png";
import comcard3 from "../../../public/comcard3.png";
import Image from "next/image";
export default function FeaturesMenu() {
  return (
    <div className=" bg-[#f8f8f8] dark:bg-white/30 py-6 lg:py-8">
      <div className="idealcard max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 lg:gap-6 xl:gap-8">
        <div className="membercard text-center">
          <h6 className="ctgry flex items-center justify-center gap-1 sm:gap-2 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight">
            Basic
            <span className="text-[10px] lg:text-[12px] leading-[1.4] lg:leading-[1.8] px-2 rounded-[2px] lg:rounded-[4px] text-[#5bb5a2] dark:text-[#5b94b5] bg-[#e8f2ee]">
              Popular
            </span>
          </h6>
          <p className="text-[14px] text-[#1a191e80] dark:text-white/70 leading-[1.6] mb-2 lg:mb-4 mt-1">
            Lorem ipsum dolor
          </p>

          <div className="w-fit mx-auto">
            <Image
              src={comcard1}
              alt="choosecard image"
              width={0}
              height={0}
              className="mb-4 lg:mb-6"
            />
            <button className="priceBtn w-full bg-[#5bb5a2] text-white rounded-[3px] lg:rounded-[6px] py-1.5 lg:py-3 px-4 text-center">
              Get started
            </button>
          </div>
        </div>

        <div className="membercard text-center">
          <h6 className="ctgry flex items-center justify-center gap-1 sm:gap-2 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight">
            Premium
          </h6>
          <p className="text-[14px] text-[#1a191e80] dark:text-white/70 leading-[1.6] mb-2 lg:mb-4 mt-1">
            Lorem ipsum dolor
          </p>

          <div className="w-fit mx-auto">
            <Image
              src={comcard2}
              alt="choosecard1 image"
              width={0}
              height={0}
              className="mb-4 lg:mb-6"
            />
            <button className="priceBtn priceBtn w-full bg-[#5bb5a2] text-white rounded-[3px] lg:rounded-[6px] py-1.5 lg:py-3 px-4 text-center">
              Get started
            </button>
          </div>
        </div>

        <div className="membercard text-center">
          <h6 className="ctgry flex items-center justify-center gap-1 sm:gap-2 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight">
            Gold
          </h6>
          <p className="text-[14px] text-[#1a191e80] dark:text-white/70 leading-[1.6] mb-2 lg:mb-4 mt-1">
            Lorem ipsum dolor
          </p>

          <div className="w-fit mx-auto">
            <Image
              src={comcard3}
              alt="choosecard1 image"
              width={0}
              height={0}
              className="mb-4 lg:mb-6"
            />
            <button className="priceBtn priceBtn w-full bg-[#5bb5a2] text-white rounded-[3px] lg:rounded-[6px] py-1.5 lg:py-3 px-4 text-center">
              Get started
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
