"use client";

import React from "react";
import { ChevronRightIcon, Check } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

const values = [
  {
    title: "Organizational Values @gHRig",
    points: [
      "Caring & Respect for Individuals",
      "Merit and Output Driven",
      "Task Clarity",
      "Transparent",
    ],
    image: "/assets/images/built1.png",
  },
  {
    title: "Values amongst gHRig Team",
    points: [
      "Honest & Hardworking",
      "Respects agreed Timelines Urgency in Action",
      "Passionate & Accountable",
      "Allows work to speak",
    ],
    image: "/assets/images/built2.png",
  },
  {
    title: "Work Culture",
    points: [
      "Collaborative and Supportive Environment",
      "Fast Track Career path",
      "Large canvas to learn",
      "Regular hand holding",
    ],
    image: "/assets/images/built3.png",
  },
];

const BuiltForYou = () => {
  return (
    <section className="w-full bg-[#F5F2FF] py-16 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14 text-center md:text-left">
      <h2
  className="
    text-4xl md:text-5xl
    font-bold
    mx-auto md:mx-0
    leading-tight md:leading-[1.2]
    py-1
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  Built for you, <br /> to serve you.
</h2>


        <div className="md:w-[50%] text-gray-600 text-lg mt-6 md:mt-0 mx-auto md:mx-0 md:text-right">
          <p>
            Parallelly we assist our Clients by matching the right individuals
            with right skill sets for their open positions. We act as a catalyst
            where our expert team works closely to provide the best solutions
            from the market.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {values.map((item, index) => (
          <Card
            key={index}
            className="
              group
              bg-brand-gradient
              rounded-2xl
              shadow-[0_20px_50px_rgba(75,47,107,0.35)]
              hover:-translate-y-2
              transition-all duration-300
              border-none
              h-full
            "
          >
            <CardContent className="p-8 flex flex-col gap-6 text-white h-full">
              {/* Image */}
              <div className="w-full h-[160px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain max-h-[120px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold font_family_jakarta">
                {item.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2 text-[15px] leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-white mt-[2px]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Button – PERFECTLY ALIGNED */}
              <button
                type="button"
                className="
                  mt-auto
                  flex items-center justify-center gap-2
                  h-[38px] px-[22px]
                  rounded-full
                  bg-white
                  text-[#7A3FA2]
                  text-sm font-semibold
                  hover:bg-gray-100
                  transition
                  w-fit
                "
              >
                Proceed
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BuiltForYou;
