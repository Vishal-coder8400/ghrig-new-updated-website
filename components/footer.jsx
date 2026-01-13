import React from "react";
import Link from "next/link";
import { FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

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
                      className="font-normal text-[#1a1819] hover:underline"
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
                {["Blogs", "FAQs", "Testimonials", "Sitemap"].map((item) => (
                  <li key={item} className="self-stretch">
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="font-normal text-[#1a1819] hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
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
                <div className="flex gap-4 text-[#1a1819]">
                   {/* LinkedIn */}
  <FiLinkedin
    size={20}
    className="text-[#1a1819] transition-colors duration-300 hover:text-[#0A66C2]"
  />

  {/* Instagram */}
  <FiInstagram
    size={20}
    className="text-[#1a1819] transition-colors duration-300 hover:text-[#E1306C]"
  />

  {/* Twitter / X */}
  <FiTwitter
    size={20}
    className="text-[#1a1819] transition-colors duration-300 hover:text-[#1DA1F2]"
  />

  {/* Facebook */}
  <FiFacebook
    size={20}
    className="text-[#1a1819] transition-colors duration-300 hover:text-[#1877F2]"
  />
                </div>
              </div>

              {/* <div className="font-medium text-[#1a1819]">Logo</div> */}

              <div className="text-xs lg:text-sm text-[#1a1819]/80">
                gHRig People Solutions - Copyright 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full px-4 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
         <h2 className="text-white text-3xl lg:text-4xl font-semibold leading-tight max-w-xl">
  If you didn’t find the jobs you are interested in or have questions?
</h2>

        </div>
      </div>

      {/* BOTTOM BAR */}
   {/* BOTTOM BAR */}
<div className="w-full pb-6">
  <div className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center gap-4 text-white/60 text-xs">

    {/* LOGO */}
    <Link href="/" className="flex items-center">
      <div
        className="px-2.5 py-1.5 rounded-full"
        style={{
          backgroundColor: "#F6F1EF",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <img
          src="/assets/images/logo.png"
          alt="gHRig People Solutions Logo"
          width={85}
          height={45}
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>

    {/* COPYRIGHT */}
    <p>© 2025 gHRig People Solutions – All rights reserved.</p>

  </div>
</div>

    </footer>
  );
}
