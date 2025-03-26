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
                  <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2">
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
                  layout="intrinsic"
                  className=""
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
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge3} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Instant <br />
                    transactions
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge4} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Saving
                    <br />
                    accounts
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge5} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Mobile
                    <br />
                    banking
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge6} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Advanced
                    <br />
                    statistics
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge7} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Virtual
                    <br />
                    cards
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
                {/* ===== */}
                <div className="card p-4 sm:p-6 lg:p-8 border-2 border-[#e8e8e8] rounded-[10px] lg:rounded-[16px]">
                  <div className="max-w-[30px] sm:max-w-[40px] lg:max-w-full mb-2 sm:mb-4 ">
                    <Image src={badge8} alt="badge3" layout="intrinsic" />
                  </div>
                  <h5 className="text-[18px] sm:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-1 sm:mb-2">
                    Contactless
                    <br />
                    payments
                  </h5>
                  <p className="text-[14px] sm:text-[16px] text-[#1a191e] dark:text-white/80 leading-[1.2] sm:leading-[1.6] tracking-tight">
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
                  layout="intrainsic"
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
                  layout="intrainsic"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
