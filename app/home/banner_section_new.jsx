import React from "react";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="hero-wrapper relative">

        {/* LEFT TOP CARD */}
        <div className="absolute top-[22%] left-[4%] w-[15%] h-[32%]" />

        {/* LEFT BOTTOM CARD */}
        <div className="absolute top-[39%] left-[20%] w-[18%] h-[34%]" />

        {/* MIDDLE */}
        <div className="absolute top-[39%] left-[42%] w-[18%] h-[34%]" />

        {/* RIGHT BOTTOM */}
        <div className="absolute top-[39%] left-[64%] w-[18%] h-[34%]" />

        {/* RIGHT TOP */}
        <div className="absolute top-[22%] right-[4%] w-[15%] h-[32%]" />

        {/* CENTER LOGO */}
        <Link href="#">
          <div className="absolute top-[29%] left-[45.5%] w-[9%] h-[9%]" />
        </Link>

      </div>
    </section>
  );
}
