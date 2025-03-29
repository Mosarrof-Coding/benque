"use client";
import { AlignJustify, ChevronDown, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import MegaMenu from "../dropdown/MegaMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navItems = [
    { name: "Features", href: "/features" },
    {
      name: "Compare",
      href: "/compare",
      icon: <ChevronDown strokeWidth={2.25} className="w-4 lg:w-5" />,
    },
    { name: "Support", href: "/support" },
    {
      name: "Blogs",
      href: "/Blogs",
      className: "cursor-pointer",
      hasDropdown: true, // Flag to indicate a dropdown
      icon: <ChevronDown strokeWidth={2.25} className="w-4 lg:w-5" />,
    },
  ];

  return (
    <div className="bg-[#fff] dark:bg-[#2d2d2d] border-b border-[#1a191e08] py-2 lg:py-4">
      <div className="contizer cont-px">
        <nav className="navmain flex items-center justify-between">
          <Link
            href="/"
            className="logo text-2xl lg:text-3xl font-bold text-[#5BB5A2] dark:text-[#d2fff5] mr-4"
          >
            banquee
          </Link>
          <div className="hidden lg:flex gap-3 lg:gap-6">
            {navItems.map((item, i) => (
              <div
                className="flex items-center gap-1 sm:gap-2 lg:gap-4"
                key={i}
              >
                {item.hasDropdown ? (
                  <MegaMenu />
                ) : (
                  <Link
                    href={item.href}
                    className={`py-1.5 px-2 lg:p-[8px_8px_8px_12px] hover:bg-[#eee] dark:hover:bg-[#ffffff32] text-[#1a191e] dark:text-white rounded-[3px] lg:rounded-[6px] flex items-center gap-1 sm:gap-2 ${
                      pathName === item.href ? "bg-[#eee]" : ""
                    }`}
                  >
                    {item.name}
                    {item.icon && item.icon}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2 lg:gap-4">
            <div className="resister flex items-center gap-2 lg:gap-4">
              <div
                className="dark-light cursor-pointer w-6 lg:w-7 aspect-square grid place-items-center rounded-full"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <MoonIcon className="w-4 lg:w-5" />
                ) : (
                  <SunIcon className="w-4 lg:w-5" color="#fff" />
                )}
              </div>
              <button className="text-base sm:text-lg lg:text-xl font-bold text-[#5BB5A2] dark:text-[#d2fff5] cursor-pointer">
                Login
              </button>

              <Link
                href="/Account"
                className="cursor-pointer bg-[#5bb5a2] py-1 sm:py-2 lg:py-3 px-2 sm:px-3 lg:px-4 text-[13px] sm:text-[15px] text-white rounded-[3px] lg:rounded-[6px]"
              >
                Open Account
              </Link>
            </div>
          </div>

          {/* mobilemenu */}
          <div className="mobilemenu flex items-center gap-2 lg:hidden">
            <div
              className="dark-light cursor-pointer w-6 lg:w-7 aspect-square grid place-items-center rounded-full"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <MoonIcon className="w-4 lg:w-5" />
              ) : (
                <SunIcon className="w-4 lg:w-5" color="#fff" />
              )}
            </div>

            {/* Menu Toggle Button */}
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
            >
              <AlignJustify strokeWidth={1.75} absoluteStrokeWidth />
            </div>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
              <div className="fixed left-0 top-0 right-0 h-screen bg-white z-50">
                <button
                  className="w-full py-2 sm:py-3 bg-[#1a191e] text-white text-left text-xl sm:text-2xl pl-8 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Back
                </button>
                <div className="flex flex-col">
                  {navItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-sm sm:text-[16px] py-2 hover:bg-gray-600 text-[#1a191e] hover:text-white flex items-center transition-all pl-12"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      {item.icon && item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
