"use client";

import React from "react";
import Image from "next/image";
import people from "../../public/assets/images/people.png"; 

const Solutions = () => {
  return (
    <section className="w-full py-12 px-4 flex justify-center bg-[#F7F7F7]">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full items-center gap-12">
        {/* Left Section - Gradient Card */}
        <div className="rounded-2xl p-8 flex flex-col justify-between text-white h-full">
          <div className="flex justify-center mb-2">
            <Image
              src={people}
              alt="Our Story"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center items-start md:items-end text-center md:text-right">
          {/* Tag */}
          <button className="text-sm bg-[#E9E1FF] text-[#6945ED] px-5 py-1.5 rounded-full font-medium mb-4">
            About Us
          </button>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            gHRig People <br className="hidden md:block" />
            Solutions
          </h2>

          {/* Paragraph */}
          <p className="text-[#141414B2] text-sm leading-relaxed md:w-[80%]">
            Incepted in 2025 and based out from Noida, gHRig.com is formed by a group of like minded HR professionals with experience in Corporate world in Telecom, Banking, Financial Servicesand Insurance sectors.
          </p>

          <p className="text-[#141414B2] text-sm leading-relaxed md:w-[80%] mt-4">
            gHRig.com has a clear cut vision, capability and expertise to provide entire bouquet of HR Services before its clients by understanding the practical needs of the Corporate world.

          </p>
           <p className="text-[#141414B2] text-sm leading-relaxed md:w-[80%] mt-4">
            gHRig.com brings before you all a platform where theskilled talent from the country can meet up with their dream jobs from largeCorporates who are scouting for the talented manpower pool from the market.

          </p>

          {/* Learn More Button */}
          <a
            href="#"
            className="mt-6 bg-[#6945ED] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
