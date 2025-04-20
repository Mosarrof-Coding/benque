"use client";
import Image from "next/image";
import React, { useState } from "react";
import support from "../../../public/support.png";
import phone from "../../../public/phone.png";
import mailing from "../../../public/mailing.png";
import secure from "../../../public/secure.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Support() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* Compare hero */}
      <div className="bg-[#e8f2ee] dark:bg-gray-600">
        <div className="contizer">
          <div className="flex md:flex-row flex-col items-center gap-2 sm:gap-8 lg:gap-12 xl:mx-auto">
            <div className="left py-12 lg:py-18 xl:py-32 w-full">
              <h5 className="mb-2 lg:mb-4 sm:font-[20px] text-[#1a191e] text-[18px] dark:text-white/90 leading-[1.2] tracking-tight">
                Support
              </h5>
              <h2 className="text-[#1a191e] xl:text-[80px] dark:text-white text-3xl sm:text-4xl lg:text-6xl leading-[1.1] tracking-tight">
                How can
                <br />
                we help you?
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start self-end lg:pl-12 xl:pl-[113px] w-full">
              <div className="w-fit">
                <Image
                  src={support}
                  alt="support image"
                  // layout="intrinsic"
                  width={0}
                  height={0}
                  className="sm:mt-2 xl:mt-0 max-w-[260px] lg:max-w-[320px] xl:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stil faq */}
      <div className="contizer2">
        <div className="flex flex-wrap sm:justify-between sm:items-center gap-8 bg-[#5bb5a2] dark:bg-[#7281a1] my-12 md:my-16 xl:my-24 p-3 lg:p-4 rounded-[3px] sm:rounded-[6px] text-white faq">
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
      {/* support category */}
      <div className="supportMai">
        <div className="contizer2">
          <div className="flex md:flex-row flex-col gap-12 lg:gap-24 xl:gap-32 pb-12 lg:pb-24 xl:pb-32 supportparent">
            <div className="bg-[#f8f8f8] dark:bg-white/10 p-[18px_0_18px_18px] lg:p-[24px_0_24px_24px] xl:p-[32px_0_32px_32px] rounded-[6px] lg:rounded-[10px] w-full sm:max-w-[280px] h-fit dark:text-white/80 supcategoris shrink-2">
              <h6 className="mb-8 text-[#1a191e] text-[16px] sm:text-[18px] dark:text-white/90 leading-[1.4] tracking-tight">
                Categories
              </h6>
              {/* button */}
              <div className="flex flex-col items-start gap-2 lg:gap-4 text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/80 leading-[1.6] supportitems">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`cursor-pointer ${
                    activeTab === 1 ? "text-[#5bb5a2]" : ""
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`cursor-pointer ${
                    activeTab === 2 ? "text-[#5bb5a2]" : ""
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`cursor-pointer ${
                    activeTab === 3 ? "text-[#5bb5a2]" : ""
                  }`}
                >
                  Personal Details
                </button>
              </div>
            </div>
            {/* accrodion */}
            <div className="flex flex-col gap-16 sm:gap-20 lg:gap-26 xl:gap-32 w-full sm:max-w-[920px] shrink-1">
              {/* cards */}
              {activeTab === 1 && (
                <div className="w-full cards">
                  <h4 className="flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16 text-[#1a191e] text-[18px] sm:text-[24px] lg:text-[28px] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight h4">
                    <span>
                      <Image
                        src={secure}
                        alt="secure Iamge"
                        width={0}
                        height={0}
                        className=""
                      />
                    </span>
                    Cards
                  </h4>
                  {/* shad Accrodion */}
                  <div className="col-span-12 md:col-span-8 lg:col-span-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-11" className="">
                        <AccordionTrigger className="mb-2 lg:mb-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How to setup my card?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-12" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How do I create a virtual card?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-13" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How to order an extra card?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-14" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          My card will exprise soon. What to do?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Dui accumsan sit amet nulla
                          facilisi morbi. Eget gravida cum sociis natoque
                          penatibus et magnis dis parturient.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-15" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How do I freeze my card?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, eiusmod temp natoque penatibus et magnis dis
                          parturient.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              )}
              {/* Account */}
              {activeTab === 2 && (
                <div className="w-full cards">
                  <h4 className="flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16 text-[#1a191e] text-[18px] sm:text-[24px] lg:text-[28px] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight h4">
                    <span>
                      <Image
                        src={secure}
                        alt="secure Iamge"
                        width={0}
                        height={0}
                        className=""
                      />
                    </span>
                    Account
                  </h4>
                  {/* shad Accrodion */}
                  <div className="col-span-12 md:col-span-8 lg:col-span-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-16" className="">
                        <AccordionTrigger className="mb-2 lg:mb-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How do I verify my account?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-17" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How to upgrade my account?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-18" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          Can I have multiple accounts?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-19" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How do I cancel my account?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Dui accumsan sit amet nulla
                          facilisi morbi. Eget gravida cum sociis natoque
                          penatibus et magnis dis parturient.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              )}
              {/* Personal Details */}
              {activeTab === 3 && (
                <div className="w-full cards">
                  <h4 className="flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16 text-[#1a191e] text-[18px] sm:text-[24px] lg:text-[28px] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight h4">
                    <span>
                      <Image
                        src={secure}
                        alt="secure Iamge"
                        width={0}
                        height={0}
                        className=""
                      />
                    </span>
                    Personal Details
                  </h4>
                  {/* shad Accrodion */}
                  <div className="col-span-12 md:col-span-8 lg:col-span-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-20" className="">
                        <AccordionTrigger className="mb-2 lg:mb-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How do I change my account address?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-21" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How to close my account?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-22" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          Where do I find my tax ID?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum fuga laboriosam voluptatem quidem, at esse
                          quas corporis hic dolorum animi?
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-23" className="">
                        <AccordionTrigger className="my-2 lg:my-4 text-[#1a191e] text-[16px] sm:text-[18px] lg:text-[20px] dark:text-white leading-[1.2] tracking-tight cursor-pointer accrodionBtn">
                          How can I download my bank documents?
                        </AccordionTrigger>
                        <AccordionContent className="text-[#1a191e80] text-[14px] sm:text-[16px] dark:text-white/60 leading-[1.2] lg:leading-[1.6]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Dui accumsan sit amet nulla
                          facilisi morbi. Eget gravida cum sociis natoque
                          penatibus et magnis dis parturient.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
