import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="dark:bg-white/2 pb-8 xl:pb-12 border-[#e8e8e8] dark:border-white/10 border-t font-geist-mono">
      <nav className="mx-auto px-4 py-12 lg:py-16 xl:py-24 border-[#e8e8e8] dark:border-white/10 border-b max-w-[832px] lg:max-w-[1032px] 2xl:max-w-[1432px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <Link
              href={"/"}
              className="font-bold text-[#5bb5a2] :text-[36px] lg:text-[28px] text-2xl logo"
            >
              banquee.
            </Link>
          </div>
          <div className="flex flex-wrap justify-between gap-8 col-span-12 md:col-span-9 lg:col-span-8 pt-4">
            <div>
              <h4 className="mb-5 lg:mb-7 font-semibold text-[#1A191E] text-[18px] lg:text-[20px] dark:text-white/90 leading-[1.4] tracking-[-0.03em]">
                About
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/about"
                    className="min-w-fit font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="min-w-fit font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="min-w-fit font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog Section */}
            <div>
              <h4 className="mb-5 lg:mb-7 font-semibold text-[#1A191E] text-[18px] lg:text-[20px] dark:text-white/90 leading-[1.4] tracking-[-0.03em]">
                Blog
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/blog/products"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/technology"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/crypto"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Crypto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Webflow Section */}
            <div>
              <h4 className="mb-5 lg:mb-7 font-semibold text-[#1A191E] text-[18px] lg:text-[20px] dark:text-white/90 leading-[1.4] tracking-[-0.03em]">
                Webflow
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/webflow/styleguide"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Styleguide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webflow/licensing"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webflow/changelog"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="mb-5 lg:mb-7 font-semibold text-[#1A191E] text-[18px] lg:text-[20px] dark:text-white/90 leading-[1.4] tracking-[-0.03em]">
                Social Media
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1a191e70] text-[16px] hover:text-[#1A191E90] dark:hover:text-white/80 dark:text-white/60 leading-[1.6] transision-all"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto px-4 pt-4 max-w-[832px] lg:max-w-[1032px] xl:max-w-[1432px] copyright">
        <div className="flex sm:flex-row flex-col flex-wrap justify-between gap-2 powerd">
          <p className="font-medium text-[#1a191e80] text-[12px] sm:text-[14px] dark:text-white leading-[1.6]">
            © Made by{" "}
            <span className="text-[#5bb5a2]">
              <a
                href="http://www.w3c.com"
                target="_blunk"
                rel="noopener noreferrer"
              >
                Pawel Gola{" "}
              </a>
            </span>
            - Powered by{" "}
            <span className="text-[#5bb5a2]">
              <a
                href="http://www.w3c.com"
                target="_blunk"
                rel="noopener noreferrer"
              >
                Webflow
              </a>
            </span>
          </p>
          <ul className="flex gap-4 lg:gap-8 font-medium text-[#1a191e80] text-[10px] sm:text-[14px] dark:text-white leading-[1.6]">
            <li className="cursor-pointer">Impressum</li>
            <li className="cursor-pointer">Mission</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
