import Image from "next/image";
import React from "react";
import dreamhouseimage from "../../../public/dreamhouseimage.png";
import Background from "../../../public/Background.png";
export default function page() {
  return (
    <>
      {/* header */}
      <header>
        <div className="mx-auto px-4 max-w-[1232px] mycontizer">
          <nav className="flex flex-wrap justify-between items-center gap-12 py-8 w-full">
            {/* logo */}
            <div className="ml-24 font-medium text-[32px] logo">benfort</div>
            {/* main Nav */}
            <ul className="flex items-center gap-8 navMain">
              <li>Properties</li>
              <li>Search</li>
              <li>Agent</li>
            </ul>
            {/* user profile */}
            <ul className="flex items-center gap-2 pr-18">
              <li>Sign Up</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
      {/* hero */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="pt-[71px] pb-[88px] text-center heading">
            <h1 className="mx-auto mb-3 sm:mb-4 lg:mb-[26px] w-fit font-medium text-[30px] sm:text-[44px] md:text-[60px] lg:text-[81px] leading-[1] tracking-[-2px] sm:tracking-[-4px]">
              Find the <span>perfect</span> <span>icon</span>
              <br className="hidden sm:block" />
              <span>property</span> with Benfort
            </h1>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              We believe there&#39;s a perfect home for everybody, no matter the
              budget. <br className="hidden sm:block" /> That&#39;s why we
              always find the best homes for your budget.
            </p>
          </div>
          <div className="flex gap-4 lg:gap-6 pr-14 pl-9 innerDiv">
            <div className="left">image</div>
            <div className="right">Content</div>
          </div>
        </div>
      </div>
      {/* Perks with Benfort */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="text-center perkHeading">
            <h3 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              Perks with <span>Benfort</span>
            </h3>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Your trusted real estate partner in every transaction.
            </p>
          </div>
          <div className="flex justify-between gap-6 mt-12 sm:mt-17 lg:mt-20 xl:mt-28 cardContainer">
            <div className="mx-auto w-fit perkCard">
              <div className="mx-auto mb-4 sm:mb-5 lg:mb-6 w-fit">image</div>
              <div className="bg-red-300 text-center">
                <h6 className="mb-3 sm:mb-4 font-semibold text-[14px]">
                  BUY PROPERTIES
                </h6>
                <p className="font-normal text-[14px] leading-[19px] sm:leading-[21px]">
                  Explore homforts&#39;s 2 million+ homes tailored and
                  <br className="hidden sm:block" />
                  uncover your ideal living space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Explore & Find your Dream home */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="flex flex-wrap justify-between gap-2.5 mx-auto max-w-[1088px]">
            <div className="flex flex-wrap justify-between gap-2 dreamImage">
              <div className="dreamHeadingr">
                <h3 className="font-medium text-[26px] sm:text-[32px] lg:text-[40px] break-words leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px] whitespace-normal">
                  Explore & Find <br /> your{" "}
                  <span>
                    Dream
                    <br /> home
                  </span>
                </h3>
                <div className="relative mt-4">
                  <Image src={dreamhouseimage} alt="dreamhouseimage" />

                  <div className="top-full left-0 absolute bg-white px-[19px] py-3 rounded-[8px] sm:rounded-[16px] -translate-y-1/2">
                    <div className="flex">
                      <div className="border rounded-full w-10 h-10">image</div>
                      <div className="border rounded-full w-10 h-10">image</div>
                      <div className="border rounded-full w-10 h-10">image</div>
                      <div className="border rounded-full w-10 h-10">image</div>
                    </div>
                    <h6 className="mt-1 sm:mt-2 font-normal text-[14px] text-center leading-[19px] sm:leading-[21px]">
                      200+ Happy Client
                    </h6>
                  </div>
                </div>
              </div>
              <div className="dreamImage">
                <Image src={Background} alt="Background" />
              </div>
            </div>
            {/* text */}
            <div className="bg-amber-50 p-3 sm:p-4 lg:p-6 rounded-[12px] lg:rounded-[16px] max-w-full sm:max-w-[428px] content">
              <p className="mb-16 sm:mb-20 lg:mb-24 font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                “We believe there&#39;s a perfect home for everybody, no matter
                the budget. That&#39;s why we always find the best homes for
                your budget.”
              </p>
              <div className="flex gap-19 py-4 lg:py-6 border-y border-black/4">
                <div>
                  <h3 className="mb-1 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    $200M+
                  </h3>
                  <h6 className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Sold in Real Estate
                  </h6>
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                    100+
                  </h3>
                  <p className="font-semibold text-[14px] leading-[19px] sm:leading-[21px]">
                    Property Sold
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-1 sm:gap-2 my-5 md:my-8">
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-[#191a20] rounded-full w-[10px] h-[10px]"></span>
                  Over 100k+ property & update regularly
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-[#191a20] rounded-full w-[10px] h-[10px]"></span>
                  Expert agent consultation
                </li>
                <li className="flex items-center gap-1.5 sm:gap-2.5">
                  <span className="inline-block bg-[#191a20] rounded-full w-[10px] h-[10px]"></span>
                  Loan & low Interest facility
                </li>
              </ul>
              <button className="bg-amber-400 px-2 md:px-3 py-1 md:py-2 rounded-[4px] font-normal text-[14px] leading-[19px] sm:leading-[21px]">
                Browse Listings
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* New listing */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="text-center listHeading">
            <h3 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>New Listing</span>
            </h3>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Explore latest & featured properties for sale.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cardContainer">
            <div className="perkCard">
              <div className="relative p-3 lg:p-5 h-24">
                image
                <div className="right-4 bottom-4 left-4 absolute flex justify-between gap-4 w-full font-light text-sm">
                  <div className="flex gap-4">
                    <span className="bg-[#F4F4F4] px-3 pt-[4px] pb-[6px] rounded-[6px] text-[12px] leading-[18px]">
                      Rent
                    </span>
                    <span className="bg-[#F4F4F4] px-3 pt-[4px] pb-[6px] rounded-[6px] text-[12px] leading-[18px]">
                      Industrial
                    </span>
                  </div>
                  <span className="bg-[#F4F4F4] px-3 pt-[4px] pb-[6px] rounded-[6px] text-[12px] leading-[18px]">
                    icon
                  </span>
                </div>
              </div>
              <div className="">
                <h5 className="sm:mb-2 font-normal text-[18px] leading-[25px] sm:leading-[27px]mb-1">
                  Luxury Loft
                </h5>
                <ul className="flex items-center gap-2">
                  <li className="flex items-center gap-1">
                    ❔
                    <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                      Jersey City
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="bg-black rounded-full w-2.5 h-2.5"></span>
                  </li>
                  <li className="flex items-center gap-1">
                    🏐
                    <p className="text-[12px] leading-[16px] sm:leading-[18px]">
                      04
                    </p>
                  </li>
                </ul>
                <p className="my-2 sm:my-3 font-normal text-[12px] leading-[18px]">
                  Nestled in a charming suburban area, this stunning home rests
                  on a spacious lot, offering..
                </p>
                <ul className="flex items-center gap-3 mb-2 sm:mb-3">
                  <li className="flex items-center gap-1">
                    icon
                    <p className="font-normal text-[12px] leading-[18px]">
                      1 Room
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    icon
                    <p className="font-normal text-[12px] leading-[18px]">
                      2 Bath Room
                    </p>
                  </li>
                  <li className="flex items-center gap-1">
                    icon
                    <p className="font-normal text-[12px] leading-[18px]">
                      600 ft
                    </p>
                  </li>
                </ul>
                <h6 className="font-semibold text-[14px] leading-[21px]">
                  $ 1500
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Properties */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="text-center propertiesHeading">
            <h3 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
              <span>Featured Properties</span>
            </h3>
            <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
              Explore highlighted properties.
            </p>
          </div>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 propertiesContainer">
            <div className="propertiesCard">
              <div className="relative h-64">
                image
                <div className="bottom-4 left-4 absolute bg-gray-50 bg-gradient-to-t from-gray-700 font-light text-sm to">
                  <h5 className="text-[18px]">Suburb Home</h5>
                  <div className="flex items-center gap-4">
                    <span>Rent</span>
                    <span>Industrial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get more out of homfort */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px] myContizer">
          <div className="flex gap-6 homfortContainer">
            <div className="homfortHeading">
              <h3 className="font-medium text-[40px]">
                <span>Get more out of homfort</span>
              </h3>
              <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                Explore easier ways to search for properties.
              </p>
              <div className="flex gap-2 button">
                <button>Log In</button>
                <button>Sign Up</button>
              </div>
            </div>

            <div className="homfortCard">image</div>
          </div>
        </div>
      </div>
      {/* Our Agents */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-30">
        <div className="mx-auto px-4 max-w-[1232px]">
          <div className="agentContainer">
            <div className="text-center agentHeading">
              <h3 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
                Our <span>Agents</span>
              </h3>
              <p className="font-normal text-[16px] leading-[22px] sm:leading-[24px]">
                Explore easier ways to search for properties.
              </p>
            </div>

            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 agentCard">
              <div>
                image
                <div className="flex flex-wrap justify-between gap-4 w-full">
                  <div>
                    <h5>name</h5>
                    <h6>desig</h6>
                  </div>
                  <div className="flex gap-2">
                    <span>{"5"}</span>text
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
