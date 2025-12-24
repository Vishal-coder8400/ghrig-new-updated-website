"use client";
import React from "react";

const AssociatedSectors = () => {
  const sectors = ["Pharma", "Edutech","E Commerce", "Travel","Hospitality"," Financial Services","Banking","IT","Insaurance","Housing","FMCG"];

  return (
    <section className="w-full bg-[#F5F1FF] py-12 sm:py-20 px-4 sm:px-6 lg:px-16">

      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-center sm:text-left gap-6 sm:gap-0 mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Our Associated <br className="hidden sm:block" /> Sectors
        </h2>

        <p className="text-gray-400 text-base sm:text-2xl font-medium max-w-xs">
          Sectors we are <br className="hidden sm:block" /> associated with
          currently
        </p>
      </div>

      {/* INFINITE MOVING SECTORS */}
      <div className="sector-container">
        <div className="sector-marquee">
          {[...sectors].map((sector, index) => (
            <button
              key={index}
              className="min-w-[220px] sm:min-w-[250px] md:min-w-[280px] h-[80px] sm:h-[100px] 
                         rounded-xl font-medium text-base sm:text-lg
                         border border-gray-300 text-gray-800 bg-white
                         hover:bg-gradient-to-t hover:from-[#5D1E90] hover:via-[#951136] hover:to-[#5D1E90]
                         hover:text-white transition-all duration-300"
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AssociatedSectors;
