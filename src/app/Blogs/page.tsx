import React from "react";
import Image from "next/image";
import Link from "next/link";
// assets
import blogImage from "../../../public/blogimg.png";
import blogImage1 from "../../../public/blogimg1.png";
import blogImage2 from "../../../public/blogimg2.png";
import blogImage3 from "../../../public/blogimg3.png";
import blogImage4 from "../../../public/blogimg4.png";
import blogImage5 from "../../../public/blogimg5.png";

export default function Blogs() {
  return (
    <div className="blogmain pb-10 sm:pb-20 lg:pb-40">
      <div className="contizer2">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 leading-[1.1] text-[#1a191e] dark:text-white  text-center">
          Blog
        </h1>
        <div className="categories flex flex-wrap gap-4 lg:gap-8">
          <h6 className="text-[16px] sm:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white">
            Categories
          </h6>
          <ul className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
            <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-0.5 lg:py-1 px-2 lg:px-2.5 text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
              All
            </li>
            <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-0.5 lg:py-1 px-2 lg:px-2.5 text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
              Products
            </li>
            <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-0.5 lg:py-1 px-2 lg:px-2.5 text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
              Technology
            </li>
            <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-0.5 lg:py-1 px-2 lg:px-2.5 text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
              App
            </li>
          </ul>
        </div>
        <div className="blogcontent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 lg:mt-14 xl:mt-16">
          <div className="blocard">
            <Link href={`Blogs/${"Blog"}`}>
              <Image
                src={blogImage}
                alt="blogimg image"
                layout="intrinsic"
                className="rounded-xl overflow-hidden mx-auto"
              />
            </Link>
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                How To Start Using Banko For Your Startup
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  Technology
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard">
            <Image
              src={blogImage1}
              alt="blogimg1 image"
              layout="intrinsic"
              className="mx-auto"
            />
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                10 Things Nobody Told You About Banko
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  Technology
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard">
            <Image
              src={blogImage2}
              alt="blogimg2 image"
              layout="intrinsic"
              className="mx-auto"
            />
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                How To Start Using Banko For Your Startup
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard">
            <Image
              src={blogImage3}
              alt="blogimg3 image"
              layout="intrinsic"
              className="mx-auto"
            />
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                Why We Love Banko (And You Should, Too!)
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  technology
                </li>
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard">
            <Image
              src={blogImage4}
              alt="blogimg4 image"
              layout="intrinsic"
              className="mx-auto"
            />
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                5 Principles Of Crypto Investing
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  App
                </li>
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  Product
                </li>
              </ul>
            </div>
          </div>
          <div className="blocard">
            <Image
              src={blogImage5}
              alt="blogimg5 image"
              layout="intrinsic"
              className="mx-auto"
            />
            <div className="mt-3 lg:mt-6">
              <h4 className="h4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2">
                7 Things About Banko Your Friends Want To Know
              </h4>
              <p className=" text-[16px] leading-[1.6] text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </p>
              <ul className="flex gap-2 mt-6">
                <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                  technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
