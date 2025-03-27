import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import detailcard from "../../../../public/detailcard.png";
import facebook from "../../../../public/facebook.png";
import linkdIn from "../../../../public/linkedin.png";
import twitter from "../../../../public/twitter.png";
import instagram from "../../../../public/insta.png";
// blog
import blogImage from "../../../../public/blogimg.png";
import blogImage1 from "../../../../public/blogimg1.png";
import blogImage5 from "../../../../public/blogimg5.png";

export default function Blog() {
  return (
    <>
      <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 md:pb-28 lg:pb-32 xl:pb-40">
        <div className="max-w-[1032px] mx-auto px-4">
          <div className="heading1 max-w-[852px] mx-auto text-center">
            <h5 className="md:py-1 lg:py-2 px-[6px] md:px-[10px] bg-[#e8f2ee] text-[#1a191e] rounded-[2px] md:rounded-[4px] w-fit mx-auto mb-2 lg:mb-4">
              App
            </h5>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
              How To Start Using Banko <br className="" /> For Your Startup
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/90 mb-2 max-w-[568px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 max-w-[1000px]">
            <Image src={detailcard} alt="blogcard image" layout="intrinsic" />
            <div className="cardinfo flex flex-col gap-8 pt-16">
              <h4 className="h4 text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white">
                Et malesuada fames ac turpis
              </h4>
              <p className="text-[16px] md:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi blandit cursus risus at ultrices mi tempus imperdiet
                nulla. Odio morbi quis commodo odio. Et malesuada fames ac
                turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin
                aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt
                augue interdum. Ultrices in iaculis nunc sed augue lacus
                viverra.
                <br /> <br /> Erat imperdiet sed euismod nisi porta. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras
                sed felis eget velit aliquet sagittis. Amet commodo nulla
                facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus at augue.
                Blandit aliquam etiam erat velit scelerisque in dictum. In hac
                habitasse platea dictumst vestibulum rhoncus. Molestie ac
                feugiat sed lectus vestibulum.
              </p>
              <h4 className="h4 text-[24px] lg:text-[28px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white">
                Nascetur ridiculus mus
              </h4>
              <p className="text-[16px] md:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white/80">
                Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis
                orci a scelerisque purus semper eget duis at. Porta lorem mollis
                aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac
                orci phasellus egestas tellus. Mauris cursus mattis molestie a
                iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus
                mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis
                convallis convallis tellus id interdum. Quis ipsum suspendisse
                ultrices gravida dictum fusce. Scelerisque mauris pellentesque
                pulvinar pellentesque. Tincidunt augue interdum velit euismod.
                Nibh tortor id aliquet lectus. Amet commodo nulla facilisi
                nullam. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor
                eu augue ut lectus arcu bibendum.
              </p>
              <div className="socialmedia w-fit mx-auto text-center mt-4 lg:mt-8">
                <h6 className="text-[18px] leading-[1.4] tracking-tight text-[1a191e] mb-2 lg:mb-4">
                  Share article
                </h6>
                <ul className="flex gap-4 justify-center items-center w-fit mx-auto">
                  <li>
                    <Image
                      src={facebook}
                      alt="facebook image"
                      layout="intrinsic"
                      className="cursor-pointer dark:bg-white"
                    />
                  </li>
                  <li>
                    <Image
                      src={linkdIn}
                      alt="linkdIn image"
                      layout="intrinsic"
                      className="cursor-pointer dark:bg-white"
                    />
                  </li>
                  <li>
                    <Image
                      src={twitter}
                      alt="twitter image"
                      layout="intrinsic"
                      className="cursor-pointer dark:bg-white"
                    />
                  </li>
                  <li>
                    <Image
                      src={instagram}
                      alt="instagram image"
                      layout="intrinsic"
                      className="cursor-pointer dark:bg-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fetchblog */}
      <div className="blogmain py-10 sm:py-30 lg:py-40 border-t border-[#e8e8e8] dark:border-white/10">
        <div className="contizer2">
          <div className="flex justify-between">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] leading-[1.1] text-[#1a191e] dark:text-white">
              Related Articles
            </h1>
            {/* button */}
            <button className="ctabtn rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight self-end">
              <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2">
                All Features
                <ArrowRight size={16} className="text-[#5bb5a2] lg:hidden" />
                <ArrowRight
                  size={20}
                  className="text-[#5bb5a2] hidden lg:block"
                />
              </span>
            </button>
          </div>
          <div className="blogcontent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10 lg:mt-14 xl:mt-16">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi.
                </p>
                <ul className="flex gap-2 mt-6">
                  <li className="bg-[#f8f8f8] rounded-[2px] lg:rounded-[4px] py-1 px-2.5  text-[11px] md:text-[13px] text-[#1a191e] cursor-pointer">
                    technology
                  </li>
                </ul>
              </div>
            </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi.
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
          </div>
        </div>
      </div>
    </>
  );
}
