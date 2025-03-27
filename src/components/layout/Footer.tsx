import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="pb-8 xl:pb-12 font-geist-mono border-t border-[#e8e8e8] dark:border-white/10 dark:bg-white/2">
      <nav className="max-w-[832px] lg:max-w-[1032px] 2xl:max-w-[1432px] px-4 mx-auto py-12 lg:py-16 xl:py-24 border-b border-[#e8e8e8] dark:border-white/10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <Link
              href={"/"}
              className="logo text-[#5bb5a2] text-2xl lg:text-[28px] :text-[36px] font-bold "
            >
              banquee.
            </Link>
          </div>
          <div className="flex justify-between gap-8 flex-wrap pt-4 col-span-12 md:col-span-9 lg:col-span-8">
            <div>
              <h4 className="font-semibold text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] dark:text-white/90 mb-5 lg:mb-7">
                About
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/about"
                    className="min-w-fit font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="min-w-fit font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="min-w-fit font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog Section */}
            <div>
              <h4 className="font-semibold text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] dark:text-white/90 mb-5 lg:mb-7">
                Blog
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/blog/products"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/technology"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/crypto"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Crypto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Webflow Section */}
            <div>
              <h4 className="font-semibold text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] dark:text-white/90 mb-5 lg:mb-7">
                Webflow
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="/webflow/styleguide"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Styleguide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webflow/licensing"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webflow/changelog"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h4 className="font-semibold text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.03em] text-[#1A191E] dark:text-white/90 mb-5 lg:mb-7">
                Social Media
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[16px] leading-[1.6] text-[#1a191e70] dark:text-white/60 dark:hover:text-white/80 transision-all hover:text-[#1A191E90]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="copyright pt-4 max-w-[832px] lg:max-w-[1032px] xl:max-w-[1432px] px-4 mx-auto">
        <div className="powerd flex flex-col sm:flex-row justify-between flex-wrap gap-2">
          <p className="text-[14px] font-medium leading-[1.6] text-[#1a191e80] dark:text-white">
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
          <ul className="text-[14px] font-medium leading-[1.6] text-[#1a191e80] flex gap-4 lg:gap-8 dark:text-white">
            <li className="cursor-pointer">Impressum</li>
            <li className="cursor-pointer">Mission</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
