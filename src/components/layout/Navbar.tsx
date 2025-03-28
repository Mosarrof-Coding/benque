"use client";
import { ChevronDown, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Features", href: "/" },
    {
      name: "Compare",
      href: "/compare",
      icon: <ChevronDown strokeWidth={2.25} className="w-4 lg:w-5" />,
    },
    { name: "Support", href: "/support" },
    {
      name: "Blogs",
      href: "/Blogs",
      icon: <ChevronDown strokeWidth={2.25} className="w-4 lg:w-5" />,
    },
  ];

  return (
    <div className="bg-[#fff] dark:bg-[#2d2d2d] border-b py-2 lg:py-4">
      <div className="contizer cont-px">
        <nav className="navmain flex items-center justify-between">
          <Link
            href="/"
            className="logo text-2xl lg:text-3xl font-bold text-[#5BB5A2] dark:text-[#d2fff5]"
          >
            banquee
          </Link>
          <div className="hidden lg:flex gap-3 lg:gap-6">
            {navItems.map((item, i) => (
              <div
                className="flex items-center gap-2 sm:gap-3 lg:gap-4"
                key={i}
              >
                <Link href={item.href} className="navlist">
                  {item.name}
                  {item.icon && item.icon}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
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
        </nav>
      </div>
    </div>
  );
}
