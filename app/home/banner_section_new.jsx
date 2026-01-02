import React from "react";
import Link from "next/link";

export default function BannerSection() {
  return (
    <>
      {/* ================= DESKTOP SECTION ================= */}
      <section className="w-full overflow-hidden">
   <div className="hero-wrapper relative min-h-screen pt-[88px] hidden md:block">


        
        {/* HEADING */}
        {/*
        <div className="flex justify-center">
          <div className="flex justify-center items-center pt-[140px]">
            <h1
              className="text-white text-center font_family_jakarta 
                         text-[68px] leading-[72px] font-semibold"
            >
              The Online Recruitment
              <br /> Marketplace
            </h1>
          </div>
        </div>
        */}

        {/* LEFT TOP CARD (TRAINERS) */}
        <div
          className="absolute top-[22%] left-[4%] w-[15%] h-[32%] cursor-pointer"
          id="trainerCard"
        />

        {/* LEFT BOTTOM CARD (JOB SEEKERS) */}
        <div
          className="absolute top-[39%] left-[20%] w-[18%] h-[34%] cursor-pointer"
          id="jobCard"
        />

        {/* MIDDLE CARD (CORPORATE) */}
        <div
          className="absolute top-[39%] left-[42%] w-[18%] h-[34%] cursor-pointer"
          id="corporateCard"
        />

        {/* RIGHT BOTTOM CARD (RECRUITERS) */}
        <div
          className="absolute top-[39%] left-[64%] w-[18%] h-[34%] cursor-pointer"
          id="recruiterCard"
        />

        {/* RIGHT TOP CARD (REFERRERS) */}
        <div
          className="absolute top-[22%] right-[4%] w-[15%] h-[32%] cursor-pointer"
          id="referrerCard"
        />

        {/* CENTER LOGO */}
        <Link href="#">
          <div
            className="absolute top-[29%] left-[45.5%] w-[9%] h-[9%] cursor-pointer"
            id="logoCard"
          />
        </Link>
      </div>
      </section>

      {/* ================= MOBILE SECTION ================= */}
      <div className="hero-wrapper-mobile relative block md:hidden">
        {/* <div className="flex justify-center">
          <div className="flex justify-center items-start pb-10 mt-10">
            <h1
              className="text-white text-center font_family_jakarta
                         text-[42px] leading-[52px] font-semibold"
            >
              The Online Recruitment
              <br /> Marketplace
            </h1>
          </div>
        </div> */}

        {/* MOBILE CARD POSITIONS */}
        <div className="absolute w-[32%] top-[68%] left-[8%]" id="m1" />
        <div className="absolute w-[32%] top-[68%] left-[36%]" id="m2" />
        <div className="absolute w-[32%] top-[68%] left-[64%]" id="m3" />
        <div className="absolute w-[32%] top-[36%] left-[50%]" id="m4" />
        <div className="absolute w-[32%] top-[36%] left-[15%]" id="m5" />
      </div>
    </>
  );
}
