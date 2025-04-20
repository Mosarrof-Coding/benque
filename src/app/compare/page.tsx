import React from "react";
import Image from "next/image";
import comcard1 from "../../../public/comcard1.png";
import comcard2 from "../../../public/comcard2.png";
import comcard3 from "../../../public/comcard3.png";
import cardcompare from "../../../public/cardcompare.png";
import badge1 from "../../../public/badge1.png";
import badgeOLd from "../../../public/badgeOLd.png";
import badgeOLd1 from "../../../public/badgeOLd1.png";
import badgeOLd2 from "../../../public/badgeOLd2.png";
import badgeOLd3 from "../../../public/badgeOLd3.png";
import worldicon from "../../../public/worldicon.png";
import houseicon from "../../../public/houseicon.png";
import phoneicon from "../../../public/phoneicon.png";
import badge4 from "../../../public/badge4.png";
import badge5 from "../../../public/badge5.png";
import badge6 from "../../../public/badge6.png";
import phone from "../../../public/phone.png";
import mailing from "../../../public/mailing.png";

export default function Compare() {
  return (
    <>
      {/* Compare hero */}
      <div className="bg-[#e8f2ee] dark:bg-gray-600">
        <div className="contizer">
          <div className="flex md:flex-row flex-col items-center gap-0 sm:gap-8 lg:gap-0 xl:mx-auto">
            <div className="left py-12 lg:py-18 xl:py-32 w-full">
              <h5 className="mb-2 lg:mb-4 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
                Compare Cards
              </h5>
              <h2 className="text-[#1a191e] xl:text-[80px] dark:text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.1] tracking-tight">
                The ideal <br />
                card for you
              </h2>
            </div>
            <div className="flex justify-center md:justify-end self-end md:pt-8 sm:pr-2 lg:pr-12 xl:pr-[100px] w-full">
              <div className="w-fit">
                <Image
                  src={cardcompare}
                  alt="cardcompare image"
                  layout="intrinsic"
                  width={0}
                  height={0}
                  className="max-w-[260px] lg:max-w-[320px] xl:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* alt card */}
      <div className="contizer">
        {/* main div */}
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-24 py-12 md:py-16 xl:py-24">
          {/* cards */}
          <div className="justify-items-center gap-6 lg:gap-10 xl:gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:mx-px lg:ms-auto lg:max-w-[1000px] idealcard">
            <div className="text-center membercard">
              <h6 className="flex justify-center items-center gap-1 sm:gap-2 text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight ctgry">
                Basic
                <span className="bg-[#e8f2ee] px-2 rounded-[2px] lg:rounded-[4px] text-[#5bb5a2] text-[10px] lg:text-[12px] dark:text-[#5b94b5] leading-[1.4] lg:leading-[1.8]">
                  Popular
                </span>
              </h6>
              <div className="py-4 lg:py-6">
                <h3 className="mb-1 lg:mb-2 font-bold text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[40px] dark:text-white/80 h3">
                  Free
                </h3>
                <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] dark:text-white/80 leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="mx-auto w-fit">
                <Image
                  src={comcard1}
                  alt="choosecard image"
                  width={0}
                  height={0}
                  className="mb-4 lg:mb-6"
                />
                <button className="bg-[#5bb5a2] px-4 py-1.5 lg:py-3 rounded-[3px] lg:rounded-[6px] w-full text-white text-center priceBtn">
                  Get started
                </button>
              </div>
            </div>

            <div className="text-center membercard">
              <h6 className="flex justify-center items-center gap-1 sm:gap-2 text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight ctgry">
                Premium
              </h6>
              <div className="py-4 lg:py-6">
                <h3 className="mb-1 lg:mb-2 font-bold text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[40px] dark:text-white/80 h3">
                  $5
                  <span className="ml-1 font-medium text-[#5bb5a2] text-[10px] lg:text-[12px] dark:text-white/80 leading-[1.4] lg:leading-[1.8]">
                    per month
                  </span>
                </h3>
                <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] dark:text-white/80 leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="mx-auto w-fit">
                <Image
                  src={comcard2}
                  alt="choosecard1 image"
                  width={0}
                  height={0}
                  className="mb-4 lg:mb-6"
                />
                <button className="bg-[#5bb5a2] px-4 py-1.5 lg:py-3 rounded-[3px] lg:rounded-[6px] w-full text-white text-center priceBtn priceBtn">
                  Get started
                </button>
              </div>
            </div>

            <div className="text-center membercard">
              <h6 className="flex justify-center items-center gap-1 sm:gap-2 text-[#1a191e] text-[18px] lg:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight ctgry">
                Gold
              </h6>
              <div className="py-4 lg:py-6">
                <h3 className="mb-1 lg:mb-2 font-bold text-[#1a191e] text-[24px] sm:text-[28px] lg:text-[40px] dark:text-white/80 h3">
                  $10
                  <span className="ml-1 font-medium text-[#5bb5a2] text-[10px] lg:text-[12px] dark:text-white/80 leading-[1.4] lg:leading-[1.8]">
                    per month
                  </span>
                </h3>
                <p className="mx-auto max-w-[300px] text-[#1a191e80] text-[14px] dark:text-white/80 leading-[1.6]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="mx-auto w-fit">
                <Image
                  src={comcard3}
                  alt="choosecard1 image"
                  width={0}
                  height={0}
                  className="mb-4 lg:mb-6"
                />
                <button className="bg-[#5bb5a2] px-4 py-1.5 lg:py-3 rounded-[3px] lg:rounded-[6px] w-full text-white text-center priceBtn priceBtn">
                  Get started
                </button>
              </div>
            </div>
          </div>
          {/* table */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-24 Credit_Card">
            {/* Credit Card */}
            <article>
              <h4 className="mb-2 sm:mb-3 lg:mb-4 font-medium text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight h4">
                Credit Card
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge1}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Physical Card
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        Optional
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd1}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Virtual Card
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        -
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>Up to 2</span>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>Unlimited</span>
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd2}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Contactless Payments
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd3}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Mobile Payments
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
            {/* bank aoount */}
            <article>
              <h4 className="mb-2 sm:mb-3 lg:mb-4 font-medium text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight h4">
                Bank Account
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={worldicon}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Free Payments Worldwide
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        -
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={houseicon}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Free ATM withdrawls
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        2
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>5</span>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>10</span>
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={phoneicon}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Mobile Banking
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
            {/* Extra features */}
            <article>
              <h4 className="mb-2 sm:mb-3 lg:mb-4 font-medium text-[#1a191e] text-[18px] sm:text-[20px] dark:text-white/80 leading-[1.2] tracking-tight h4">
                Extra Features
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge4}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Saving Accounts
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        -
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge6}
                          alt="badge6 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Advanced Statistics
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        2
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>5</span>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[14px] lg:text-[16px] dark:text-white/80 text-center">
                        <span>10</span>
                      </td>
                    </tr>
                    <tr className="flex justify-between items-center gap-2 lg:gap-4 sm:grid grid-cols-1 sm:grid-cols-4 py-2 sm:py-4 md:py-6 lg:py-8 border-[#e8e8e8] dark:border-white/10 border-t">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge5}
                          alt="badge5 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/80">
                            Premium Parnter Offers
                          </h5>
                          <span className="font-medium text-[#1a191e80] text-[14px] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="font-medium text-[#1a191e] text-[15px] lg:text-[16px] dark:text-white/80 text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                      <td className="text-center">
                        <Image
                          src={badgeOLd}
                          alt="badgeOLd image"
                          width={0}
                          height={0}
                          className="mx-auto"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* stil faq */}
      <div className="contizer2">
        <div className="flex flex-wrap sm:justify-between sm:items-center gap-4 bg-[#5bb5a2] dark:bg-[#7281a1] mb-12 md:mb-16 xl:mb-24 p-3 lg:p-4 rounded-[3px] sm:rounded-[6px] text-white faq">
          <div className="phone">
            <h3 className="lg:text-[28px] text-xl sm:text-2xl leading-[1.2] tracking-tight">
              Still have questions?
            </h3>
            <p className="text-[16px] xl:text-[18px] leading-[1.4] tracking-tight cursor-pointer">
              We are here to help.
            </p>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 phone">
            <Image
              src={phone}
              alt="phone image"
              width={0}
              height={0}
              className="w-8 sm:w-10"
            />
            <div className="phone">
              <a href="tel:+008012345678">
                <button className="text-[16px] xl:text-[18px] leading-[1.4] tracking-tight cursor-pointer">
                  +49 176 123 456
                </button>
              </a>
              <p className="text-[14px] leading-[1.6]">Support Hotline</p>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 mail">
            <Image
              src={mailing}
              alt="mailing image"
              width={0}
              height={0}
              className="w-8 sm:w-10"
            />
            <div className="phone">
              <a href="mailto:help@benquee.com">
                <button className="text-[16px] xl:text-[18px] leading-[1.4] tracking-tight cursor-pointer hotline">
                  help@benquee.com
                </button>
              </a>

              <p className="text-[14px] leading-[1.6]">Support Email</p>
            </div>
          </div>
          <button className="bg-[#1a191e] dark:bg-white/90 px-3 lg:px-4 py-2 lg:py-3 rounded-[3px] sm:rounded-[6px] w-fit h-fit text-[16px] text-white md:text-[18px] dark:text-[#1a191e] leading-[1] tracking-tight cursor-pointer">
            Chat with us
          </button>
        </div>
      </div>
    </>
  );
}
