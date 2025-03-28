import { RotateCcw } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h4 min-h-[91vh] grid place-items-center text-lg lg:text-xl text-[#ea0707] text-center">
      <div className="contizer">
        <p className=" flex items-center mb-1 sm:mb-2 lg:mb-3">
          Page not Found ☹ ! 404.
        </p>
        <Link
          href="/"
          className="text-xl lg:text-2xl text-[#1a191e] dark:text-white w-fit mx-auto flex gap-1 items-center"
        >
          <RotateCcw />
          Home
        </Link>
      </div>
    </div>
  );
}
