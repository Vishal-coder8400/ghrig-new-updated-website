import React from "react";
import Link from "next/link";

export default function BannerSection() {
  return (
    <>
      {/* ================= DESKTOP SECTION ================= */}
      <section className="w-full overflow-hidden">
        <div className="hero-wrapper relative min-h-screen pt-[88px] hidden md:block">

          {/* TRAINER → COMING SOON */}
          <Link href="/coming-soon">
            <div
              className="absolute top-[22%] left-[4%] w-[15%] h-[32%] cursor-pointer z-20 pointer-events-auto"
              id="trainerCard"
            />
          </Link>

          {/* JOB SEEKER → COMING SOON */}
          <Link href="https://job-portal-2026-69gm.vercel.app/recruiter/log-in">
            <div
              className="absolute top-[39%] left-[20%] w-[18%] h-[34%] cursor-pointer z-20 pointer-events-auto"
              id="jobCard"
            />
          </Link>

          {/* CORPORATE → LOGIN */}
          <Link href="https://job-portal-2026-69gm.vercel.app/corporate/log-in">
            <div
              className="absolute top-[39%] left-[42%] w-[18%] h-[34%] cursor-pointer z-20 pointer-events-auto"
              id="corporateCard"
            />
          </Link>

          {/* RECRUITER → LOGIN */}
          <Link href="/coming-soon">
            <div
              className="absolute top-[39%] left-[64%] w-[18%] h-[34%] cursor-pointer z-20 pointer-events-auto"
              id="recruiterCard"
            />
          </Link>

          {/* REFERRER → COMING SOON */}
          <Link href="/coming-soon">
            <div
              className="absolute top-[22%] right-[4%] w-[15%] h-[32%] cursor-pointer z-20 pointer-events-auto"
              id="referrerCard"
            />
          </Link>

          {/* CENTER LOGO */}
          <Link href="/">
            <div
              className="absolute top-[29%] left-[45.5%] w-[9%] h-[9%] cursor-pointer z-20 pointer-events-auto"
              id="logoCard"
            />
          </Link>
        </div>
      </section>

      {/* ================= MOBILE SECTION ================= */}
      <div className="hero-wrapper-mobile relative block md:hidden">

        {/* TRAINER → COMING SOON */}
        <Link href="/coming-soon">
          <div
            className="absolute w-[32%] top-[68%] left-[8%] z-20 pointer-events-auto"
            id="m1"
          />
        </Link>

        {/* JOB SEEKER → COMING SOON */}
        <Link href="/coming-soon">
          <div
            className="absolute w-[32%] top-[68%] left-[36%] z-20 pointer-events-auto"
            id="m2"
          />
        </Link>

        {/* RECRUITER → LOGIN */}
        <Link href="https://job-portal-2026-69gm.vercel.app/recruiter/log-in">
          <div
            className="absolute w-[32%] top-[68%] left-[64%] z-20 pointer-events-auto"
            id="m3"
          />
        </Link>

        {/* CORPORATE → LOGIN */}
        <Link href="https://job-portal-2026-69gm.vercel.app/corporate/log-in">
          <div
            className="absolute w-[32%] top-[36%] left-[50%] z-20 pointer-events-auto"
            id="m4"
          />
        </Link>

        {/* REFERRER → COMING SOON */}
        <Link href="/coming-soon">
          <div
            className="absolute w-[32%] top-[36%] left-[15%] z-20 pointer-events-auto"
            id="m5"
          />
        </Link>
      </div>
    </>
  );
}
