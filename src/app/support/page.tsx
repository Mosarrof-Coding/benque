import Image from "next/image";
import React from "react";
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
  return (
    <>
      {/* Compare hero */}
      <div className="bg-[#e8f2ee] dark:bg-gray-600">
        <div className="contizer">
          <div className="xl:mx-auto flex flex-col md:flex-row items-center gap-2 sm:gap-8 lg:gap-12">
            <div className="left w-full py-12 lg:py-18 xl:py-32">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-2 lg:mb-4">
                Support
              </h5>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-[80px] text-[#1a191e] dark:text-white leading-[1.1] tracking-tight">
                How can
                <br />
                we help you?
              </h2>
            </div>
            <div className="w-full lg:pl-12 xl:pl-[113px] flex justify-center lg:justify-start self-end">
              <div className="w-fit">
                <Image
                  src={support}
                  alt="support image"
                  // layout="intrinsic"
                  width={0}
                  height={0}
                  className="max-w-[260px] lg:max-w-[320px] xl:max-w-full sm:mt-2 xl:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stil faq */}
      <div className="contizer2">
        <div className="faq bg-[#5bb5a2] dark:bg-[#7281a1] rounded-[3px] sm:rounded-[6px] text-white flex sm:justify-between sm:items-center flex-wrap gap-8 p-3 lg:p-4 my-12 md:my-16 xl:my-24">
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
      {/* support category */}
      <div className="supportMai">
        <div className="contizer2">
          <div className="supportparent flex flex-col md:flex-row gap-12 lg:gap-24 xl:gap-32">
            <div className="supcategoris w-full sm:max-w-[280px] shrink-2 h-fit rounded-[6px] lg:rounded-[10px] bg-[#f8f8f8] dark:bg-white/10 dark:text-white/80 p-[18px_0_18px_18px] lg:p-[24px_0_24px_24px] xl:p-[32px_0_32px_32px]">
              <h6 className="text-[16px] sm:text-[18px] leading-[1.4] tracking-tight text-[#1a191e] dark:text-white/90 mb-8">
                Categories
              </h6>
              <div className="supportitems text-[14px] sm:text-[16px] leading-[1.6] text-[#1a191e80] dark:text-white/80 flex flex-col gap-4">
                <p className="cursor-pointer">Cards</p>
                <p className="cursor-pointer">Account</p>
                <p className="cursor-pointer">Personal Details</p>
              </div>
            </div>
            <div className="w-full sm:max-w-[920px] shrink-1 flex flex-col gap-16 sm:gap-20 lg:gap-26 xl:gap-32">
              {/* cards */}
              <div className="cards w-full">
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
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
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white mb-2 lg:mb-4 cursor-pointer">
                        How to setup my card?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How do I create a virtual card?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How to order an extra card?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        My card will exprise soon. What to do?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Dui accumsan sit amet nulla facilisi
                        morbi. Eget gravida cum sociis natoque penatibus et
                        magnis dis parturient.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How do I freeze my card?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        eiusmod temp natoque penatibus et magnis dis parturient.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              {/* Account */}
              <div className="cards w-full">
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
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
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white mb-2 lg:mb-4 cursor-pointer">
                        How do I verify my account?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-17" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How to upgrade my account?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-18" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        Can I have multiple accounts?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-19" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How do I cancel my account?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Dui accumsan sit amet nulla facilisi
                        morbi. Eget gravida cum sociis natoque penatibus et
                        magnis dis parturient.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              {/* Personal Details */}
              <div className="cards w-full">
                <h4 className="h4 text-[18px] sm:text-[24px] lg:text-[28px] text-[#1a191e] dark:text-white leading-[1] lg:leading-[1.2] tracking-tight flex items-center gap-2 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
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
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white mb-2 lg:mb-4 cursor-pointer">
                        How do I change my account address?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-21" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How to close my account?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-22" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        Where do I find my tax ID?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum fuga laboriosam voluptatem quidem, at esse quas
                        corporis hic dolorum animi?
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-23" className="">
                      <AccordionTrigger className="accrodionBtn text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.2] tracking-tight text-[#1a191e] dark:text-white my-2 lg:my-4 cursor-pointer">
                        How can I download my bank documents?
                      </AccordionTrigger>
                      <AccordionContent className="text-[14px] sm:text-[16px] leading-[1.2] lg:leading-[1.6] text-[#1a191e80] dark:text-white/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Dui accumsan sit amet nulla facilisi
                        morbi. Eget gravida cum sociis natoque penatibus et
                        magnis dis parturient.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
