import React from "react";
import Link from "next/link";
import { FiLinkedin, FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative mx-auto px-4 sm:px-10"
      style={{
        background: `
          linear-gradient(
            180deg,
            #7B2F4E 0%,
            #6F365F 32%,
            #5F3F73 68%,
            #4B3E6D 100%
          )
        `,
      }}
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-12 pt-10 lg:pt-14 pb-10">
        {/* TOP CARD */}
        <div
          className="flex flex-col lg:flex-row items-start gap-6 lg:gap-24 px-6 lg:px-12 py-8 lg:py-10 self-stretch w-full rounded-2xl "
          style={{ backgroundColor: "#F8F3F1" }}
        >
          {/* Logo Section (UNCHANGED) */}
          <div className="flex items-center gap-2 invert">
            {/* Your logo */}
          </div>

          {/* COMPANY */}
          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
                COMPANY
              </h3>
              <ul className="flex flex-col items-start gap-2 self-stretch w-full text-sm lg:text-base">
                {[
                  "Home",
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Disclaimer",
                  "Career",
                ].map((item) => (
                  <li key={item} className="self-stretch">
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Terms & Conditions"
                          ? "/terms-and-conditions"
                          : item === "Privacy Policy"
                          ? "/privacy-policy"
                          : item === "Disclaimer"
                          ? "/disclaimer"
                          : "/career"
                      }
                      className="font-normal  font-semibold  text-[#1a1819] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* MORE */}
          <div className="flex w-full lg:w-[442px] items-start gap-4">
            <nav className="flex flex-col items-start gap-4 lg:gap-6 flex-1">
              <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
                MORE
              </h3>
           <ul className="flex flex-col items-start gap-2 self-stretch w-full text-sm lg:text-base">
  {["Blogs", "FAQs", "Testimonials"].map((item) => {
    const href =
      item === "Testimonials"
        ? "/#testimonials"
        : `/${item.toLowerCase()}`;

    return (
      <li key={item} className="self-stretch">
        <Link
          href={href}
          className="font-normal text-[#1a1819] font-semibold hover:underline"
        >
          {item}
        </Link>
      </li>
    );
  })}
</ul>

            </nav>
          </div>

          {/* FOLLOW */}
          <div className="flex-1 flex flex-col items-start gap-5">
            <h3 className="font-bold text-[#1a1819] text-sm lg:text-base tracking-wider uppercase">
              FOLLOW
            </h3>

            <div className="flex flex-col gap-5 text-sm lg:text-base">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/company/ghrig-people-solutions/"
    target="_blank"
    className="p-2 rounded-full transition-all duration-300 hover:bg-[#0A66C2]"
  >
    <FiLinkedin
      size={20}
      className="text-[#0A66C2] hover:text-white"
    />
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/ghrig.people.solutions/"
    target="_blank"
    className="p-2 rounded-full transition-all duration-300 hover:bg-[#E1306C]"
  >
    <FiInstagram
      size={20}
      className="text-[#E1306C] hover:text-white"
    />
  </Link>

  {/* Twitter / X */}
  <Link
    href="https://x.com/ghrigsolution"
    target="_blank"
    className="p-2 rounded-full transition-all duration-300 hover:bg-[#1DA1F2]"
  >
    <FiTwitter
      size={20}
      className="text-[#1DA1F2] hover:text-white"
    />
  </Link>

  {/* Facebook */}
  <Link
    href="https://www.facebook.com/people/gHRig-People-Solutions/61573131050969/"
    target="_blank"
    className="p-2 rounded-full transition-all duration-300 hover:bg-[#1877F2]"
  >
    <FiFacebook
      size={20}
      className="text-[#1877F2] hover:text-white"
    />
  </Link>

  {/* YouTube */}
  <Link
    href="https://www.youtube.com/@ghrig-people.solutions"
    target="_blank"
    className="p-2 rounded-full transition-all duration-300 hover:bg-[#FF0000]"
  >
    <FiYoutube
      size={20}
      className="text-[#FF0000] hover:text-white"
    />
  </Link>
</div>

              </div>

              {/* <div className="font-medium text-[#1a1819]">Logo</div> */}

            
              <div className="text-xs lg:text-sm font-semibold  bg-gradient-to-r
            from-[#8E2C6D]
            via-[#7A3FA2]
            to-[#4B4DB5]
            bg-clip-text
            text-transparent">
               connect@ghrig.com
              </div>
              <div className="text-xs lg:text-sm font-semibold text-[#1a1819]/80">
                gHRig People Solutions - Copyright 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full px-4 lg:px-10 py-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* <h2 className="text-white text-2xl lg:text-3xl font-semibold leading-[1.2] max-w-xl">

  If you didn’t find the jobs you are interested in or have questions?
</h2> */}

        </div>
      </div>

      {/* BOTTOM BAR */}
   {/* BOTTOM BAR */}
<div className="w-full pb-6">
  <div className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center gap-4 text-white/60 text-xs">

    {/* LOGO */}
  

    {/* COPYRIGHT */}
    <div className="w-full text-center text-xs lg:text-sm font-semibold text-white/80">
  © 2026 gHRig People Solutions – All rights reserved
</div>


  </div>
</div>

    </footer>
  );
}
