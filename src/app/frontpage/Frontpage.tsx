import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import frontcard from "../../../public/frontcard.png";
import badge3 from "../../../public/badge3.png";
import badge4 from "../../../public/badge4.png";
import badge5 from "../../../public/badge5.png";
import badge6 from "../../../public/badge6.png";
import badge7 from "../../../public/badge7.png";
import badge8 from "../../../public/badge8.png";
import currentbalance from "../../../public/currentbalance.png";
import transactions from "../../../public/transactions.png";
import Frame1 from "../../../public/orgfram1.png";
import Frame2 from "../../../public/orgfram2.png";
import Frame3 from "../../../public/orgfram3.png";
import Frame4 from "../../../public/orgfram4.png";
import Frame5 from "../../../public/orgfram5.png";
import notifycard from "../../../public/notifycard.png";
import Webflow_logo1 from "../../../public/Webflow_logo1.png";
import Shopify_1 from "../../../public/Shopify_1.png";
import Zapier_logo1 from "../../../public/Zapier_logo1.png";
import bitcoin from "../../../public/bitcoin.png";
import PayPal1 from "../../../public/PayPal1.png";
import Mastercard from "../../../public/Mastercard.png";
import Visa_2021 from "../../../public/Visa_2021.png";
import Googlepay from "../../../public/Googlepay.png";
import Apple_Pay_logo1 from "../../../public/Apple_Pay_logo1.png";
import Amazon_Pay_log1 from "../../../public/Amazon_Pay_log1.png";
import cardgroup from "../../../public/cardgroup.png";
import star from "../../../public/star.png";
import rating from "../../../public/rating.png";
import ctacard from "../../../public/ctacard.png";
import applstor from "../../../public/Apple_store.png";
import googlestor from "../../../public/google_store.png";
import phone from "../../../public/phone.png";
import mailing from "../../../public/mailing.png";
// blog
import blogImage from "../../../public/blogimg.png";
import blogImage1 from "../../../public/blogimg1.png";
import blogImage5 from "../../../public/blogimg5.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Frontpage() {
  return (
    <section className="flex flex-col gap-20 sm:gap-30 lg:gap-40">
      {/* hero */}
      <div className="hero_main py-10 sm:py-18 lg:py-32 bg-[#e8f2ee] dark:bg-gray-600">
        <div className="contizer2">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 sm:gap-6">
            <div className="">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[100px] text-[#1a191e] dark:text-white leading-[1.1] tracking-tight mb-2 lg:mb-4">
                Banking <br className="" /> starts here.
              </h1>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-[#1a191e] dark:text-white leading-[1.3] lg:leading-[1.7] mb-4 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </h4>
              {/* advantages */}
              <div className="max-w-[400px] sm:max-w-[490px] flex justify-between flex-wrap gap-2 lg:gap-4 mb-8 lg:mb-16">
                <div className="flex flex-col gap-2 lg:gap-4 sm:mr-4">
                  <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                    <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </span>
                    Instant Transfer
                  </h5>
                  <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                    <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </span>
                    Saving accounts
                  </h5>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                    <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </span>
                    Payments worldwide
                  </h5>
                  <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                    <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </span>
                    100% mobile banking
                  </h5>
                </div>
              </div>

              {/* button */}
              <div className="mybutton flex items-center flex-wrap gap-4">
                <Link
                  href="/account"
                  className="ctabtn inline-block py-1 sm:py-2 lg:py-3 xl:py-4 px-2 sm:px-3 lg:px-4 xl:px-6 bg-[#5bb5a2] rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-white tracking-tight"
                >
                  Open Account
                </Link>
                <button className="ctabtn py-1 sm:py-2 lg:py-3 xl:py-4 px-2 sm:px-3 lg:px-4 xl:px-6 dark:border dark:border-[#5bb5a2] rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
                  <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2 leading-[1]">
                    Compare Card
                    <ArrowRight
                      size={22}
                      className="text-[#5bb5a2] lg:hidden"
                    />
                    <ArrowRight
                      size={24}
                      className="text-[#5bb5a2] hidden lg:block"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="md:pr-2 lg:pr-6 xl:pr-9 mt-8 sm:mt-0 flex justify-center sm:justify-end">
              <div className="max-w-[260px] sm:max-w-[320px] lg:max-w-full">
                <Image
                  src={frontcard}
                  alt="moss"
                  width={0}
                  height={0}
                  className="max-w-[260px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* one App one banking */}
      <div className="oneapp">
        <div className="contizer2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="appleft">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] text-[#1a191e] dark:text-white leading-[1.1] tracking-tight">
                One app. <br className="" />
                One banking.
              </h2>
              <div className="bankcards grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 xl:gap-8 mt-8 sm:mt-12 lg:mt-16">
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge3} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Instant <br />
                    transactions
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge4} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Saving
                    <br />
                    accounts
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge5} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Mobile
                    <br />
                    banking
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge6} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Advanced
                    <br />
                    statistics
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge7} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Virtual
                    <br />
                    cards
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] dark:border-white/30 rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge8} alt="badge3" width={0} height={0} />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Contactless
                    <br />
                    payments
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center">
              <div className="max-w-[260px] sm:max-w-[320px] lg:max-w-full">
                <Image
                  src={currentbalance}
                  alt="moss"
                  width={0}
                  height={0}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* send&receive money */}
      <div className="moneytransfer bg-[#e8f2ee] dark:bg-[#e8f2ee10]">
        <div className="contizer2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            <div className="left py-14 sm:py-16 lg:py-24 xl:py-32">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-tight mb-2 lg:mb-4">
                Send & receive <br className="" />
                money instantly
              </h3>
              <p className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8] mb-4 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
              {/* advantages */}
              <div className="flex flex-col gap-2 lg:gap-4">
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Malesuada Ipsum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Vestibulum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Parturient Lorem
                </h5>
              </div>
            </div>
            <div className="right flex justify-center items-end">
              <div className="max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]">
                <Image
                  src={transactions}
                  alt="moss"
                  width={0}
                  height={0}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* organize money */}
      <div className="organize">
        <div className="contizer2">
          <div className="flex justify-between flex-wrap gap-8 sm:gap-12">
            <div className="left max-w-[640px]">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Saving Accounts
              </h5>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                Organize your money <br className="hidden sm:block" /> the right
                way
              </h3>
              <p className="p text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="right flex justify-center items-end w-fit">
              {/* button */}
              <button className="ctabtn rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
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
          </div>
          <div className="organizecard flex justify-evenly flex-wrap gap-4 lg:gap-8 mt-12 sm:mt-14 lg:mt-16">
            <div className="card ">
              <Image
                src={Frame1}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
              <div className="mt-2 sm:mt-3 lg:mt-5 flex flex-col gap-0.5 sm:gap-1 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white">
                <h5 className="h5 leading-[1.2] tracking-tight">New Laptop</h5>
                <p className="text-[#1a191e80] dark:text-white/70 text-[12px] sm:text-[14px] leading-[1.3] sm:leading-[1.6]">
                  400$
                </p>
              </div>
            </div>
            <div className="card ">
              <Image
                src={Frame2}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
              <div className="mt-2 sm:mt-3 lg:mt-5 flex flex-col gap-0.5 sm:gap-1 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white">
                <h5 className="h5 leading-[1.2] tracking-tight">Dream bike</h5>
                <p className="text-[#1a191e80] dark:text-white/70 text-[12px] sm:text-[14px] leading-[1.3] sm:leading-[1.6]">
                  200$
                </p>
              </div>
            </div>
            <div className="card ">
              <Image
                src={Frame3}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
              <div className="mt-2 sm:mt-3 lg:mt-5 flex flex-col gap-0.5 sm:gap-1 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white">
                <h5 className="h5 leading-[1.2] tracking-tight">Holiday</h5>
                <p className="text-[#1a191e80] dark:text-white/70 text-[12px] sm:text-[14px] leading-[1.3] sm:leading-[1.6]">
                  1400$
                </p>
              </div>
            </div>
            <div className="card ">
              <Image
                src={Frame4}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
              <div className="mt-2 sm:mt-3 lg:mt-5 flex flex-col gap-0.5 sm:gap-1 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white">
                <h5 className="h5 leading-[1.2] tracking-tight">Camera</h5>
                <p className="text-[#1a191e80] dark:text-white/70 text-[12px] sm:text-[14px] leading-[1.3] sm:leading-[1.6]">
                  100$
                </p>
              </div>
            </div>
            <div className="card ">
              <Image
                src={Frame5}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
              <div className="mt-2 sm:mt-3 lg:mt-5 flex flex-col gap-0.5 sm:gap-1 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white">
                <h5 className="h5 leading-[1.2] tracking-tight"></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  notify */}
      <div className="notify">
        <div className="contizer2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-2">
            <div className="left ]">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Notifications
              </h5>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                Stay notified
              </h3>
              <p className="p text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8] mb-4 sm:mb-6 lg:mb-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              {/* advantages */}
              <div className="flex flex-col gap-2 lg:gap-4 mb-6 sm;mb-8 lg:mb-12">
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Malesuada Ipsum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Vestibulum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Parturient Lorem
                </h5>
              </div>
              {/* button */}
              <button className="ctabtn dark:p-1 rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
                <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2">
                  Compare Cards
                  <ArrowRight size={16} className="text-[#5bb5a2] lg:hidden" />
                  <ArrowRight
                    size={20}
                    className="text-[#5bb5a2] hidden lg:block"
                  />
                </span>
              </button>
            </div>

            <div className="card inline-flex justify-center lg:justify-end">
              <Image
                src={notifycard}
                alt="Frame1 image"
                width={0}
                height={0}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Tools seemless */}
      <div className="Tools">
        <div className="contizer2">
          <div className="paycard max-w-[740px] flex flex-wrap gap-2 lg:gap-4 mb-6 ms:mb-8 lg:mb-12 xl:mb-16">
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Webflow_logo1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Shopify_1}
                alt="Shopify_1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Zapier_logo1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={bitcoin}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            {/* balancer */}
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit opacity-0 invisible cursor-pointer hidden lg:block py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={PayPal1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>

            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={PayPal1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Mastercard}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Visa_2021}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Googlepay}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Apple_Pay_logo1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
            <div className="payitem rounded-[4px] lg:rounded-[10px] bg-[#f8f8f8] max-w-fit py-2 lg:py-4 px-2 lg:px-4">
              <Image
                src={Amazon_Pay_log1}
                alt="Webflow_logo1"
                //width={0} height={0}
                width={0}
                height={0}
                className="max-w-[60%] sm:max-w-[70%] lg:max-w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-2">
            <div className="left">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Tools
              </h5>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                Seemless <br className="" />
                integration
              </h3>
              <p className="p text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            {/* advantages */}
            <div className="flex md:justify-center md:items-end">
              <div className="flex flex-col gap-2 lg:gap-4">
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Malesuada Ipsum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Vestibulum
                </h5>
                <h5 className="h5 flex items-center gap-2 text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8]">
                  <span className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#5bb5a2]">
                    <Check size={14} color="white" className="lg:hidden" />
                    <Check
                      size={18}
                      color="white"
                      className="hidden lg:block"
                    />
                  </span>
                  Parturient Lorem
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* account */}
      <div className="accountmain border-t-2 border-[#e8e8e8] dark:border-white/10">
        <div className="contizer2">
          <div className="account pt-20 sm:pt-30 lg:pt-40">
            <div className="max-w-[800px] mx-auto text-center">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Account
              </h5>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                Perfect card <br />
                for your needs.
              </h3>
              <p className="p text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white leading-[1.4] lg:leading-[1.8] max-w-[500px] mx-auto">
                Senectus et netus et malesuada fames ac turpis. Sagittis vitae
                et leo duis ut diam.
              </p>
              <div className="w-fit mx-auto mt-8 sm:mt-10 lg:mt-14">
                <Image
                  src={cardgroup}
                  alt="cardgroup image"
                  width={0}
                  height={0}
                  className=""
                />
                {/* button */}
                <div className="mybutton w-fit mx-auto flex items-center flex-wrap gap-4 mt-8 sm:mt-10 lg:mt-14">
                  <Link
                    href="/account"
                    className="ctabtn inline-block py-1 sm:py-2 lg:py-3 xl:py-4 px-2 sm:px-3 lg:px-4 xl:px-6 bg-[#5bb5a2] rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-white tracking-tight"
                  >
                    Open Account
                  </Link>
                  <button className="ctabtn cursor-pointer py-1 sm:py-2 lg:py-3 xl:py-4 px-2 sm:px-3 lg:px-4 xl:px-6 border border-[#e8e8e8] dark:border-[#5bb5a2] rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight leading-1">
                    <span className="inline-flex items-center gap-1 lg:gap-2">
                      Compare Card
                      <ArrowRight
                        size={22}
                        className="text-[#5bb5a2] lg:hidden"
                      />
                      <ArrowRight
                        size={24}
                        className="text-[#5bb5a2] hidden lg:block"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}
      <div className="testimonialmain">
        <div className="contizer2">
          <div className="testimonial flex justify-between flex-wrap gap-4">
            <div className="left max-w-[640px]">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Testimonials
              </h5>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                People all over the
                <br className="hidden sm:block" />
                world use banko.
              </h3>
            </div>
            <div className="right flex justify-center items-end w-fit">
              {/* button */}
              <button className="ctabtn rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
                <div className="cursor-pointer flex items-center gap-1 lg:gap-2">
                  <div className="max-w-[24px] sm:max-w-[30px] lg:max-w-full">
                    <Image
                      src={star}
                      alt="star"
                      width={0}
                      height={0}
                      className=""
                    />
                  </div>
                  <div>
                    <p className="text-[#1a191e] dark:text-white/90 text-[16px] sm:text-[18px] leading-[1.4] lg:leading-[1.8]">
                      Rated <span className="text-[#5bb5a2]">4.8/5</span> from
                      over 1000 users
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* usercard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mt-8 sm:mt-10 lg:mt-14 xl:mt-16">
            <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 sm:order-2 lg:order-1 max-h-fit">
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  Sunt qui esse pariatur <br className="hidden sm:block" /> duis
                  deserunt mollit
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Cody Fisher
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    Medical Assistant
                  </p>
                </div>
              </div>
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  Sunt qui esse pariatur <br className="hidden sm:block" /> duis
                  deserunt mollit
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Cody Fisher
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    Medical Assistant
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 sm:order-1 lg:order-2 max-h-fit">
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  At lectus urna duis <br className="hidden sm:block" />{" "}
                  convallis tellus
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dui accumsan sit amet nulla facilisi morbi.
                </p>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  In nibh mauris cursus mattis. At lectus urna duis convallis
                  convallis tellus. Enim blandit volutpat maecenas volutpat.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Jenny Wilson
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    Nursing Assistant
                  </p>
                </div>
              </div>
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  Donec et fringilla neque
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Etiam accumsan porta neque in viverra. Proin eleifend, eros in
                  tristique hendrerit, nisi purus cursus sapien, id ultrices
                  nunc tellus a ipsum. Donec et fringilla neque. Aenean
                  consequat purus quis lectus maximus fermentum.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Cody Fisher
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    Medical Assistant
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 sm:order-3 lg:order-3 max-h-fit">
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  Elit aute irure tempor <br className="hidden sm:block" />
                  cupidatat incididunt
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Guy Hawkins
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    President of Sales
                  </p>
                </div>
              </div>
              <div className="userCard p-2 sm:p-4 lg:p-6 xl:p-8 rounded-[5px] sm:rounded-[10px] border-2 border-[#e8e8e8] dark:border-white/30">
                <Image
                  src={rating}
                  alt="rating image"
                  width={0}
                  height={0}
                  className="max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full mb-1 lg:mb-2"
                />
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight mb-2 lg:mb-4">
                  Etiam accumsan porta <br className="hidden sm:block" /> neque
                  eros
                </h4>
                <p className=" text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/90 max-w-full lg:max-w-[324px] mb-3 lg:mb-6 xl:mb-6">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
                <div>
                  <h5 className="text-[16px] lg:text-[18px] text-[#1a191e] dark:text-white/60 ">
                    Dianne Russell
                  </h5>
                  <p className="text-[14px] text-[#1a191e80] dark:text-white/70 ">
                    Medical Assistant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* one app */}
      <div className="oneappmain">
        <div className="contizer2">
          <div className="bg-[#5bb5a2] rounded-lg sm:rounded-xl lg:rounded-2xl flex flex-col md:flex-row gap-2 sm:gap-4 lg:gap-8 xl:gap-16">
            <div className="left w-full py-6 md:py-8 lg:py-12 xl:py-24 px-2 sm:px-4 lg:px-8 xl:pl-[76px]">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-white leading-[1.1] tracking-[-3%] mb-2 lg:mb-4">
                One app. <br /> One banking
              </h3>
              <p className=" text-[16px] sm:text-[18px] text-white leading-[1.4] lg:leading-[1.8] mb-4 sm:mb-6 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-12">
                <div className="flex flex-col gap-2 lg:gap-4 w-fit">
                  <div className="text-[15px] sm:text-[16px] flex items-center gap-2 text-white">
                    <div className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#ffffff20]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    Instant transation
                  </div>
                  <div className="text-[15px] sm:text-[16px] flex items-center gap-2 text-white">
                    <div className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#ffffff20]">
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
                  <div className="text-[15px] sm:text-[16px] flex items-center gap-2 text-white">
                    <div className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#ffffff20]">
                      <Check size={14} color="white" className="lg:hidden" />
                      <Check
                        size={18}
                        color="white"
                        className="hidden lg:block"
                      />
                    </div>
                    Payment worldwide
                  </div>
                  <div className="text-[15px] sm:text-[16px] flex items-center gap-2 text-white">
                    <div className="inline-grid place-items-center w-[20px] sm:w-[24px] lg:w-[26px] h-[20px] sm:h-[24px] lg:h-[26px] rounded-full bg-[#ffffff20]">
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
              <div className="ctabtns flex flex-wrap gap-4">
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
            <div className="w-full lg:pt-16 xl:pt-24 sm:pr-4 lg:pr-8 xl:pr-12 2xl:pr-16 flex justify-center md:justify-end">
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
              <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-[64px] text-[#1a191e] dark:text-white leading-[1.1] tracking-[-3%] mb-4 sm:8 lg:mb-12">
                Need help?
              </h3>
              <div className="phone flex items-center gap-3 lg:gap-6 mb-4 lg:mb-8">
                <Image
                  src={phone}
                  alt="phone image"
                  width={0}
                  height={0}
                  className="w-8 sm:w-10"
                />
                <div className="phone">
                  <a href="tel:+008012345678">
                    <button className="text-[16px] xl:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white/80 cursor-pointer">
                      +49 176 123 456
                    </button>
                  </a>
                  <p className="text-[14px] leading-[1.6] text-[#1a191e80] dark:text-white/80">
                    Support Hotline
                  </p>
                </div>
              </div>
              <div className="mail flex items-center gap-3 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
                <Image
                  src={mailing}
                  alt="mailing image"
                  width={0}
                  height={0}
                  className="w-8 sm:w-10"
                />
                <div className="phone">
                  <a href="mailto:help@benquee.com">
                    <button className="hotline text-[16px] xl:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white/80 cursor-pointer">
                      help@benquee.com
                    </button>
                  </a>

                  <p className="text-[14px] leading-[1.6] text-[#1a191e80] dark:text-white/80">
                    Support Email
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="right flex justify-center items-end w-fit">
                <button className="ctabtn rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
                  <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2">
                    All Features
                    <ArrowRight
                      size={16}
                      className="text-[#5bb5a2] lg:hidden"
                    />
                    <ArrowRight
                      size={20}
                      className="text-[#5bb5a2] hidden lg:block"
                    />
                  </span>
                </button>
              </div>
            </div>
            {/* shad Accrodion */}
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white mb-2 lg:mb-4 cursor-pointer">
                    How do I open an Banko account?
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="">
                  <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                    How do I order a new card?
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="">
                  <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                    How to change my account limits?
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum fuga laboriosam voluptatem quidem, at esse quas
                    corporis hic dolorum animi?
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="">
                  <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                    How does Banko premium works?
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget
                    gravida cum sociis natoque penatibus et magnis dis
                    parturient.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="">
                  <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                    Can I have two Banko accounts?
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod temp natoque penatibus et magnis dis parturient.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* fetchblog */}
      <div className="blogmain py-10 sm:py-30 lg:py-40 border-t border-[#e8e8e8] dark:border-white/10">
        <div className="contizer2">
          <div className="flex justify-between">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] leading-[1.1] text-[#1a191e] dark:text-white">
              Blog
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
                width={0}
                height={0}
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
                width={0}
                height={0}
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
                  width={0}
                  height={0}
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
    </section>
  );
}
