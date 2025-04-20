import React from "react";
import Image from "next/image";
import Link from "next/link";
import chevdown from "../../../public/chevdown.png";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import appimg from "../../../public/app1.png";
import appimg1 from "../../../public/app2.png";
import appimg2 from "../../../public/app3.png";
import onebanksatcs from "../../../public/bankStaticstics.png";
import bankCard1 from "../../../public/bankCard1.png";
import bankCard2 from "../../../public/bankCard2.png";
import bankCard3 from "../../../public/bankCard3.png";
import gridcard from "../../../public/grid.png";
import gridcard1 from "../../../public/grid2.png";
import gridcard2 from "../../../public/grid3.png";
import choosecard from "../../../public/choosecard.png";
import choosecard1 from "../../../public/choosecard1.png";
import choosecard2 from "../../../public/choosecard2.png";
import ctacard from "../../../public/ctacard.png";
import applstor from "../../../public/Apple_store.png";
import googlestor from "../../../public/google_store.png";
import phone from "../../../public/phone.png";
import mailing from "../../../public/mailing.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

export default function Features() {
  return (
    <section className="flex flex-col gap-10 sm:gap-20 lg:gap-30 xl:gap-40 pb-10 sm:pb-20 lg:pb-30 xl:pb-40 text-[#1a191e] dark:text-white/90">
      {/* hero */}
      <div className="bg-[#e8f2ee] dark:bg-gray-600">
        <div className="mx-auto px-4 py-14 md:py-18 lg:py-20 xl:pt-28 max-w-[832px] xl:min-h-[58vh] text-center">
          <h1 className="mb-1 text-[#1a191e] 2xl:text-[80px] dark:text-white/90 text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            All in one Card
          </h1>
          <h6 className="mx-auto max-w-[500px] text-[#1a191e90] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8]">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </h6>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 mx-auto mb-8 pt-6 md:pt-8 lg:pt-12 w-fit button">
            <Link
              href={"user/account"}
              className="bg-[#5bb5a2] px-2 sm:px-3 lg:px-4 xl:px-6 py-1 sm:py-2 lg:py-3 xl:py-4 rounded-[3px] lg:rounded-[6px] text-[14px] text-white sm:text-[16px] lg:text-[18px] tracking-tight"
            >
              Open Account
            </Link>
            <div>
              <button className="flex items-center gap-1.5 sm:gap-2 text-[#5bb5a2] text-[14px] sm:text-[16px] lg:text-[18px] tracking-tight cursor-pointer">
                Compare Card
                <span>
                  <Image
                    src={chevdown}
                    alt="chevdown image"
                    className="w-3 lg:w-4"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end gap-1 sm:gap-2 lg:gap-4 cards">
          <div className="card">
            <Image src={card1} alt="card1 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card2} alt="card2 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card3} alt="card3 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card4} alt="card4 image" width={0} height={0} />
          </div>
          <div className="card">
            <Image src={card5} alt="card5 image" width={0} height={0} />
          </div>
        </div>
      </div>

      {/* transaction */}
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 contizer2">
        <div className="cmnHeading">
          <h5 className="mb-1 lg:mb-2 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
            Transation
          </h5>
          <h2 className="mb-2 lg:mb-4 text-[#1a191e] lg:text-[64px] dark:text-white text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Send & receive money instantly
          </h2>
          <p className="mb-4 lg:mb-8 text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* advantages */}
          <div className="flex flex-col gap-2 lg:gap-4 mb-6 lg:mb-12 sm;mb-8">
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Malesuada Ipsum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Vestibulum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Parturient Lorem
            </h5>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] pl-4">
          <div className="w-fit">
            <Image
              src={appimg}
              alt="appimg image"
              width={0}
              height={0}
              className="tranImage"
            />
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 contizer2">
        <div className="cmnHeading">
          <h5 className="mb-1 lg:mb-2 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
            Cards
          </h5>

          <h2 className="mb-2 lg:mb-4 text-[#1a191e] lg:text-[64px] dark:text-white text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Manage <br className="hidden lg:block" /> Your Account
          </h2>
          <p className="mb-4 lg:mb-8 text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* advantages */}
          <div className="flex flex-col gap-2 lg:gap-4 mb-6 lg:mb-12 sm;mb-8">
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Malesuada Ipsum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Vestibulum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Parturient Lorem
            </h5>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] pl-4">
          <Image
            src={appimg1}
            alt="appimg image"
            width={0}
            height={0}
            className="tranImage"
          />
        </div>
      </div>

      {/* statistics */}
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 contizer2">
        <div className="cmnHeading">
          <h5 className="mb-1 lg:mb-2 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
            Advanched Statistics
          </h5>
          <h2 className="mb-2 lg:mb-4 text-[#1a191e] lg:text-[64px] dark:text-white text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Keep control over your money
          </h2>
          <p className="mb-4 lg:mb-8 text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* advantages */}
          <div className="flex flex-col gap-2 lg:gap-4 mb-6 lg:mb-12 sm;mb-8">
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Malesuada Ipsum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Vestibulum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Parturient Lorem
            </h5>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] pl-4">
          <Image
            src={appimg2}
            alt="appimg image"
            width={0}
            height={0}
            className="tranImage"
          />
        </div>
      </div>

      {/* saving account */}
      <div className="items-center grid grid-cols-1 sm:grid-cols-2 contizer2">
        <div className="cmnHeading">
          <h5 className="mb-1 lg:mb-2 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
            Saving Accounts
          </h5>
          <h2 className="mb-2 lg:mb-4 text-[#1a191e] lg:text-[64px] dark:text-white text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Lorem et
            <br className="hidden lg:block" />
            ipsum dolor
          </h2>
          <p className="mb-4 lg:mb-8 text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* advantages */}
          <div className="flex flex-col gap-2 lg:gap-4 mb-6 lg:mb-12 sm;mb-8">
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Malesuada Ipsum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Vestibulum
            </h5>
            <h5 className="flex items-center gap-2 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white leading-[1.4] lg:leading-[1.8] h5">
              <span className="inline-grid place-items-center bg-[#5bb5a2] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                <Check size={14} color="white" className="lg:hidden" />
                <Check size={18} color="white" className="hidden lg:block" />
              </span>
              Parturient Lorem
            </h5>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end p-0 md:pr-[40px] lg:pr-[80px] xl:pr-[110px] pl-4">
          <Image
            src={appimg2}
            alt="appimg image"
            width={0}
            height={0}
            className="tranImage"
          />
        </div>
      </div>

      {/* one bank */}
      <div className="">
        <div className="contizer2">
          <div className="text-center">
            <h3 className="text-[#1a191e] lg:text-[64px] dark:text-white/90 text-3xl md:text-5xl">
              All in one bank. Really.
            </h3>
            <p className="mx-auto mb-4 sm:mb-6 lg:mb-8 max-w-[460px] text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
              Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
              leo duis ut diam.
            </p>
          </div>
          {/* cards */}
          <div className="gap-4 lg:gap-6 xl:gap-8 grid grid-cols-1 sm:grid-cols-2">
            <div className="onecard">
              <div className="text-center onebnkheding">
                <h3 className="mb-1 lg:mb-2 text-[#1a191e] text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] dark:text-white/90 leading-[1.2] tracking-tight">
                  Statistics
                </h3>
                <p className="mx-auto max-w-[460px] text-[#1a191e80] text-[16px] lg:text-[18px] dark:text-white/90 leading-[1.8]">
                  Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                  et leo duis ut diam.
                </p>
              </div>
              <div className="onrimg2">
                <Image
                  src={onebanksatcs}
                  alt="onebanksatcs image"
                  layout="intrinsic"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="onecard">
              <div className="text-center onebnkheding">
                <h3 className="mb-1 lg:mb-2 text-[#1a191e] text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] dark:text-white/90 leading-[1.2] tracking-tight h3">
                  Cards
                </h3>
                <p className="mx-auto max-w-[460px] text-[#1a191e80] text-[16px] lg:text-[18px] dark:text-white/90 leading-[1.8]">
                  Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                  et leo duis ut diam.
                </p>
              </div>

              <div className="flex justify-between items-end gap-2 sm:gap-3 lg:gap-4 xl:gap-5">
                <div className="onrimg2">
                  <Image
                    src={bankCard1}
                    alt="bankCard1 image"
                    layout="intrinsic"
                    className="mx-auto"
                  />
                </div>
                <div className="onrimg2">
                  <Image
                    src={bankCard2}
                    alt="bankCard2 image"
                    layout="intrinsic"
                    className="mx-auto"
                  />
                </div>
                <div className="onrimg2">
                  <Image
                    src={bankCard3}
                    alt="bankCard3 image"
                    layout="intrinsic"
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 lg:gap-6 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-6 xl:mt-8">
            <div className="onecard">
              <div className="mx-auto sm:text-left text-center">
                <h3 className="mb-1 lg:mb-2 text-[#1a191e] text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] dark:text-white/90 leading-[1.2] tracking-tight">
                  Easy <br className="hidden sm:block" /> integration
                </h3>
                <p className="mx-auto max-w-[460px] text-[#1a191e80] text-[16px] lg:text-[18px] dark:text-white/90 leading-[1.8]">
                  Lorem ipsum dolor sit amet, <br className="hidden sm:block" />{" "}
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="onrimg">
                <Image
                  src={gridcard}
                  alt="gridcard image"
                  layout="intrinsic"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="onecard">
              <div className="mx-auto sm:ms-auto sm:text-left text-center">
                <div className="">
                  <h3 className="mb-1 lg:mb-2 text-[#1a191e] text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] dark:text-white/90 leading-[1.2] tracking-tight">
                    Savings <br className="hidden sm:block" /> Accounts
                  </h3>
                  <p className="mx-auto max-w-[460px] text-[#1a191e80] text-[16px] lg:text-[18px] dark:text-white/90 leading-[1.8]">
                    Lorem ipsum dolor sit amet,
                    <br className="hidden sm:block" />
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end onrimg">
                <Image
                  src={gridcard1}
                  alt="gridcard image"
                  layout="intrinsic"
                  className=""
                />
              </div>
            </div>
            <div className="onecard">
              <div className="mx-auto sm:text-left text-center">
                <div>
                  <h3 className="mb-1 lg:mb-2 text-[#1a191e] text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[40px] dark:text-white/90 leading-[1.2] tracking-tight">
                    Instant <br className="hidden sm:block" /> transactions
                  </h3>
                  <p className="mx-auto max-w-[460px] text-[#1a191e80] text-[16px] lg:text-[18px] dark:text-white/90 leading-[1.8]">
                    Lorem ipsum dolor sit amet,
                    <br className="hidden sm:block" /> consectetur adipiscing
                    elit.
                  </p>
                  <div className="onrimg">
                    <Image
                      src={gridcard2}
                      alt="gridcard2 image"
                      layout="intrinsic"
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choosing card */}
      <div className="contizer2">
        <div className="mx-auto pb-12 md:pb-16 xl:pb-18 max-w-[540px] text-center">
          <h5 className="mb-2 lg:mb-4 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
            Accounts
          </h5>
          <h3 className="mb-2 lg:mb-4 text-[#1a191e] xl:text-[64px] dark:text-white text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-[-3%]">
            Choose your card
          </h3>
          <h6 className="mx-auto max-w-[460px] text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white leading-[1.4] lg:leading-[1.8] p">
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </h6>
        </div>
        <div className="gap-6 lg:gap-10 xl:gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[746px] lg:max-w-full membershipcard">
          <div className="text-center membercard">
            <h5 className="text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight price">
              Basic
              <span className="priceCategory">Popular</span>
            </h5>
            <h3 className="mb-2 text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] dark:text-white/80 leading-[1.2] tracking-tight h3">
              Free
            </h3>
            <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/80 leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mx-auto mb-6 pt-5 lg:pt-6 w-fit">
              <Image
                src={choosecard}
                alt="choosecard image"
                layout="intrinsic"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>

          <div className="text-center membercard">
            <h6 className="text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight price price">
              Premium
            </h6>
            <h3 className="flex items-end gap-3 mx-auto mb-2 w-fit text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] dark:text-white/80 leading-[1.2] tracking-tight h3">
              $5
              <span className="rounded-[4px] text-[#1a191e80] text-[10px] lg:text-[12px] dark:text-white/80 leading-[1.8]">
                per month
              </span>
            </h3>
            <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/80 leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mx-auto mb-6 pt-5 lg:pt-6 w-fit">
              <Image
                src={choosecard1}
                alt="choosecard1 image"
                layout="intrinsic"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>

          <div className="text-center membercard">
            <h6 className="text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight price price">
              Gold
            </h6>
            <h3 className="flex items-end gap-3 mx-auto mb-2 w-fit text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] dark:text-white/80 leading-[1.2] tracking-tight h3">
              $10
              <span className="rounded-[4px] text-[#1a191e80] text-[10px] lg:text-[12px] dark:text-white/80 leading-[1.8]">
                per month
              </span>
            </h3>
            <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/80 leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="mx-auto mb-6 pt-5 lg:pt-6 w-fit">
              <Image
                src={choosecard2}
                alt="choosecard2 image"
                layout="intrinsic"
                width={0}
                height={0}
                className="mb-4 lg:mb-6"
              />
              <button className="priceBtn">Get started</button>
            </div>
          </div>
        </div>
      </div>

      {/* one app */}
      <div className="oneappmain">
        <div className="contizer2">
          <div className="flex md:flex-row flex-col gap-2 sm:gap-4 lg:gap-8 xl:gap-16 bg-[#5bb5a2] rounded-lg sm:rounded-xl lg:rounded-2xl">
            <div className="left px-2 sm:px-4 lg:px-8 py-6 md:py-8 lg:py-12 xl:py-24 xl:pl-[76px] w-full">
              <h3 className="mb-2 lg:mb-4 text-white xl:text-[64px] text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-[-3%]">
                One app. <br /> One banking
              </h3>
              <p className="mb-4 sm:mb-6 lg:mb-8 text-[16px] text-white sm:text-[18px] leading-[1.4] lg:leading-[1.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12">
                <div className="flex flex-col gap-2 lg:gap-4 w-fit">
                  <div className="flex items-center gap-2 text-[15px] text-white sm:text-[16px]">
                    <div className="inline-grid place-items-center bg-[#ffffff20] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    Instant transation
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-white sm:text-[16px]">
                    <div className="inline-grid place-items-center bg-[#ffffff20] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    Saving Accounts
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 w-fit">
                  <div className="flex items-center gap-2 text-[15px] text-white sm:text-[16px]">
                    <div className="inline-grid place-items-center bg-[#ffffff20] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    Payment worldwide
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-white sm:text-[16px]">
                    <div className="inline-grid place-items-center bg-[#ffffff20] rounded-full w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    100% mobile banking
                  </div>
                </div>
              </div>
              {/* ctabtns */}
              <div className="flex flex-wrap gap-4 ctabtns">
                <button className="cursor-pointer">
                  <Image
                    src={applstor}
                    alt="applstor image"
                    width={0}
                    height={0}
                    className="max-w-[94px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[130px]"
                  />
                </button>
                <button className="cursor-pointer">
                  <Image
                    src={googlestor}
                    alt="googlestor image"
                    width={0}
                    height={0}
                    className="max-w-[94px] sm:max-w-[100px] lg:max-w-[120px] xl:max-w-[130px]"
                  />
                </button>
              </div>
            </div>
            {/* current balance  */}
            <div className="flex justify-center md:justify-end lg:pt-16 xl:pt-24 sm:pr-4 lg:pr-8 2xl:pr-16 xl:pr-12 w-full">
              <div className="self-end">
                <Image
                  src={ctacard}
                  alt="ctacard image"
                  width={0}
                  height={0}
                  className="max-w-[260px] lg:max-w-[320px] xl:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* suport */}
      <div className="suportmain">
        <div className="contizer2">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 lg:col-span-6 mb-4 lg:mb-8">
              <h3 className="mb-4 lg:mb-12 text-[#1a191e] xl:text-[64px] dark:text-white text-2xl sm:text-3xl lg:text-5xl leading-[1.1] tracking-[-3%] sm:8">
                Need help?
              </h3>
              <div className="flex items-center gap-3 lg:gap-6 mb-4 lg:mb-8 phone">
                <Image
                  src={phone}
                  alt="phone image"
                  width={0}
                  height={0}
                  className="w-8 sm:w-10"
                />
                <div className="phone">
                  <a href="tel:+008012345678">
                    <button className="text-[#1a191e] text-[16px] xl:text-[18px] dark:text-white/80 leading-[1.4] tracking-tight cursor-pointer">
                      +49 176 123 456
                    </button>
                  </a>
                  <p className="text-[#1a191e80] text-[14px] dark:text-white/80 leading-[1.6]">
                    Support Hotline
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-6 mb-6 sm:mb-8 lg:mb-12 mail">
                <Image
                  src={mailing}
                  alt="mailing image"
                  width={0}
                  height={0}
                  className="w-8 sm:w-10"
                />
                <div className="phone">
                  <a href="mailto:help@benquee.com">
                    <button className="text-[#1a191e] text-[16px] xl:text-[18px] dark:text-white/80 leading-[1.4] tracking-tight cursor-pointer hotline">
                      help@benquee.com
                    </button>
                  </a>

                  <p className="text-[#1a191e80] text-[14px] dark:text-white/80 leading-[1.6]">
                    Support Email
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="right flex justify-center items-end w-fit">
                <button className="rounded-[3px] lg:rounded-[6px] text-[#5bb5a2] text-[16px] lg:text-[18px] tracking-tight ctabtn">
                  <span className="inline-flex items-center gap-1 lg:gap-2 cursor-pointer">
                    All Features
                    <ArrowRight
                      size={16}
                      className="lg:hidden text-[#5bb5a2]"
                    />
                    <ArrowRight
                      size={20}
                      className="hidden lg:block text-[#5bb5a2]"
                    />
                  </span>
                </button>
              </div>
            </div>
            {/* shad Accrodion */}
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6" className="">
                  <AccordionTrigger className="mb-2 lg:mb-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                    How do I open an Banko account?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="">
                  <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                    How do I order a new card?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="">
                  <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                    How to change my account limits?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9" className="">
                  <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                    How does Banko premium works?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget
                    gravida cum sociis natoque penatibus et magnis dis
                    parturient.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10" className="">
                  <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                    Can I have two Banko accounts?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod temp natoque penatibus et magnis dis parturient.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
