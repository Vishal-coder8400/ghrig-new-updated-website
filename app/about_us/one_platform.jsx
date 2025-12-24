import React from "react";
import { Card_section } from "../about_us/card_section";

export default function OnePlatform() {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between py-20 max-w-7xl mx-auto px-6 gap-6">
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-black font-semibold font_family_jakarta text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight md:leading-[72px] tracking-tight">
            One Platform.
            <br />
            Infinite Possibilities.
          </h2>
        </div>

        {/* Right Paragraph */}
        <div className="w-full md:w-1/2">
          <p className="text-[#141414B2] text-[15px] sm:text-[16px] leading-relaxed font-medium font_family_display">
            Hiring is broken. Mismatched jobs, forgotten resumes, overloaded
            recruiters, unrecognized referrers — it’s chaos. GHRig was born to
            bring structure to this madness. We’re here to empower everyone in
            the hiring chain — not just companies, not just candidates. We’re
            building a network-driven hiring ecosystem where talent flows,
            decisions are fast, and every role adds value.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#EEE9FF] py-20">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-6">
          {/* Left Heading */}
          <div className="w-full md:w-1/2">
            <h2 className="text-black font-semibold font_family_jakarta text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight md:leading-[72px] tracking-tight">
              Built Around Roles.
              <br />
              Designed for Results.
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="w-full md:w-1/2">
            <p className="text-[#141414B2] text-[15px] sm:text-[16px] leading-relaxed font-medium font_family_display text-start md:text-end">
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              Labore tempor Lorem incididunt. Mollit in laborum tempor Lorem
              incididunt irure. Aute eu ex ad sunt.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10">
          <Card_section />
        </div>
      </div>
    </div>
  );
}
