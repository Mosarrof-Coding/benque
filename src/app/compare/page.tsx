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
          <div className="xl:mx-auto flex flex-col md:flex-row items-center gap-0 sm:gap-8 lg:gap-0">
            <div className="left w-full py-12 lg:py-18 xl:py-32">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Compare Cards
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] text-[#1a191e] dark:text-white leading-[1.1] tracking-tight">
                The ideal <br />
                card for you
              </h2>
            </div>
            <div className="w-full sm:pr-2 lg:pr-12 xl:pr-[100px] flex justify-center md:justify-end self-end md:pt-8">
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
          <div className="idealcard mx-auto lg:max-w-[1000px] lg:ms-auto lg:mx-px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6 lg:gap-10 xl:gap-16">
            <div className="membercard text-center">
              <h6 className="ctgry flex items-center justify-center gap-1 sm:gap-2 text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight">
                Basic
                <span className="text-[10px] lg:text-[12px] leading-[1.4] lg:leading-[1.8] px-2 rounded-[2px] lg:rounded-[4px] text-[#5bb5a2] dark:text-[#5b94b5] bg-[#e8f2ee]">
                  Popular
                </span>
              </h6>
              <div className="py-4 lg:py-6">
                <h3 className="h3 text-[24px] sm:text-[28px] lg:text-[40px] font-bold text-[#1a191e] dark:text-white/80 mb-1 lg:mb-2">
                  Free
                </h3>
                <p className="max-w-[300px] mx-auto text-[14px] leading-[1.6] text-[#1a191e80] dark:text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
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
              <div className="py-4 lg:py-6">
                <h3 className="h3 text-[24px] sm:text-[28px] lg:text-[40px] font-bold text-[#1a191e] dark:text-white/80 mb-1 lg:mb-2">
                  $5
                  <span className="ml-1 text-[10px] lg:text-[12px] font-medium leading-[1.4] lg:leading-[1.8] text-[#5bb5a2] dark:text-white/80">
                    per month
                  </span>
                </h3>
                <p className="max-w-[300px] mx-auto text-[14px] leading-[1.6] text-[#1a191e80] dark:text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
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
              <div className="py-4 lg:py-6">
                <h3 className="h3 text-[24px] sm:text-[28px] lg:text-[40px] font-bold text-[#1a191e] dark:text-white/80 mb-1 lg:mb-2">
                  $10
                  <span className="ml-1 text-[10px] lg:text-[12px] font-medium leading-[1.4] lg:leading-[1.8] text-[#5bb5a2] dark:text-white/80">
                    per month
                  </span>
                </h3>
                <p className="max-w-[300px] mx-auto text-[14px] leading-[1.6] text-[#1a191e80] dark:text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
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
          </div>
          {/* table */}
          <div className="Credit_Card flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-24">
            {/* Credit Card */}
            <article>
              <h4 className="h4 font-medium text-[18px] sm:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/80 mb-2 sm:mb-3 lg:mb-4">
                Credit Card
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge1}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Physical Card
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd1}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Virtual Card
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        -
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>Up to 2</span>
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>Unlimited</span>
                      </td>
                    </tr>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd2}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Contactless Payments
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badgeOLd3}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Mobile Payments
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
              <h4 className="h4 font-medium text-[18px] sm:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/80 mb-2 sm:mb-3 lg:mb-4">
                Bank Account
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={worldicon}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Free Payments Worldwide
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={houseicon}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Free ATM withdrawls
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        2
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>5</span>
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>10</span>
                      </td>
                    </tr>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={phoneicon}
                          alt="badgeOLd1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Mobile Banking
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
              <h4 className="h4 font-medium text-[18px] sm:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white/80 mb-2 sm:mb-3 lg:mb-4">
                Extra Features
              </h4>
              <div className="cards">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge4}
                          alt="badge1 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Saving Accounts
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge6}
                          alt="badge6 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Advanced Statistics
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        2
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>5</span>
                      </td>
                      <td className="text-center font-medium text-[14px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
                        <span>10</span>
                      </td>
                    </tr>
                    <tr className="border-t border-[#e8e8e8] dark:border-white/10 flex justify-between sm:grid grid-cols-1 sm:grid-cols-4 items-center gap-2 lg:gap-4 py-2 sm:py-4 md:py-6 lg:py-8">
                      <td className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={badge5}
                          alt="badge5 image"
                          width={0}
                          height={0}
                          className="max-w-[24px] sm:max-w-[30px] lg:max-w-full"
                        />
                        <div>
                          <h5 className="font-medium text-[16px] sm:text-[18px] text-[#1a191e] dark:text-white/80">
                            Premium Parnter Offers
                          </h5>
                          <span className="font-medium text-[14px] text-[#1a191e80] dark:text-white/80">
                            Diam in arcu cursus euismod
                          </span>
                        </div>
                      </td>
                      <td className="text-center font-medium text-[15px] lg:text-[16px] text-[#1a191e] dark:text-white/80">
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
        <div className="faq bg-[#5bb5a2] dark:bg-[#7281a1] rounded-[3px] sm:rounded-[6px] text-white flex sm:justify-between sm:items-center flex-wrap gap-4 p-3 lg:p-4 mb-12 md:mb-16 xl:mb-24">
          <div className="phone">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] leading-[1.2] tracking-tight">
              Still have questions?
            </h3>
            <p className="text-[16px] xl:text-[18px] leading-[1.4] tracking-tight cursor-pointer">
              We are here to help.
            </p>
          </div>
          <div className="phone flex items-center gap-3 lg:gap-6">
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
          <div className="mail flex items-center gap-3 lg:gap-6">
            <Image
              src={mailing}
              alt="mailing image"
              width={0}
              height={0}
              className="w-8 sm:w-10"
            />
            <div className="phone">
              <a href="mailto:help@benquee.com">
                <button className="hotline text-[16px] xl:text-[18px] leading-[1.4] tracking-tight cursor-pointer">
                  help@benquee.com
                </button>
              </a>

              <p className="text-[14px] leading-[1.6]">Support Email</p>
            </div>
          </div>
          <button className="w-fit h-fit text-[16px] md:text-[18px] leading-[1] tracking-tight bg-[#1a191e] text-white dark:bg-white/90 dark:text-[#1a191e] cursor-pointer py-2 lg:py-3 px-3 lg:px-4 rounded-[3px] sm:rounded-[6px]">
            Chat with us
          </button>
        </div>
      </div>
    </>
  );
}
