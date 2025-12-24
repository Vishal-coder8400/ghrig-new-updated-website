"use client"
import React, { useState, useEffect } from "react";

const carouselData = [
  {
    title: "Employee  Benefits",
    subtitle: "Group Mediclaim, Group Term plan at best market rates",
  },
  {
    title: "Payroll & Statutory   Compliances",
    subtitle: "Full compliance as per Labour acts",
  },
  {
    title: "Training &  Development",
    subtitle: "TNI, Delivery & Feedback",
  },
  {
    title: "HR Consulting",
    subtitle: "HR Policies,  Talent attraction, OD Interventions, HRMS",
  },
  {
    title: "Permanent Staffing",
    subtitle: "Customized Hiring within minimum TAT",
  },
];

const ServiceBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // OPTIONAL: Auto slide every 4 sec — uncomment if needed
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="service-banner  mx-auto px-4 sm:px-6 lg:px-1 py-12 lg:pb-0 lg:py-5 bg-white flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      
      {/* LEFT SIDE */}
      <div className="flex justify-center">
      <div className="service-left max-w-xl flex-col flex justify-center  w-full lg:pl-30 text-center lg:text-left">
     <div className="flex justify-center">
        <p
  className="
    inline-block
    w-[50%]
    px-4 py-2
    text-sm
    text-center
    font-medium
    rounded-full
    mb-4
    font_family_jakarta
    text-white
    shadow-[0_6px_18px_rgba(0,0,0,0.12)]
  "
  style={{
    background:
      "linear-gradient(90deg,#BC263A 0%,#7A2E6C 50%,#4B2F6B 100%)",
  }}
>
  gHRig People Solutions
</p>

        </div>

        {/* ◼◼ TEXT CAROUSEL — ONLY THIS PART CHANGED */}
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-gray-900 leading-tight">
          {carouselData[activeIndex].title}
        </h1>

        <p className="text-base text-center sm:text-lg text-gray-600 mb-8 font_family_inter transition-all duration-500">
          {carouselData[activeIndex].subtitle}
        </p>

        <div className="flex flex-wrap justify-center lg:justify-center gap-3 mb-10">
        
        </div>

        {/* ◼◼ DOTS — CLICK TO CHANGE SLIDE */}
        <div className="flex justify-center lg:justify-center gap-2">
          {carouselData.map((_, i) => (
           <div
  key={i}
  onClick={() => setActiveIndex(i)}
  className={`
    h-2
    rounded-full
    transition-all
    cursor-pointer
    ${i === activeIndex ? "w-6" : "w-2 bg-gray-300"}
  `}
  style={
    i === activeIndex
      ? {
          background:
            "linear-gradient(90deg,#BC263A 0%,#7A2E6C 50%,#4B2F6B 100%)",
        }
      : {}
  }
/>

          ))}
        </div>
      </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="service-right hidden lg:flex justify-end items-end flex-1">
        <img
          src="/assets/images/serviceBanner.png"
          alt="Character Illustration"
          className="z-[2] pointer-events-none translate-y-[12px] h-[650px]"
        />
      </div>
      <div className="service sm:hidden flex">
         <img
          src="/assets/images/service-phone.png"
          alt="Character Illustration"
          className="z-[2] pointer-events-none translate-y-[12px] h-[350px]"
        />
      </div>

    </section>
  );
};

export default ServiceBanner;