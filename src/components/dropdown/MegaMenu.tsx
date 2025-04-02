"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import blogmenu1 from "../../../public/blogmenu1.png";
import blogmenu2 from "../../../public/blogmenu2.png";
import blogmenu3 from "../../../public/blogmenu3.png";
import blogmenu4 from "../../../public/blogmenu4.png";
import Link from "next/link";

export default function MegaMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center data-[state=open]:bg-[#ffffff32] hover:bg-[#eee] dark:hover:bg-[#ffffff32] cursor-pointer"
        >
          Blogs <ChevronDown strokeWidth={2.25} className="w-4 lg:w-5 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 w-[100vw] py-8 bg-[#f8f8f8] dark:bg-gray-500 shadow-lg hidden lg:block rounded-none">
        <div className="contizer">
          <div className="mymenu w-full flex">
            <div className="min-w-[280px]">
              <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-6 xl:mb-8">
                Categorys
              </h5>
              <div className="flex justify-items-start flex-col gap-4">
                <Link
                  href="/Blogs"
                  className="w-fit cursor-pointer hover:text-[#1a191e90] transition text-[16px] text-[#1a191e80] dark:text-white/80 leading-[1.6]"
                >
                  Products
                </Link>
                <button className="w-fit cursor-pointer hover:text-[#1a191e90] transition text-[16px] text-[#1a191e80] dark:text-white/80 leading-[1.6]">
                  Technology
                </button>
                <button className="w-fit cursor-pointer hover:text-[#1a191e90] transition text-[16px] text-[#1a191e80] dark:text-white/80 leading-[1.6]">
                  Crypto
                </button>
              </div>
              {/* button */}
              <div className="right w-fit mt-8">
                <button className="ctabtn rounded-[3px] lg:rounded-[6px] text-[16px] lg:text-[18px] text-[#5bb5a2] tracking-tight">
                  <span className="cursor-pointer inline-flex items-center gap-1 lg:gap-2">
                    All Articles
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
            <div className="w-full">
              <h4 className="text-[18px] lg:text-[20px] text-[#1a191e] dark:text-white/80 leading-[1.2] tracking-tight mb-6 xl:mb-8">
                All Articles
              </h4>
              <div className="grid grid-cols-2 gap-8 ">
                {/* card-1 */}
                <div className="card1">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-[10px] flex items-center gap-6 mb-2">
                    <div className="max-w-[90px]">
                      <Image
                        src={blogmenu1}
                        alt="blog image"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="h-fit">
                      <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-1">
                        How to design a product that can grow itself 10x in year
                      </h5>
                      <p className="text-[14px] text-[#1a191e80] dark:text-white/90 leading-[1.6]">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-[10px] flex items-center gap-6">
                    <div className="max-w-[90px]">
                      <Image
                        src={blogmenu2}
                        alt="blog image"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="h-fit">
                      <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-1">
                        Eget gravida cum sociis natoque
                      </h5>
                      <p className="text-[14px] text-[#1a191e80] dark:text-white/90 leading-[1.6]">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>
                </div>
                {/* card-2 */}
                <div className="card-2">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-[10px] flex items-center gap-6 mb-2">
                    <div className="max-w-[90px]">
                      <Image
                        src={blogmenu3}
                        alt="blog image"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="h-fit">
                      <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-1">
                        Eget gravida cum sociis natoque
                      </h5>
                      <p className="text-[14px] text-[#1a191e80] dark:text-white/90 leading-[1.6]">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-[10px] flex items-center gap-6">
                    <div className="max-w-[90px]">
                      <Image
                        src={blogmenu4}
                        alt="blog image"
                        width={0}
                        height={0}
                      />
                    </div>
                    <div className="h-fit">
                      <h5 className="text-[18px] sm:font-[20px] text-[#1a191e] dark:text-white/90 leading-[1.2] tracking-tight mb-1">
                        Eget gravida cum sociis natoque
                      </h5>
                      <p className="text-[14px] text-[#1a191e80] dark:text-white/90 leading-[1.6]">
                        Lorem ipsum dolor sit amet, consectetur...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
