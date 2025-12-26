"use client";
import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaCogs,
  FaUniversity,
  FaHandsHelping,
  FaAward,
  FaMoneyCheck,
} from "react-icons/fa";

/* ================= CONFIG ================= */
const CARD_WIDTH = 280;
const GAP = 24;

/* ================= CARD DATA ================= */
const cards = [
  { icon: <FaUsers size={28} />, text: "Holistic solutions to all your HR needs" },
  { icon: <FaCogs size={28} />, text: "Ownership on tasks assigned with focus on Quality and Quick TAT" },
  { icon: <FaUniversity size={28} />, text: "Team with high Ethical standards and Transparency in execution" },
  { icon: <FaHandsHelping size={28} />, text: "Talent of gHRig People Solutions with rich experience" },
  { icon: <FaAward size={28} />, text: "Knowhow of intricacies and challenges of HR Function" },
  { icon: <FaMoneyCheck size={28} />, text: "One stop solution for all your HR needs" },
];

const WhyPartner = () => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = cards.length - perView;
  const total = cards.length;
  const offset = index * (CARD_WIDTH + GAP);
  const dotsCount = maxIndex + 1;

  return (
    <section className="bg-white py-10">
     <h2
  className="
    text-center
    text-4xl md:text-5xl
    font-bold
    mb-14
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
  Why partner with <span>gHRig.com</span>
</h2>


      <div className="relative max-w-[1300px] mx-auto px-16">

        {/* ===== PREV ===== */}
        <button
          onClick={() => setIndex(index === 0 ? total - perView : index - 1)}
          className="
            hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-brand-gradient
            items-center justify-center text-white text-2xl
            shadow-lg
          "
        >
          ‹
        </button>

        {/* ===== NEXT ===== */}
        <button
          onClick={() => setIndex(index >= maxIndex ? 0 : index + 1)}
          className="
            hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-brand-gradient
            items-center justify-center text-white text-2xl
            shadow-lg
          "
        >
          ›
        </button>

        {/* ===== VIEWPORT ===== */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                style={{ width: CARD_WIDTH }}
                className="
                  flex-shrink-0 h-[280px]
                  bg-brand-gradient
                  rounded-2xl p-6
                  flex flex-col items-center justify-center text-center
                  shadow-[0_20px_50px_rgba(75,47,107,0.35)]
                  text-white
                "
              >
                <div
                  className="
                    w-14 h-14 mb-4 rounded-full
                    bg-white/20
                    flex items-center justify-center
                    text-white
                  "
                >
                  {card.icon}
                </div>

                <p className="text-white text-base font-medium leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DOT INDICATORS ===== */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${
                  index === i
                    ? "bg-white scale-110"
                    : "bg-white/40"
                }
              `}
            />
          ))}
        </div>

        {/* ===== MOBILE NAV ===== */}
        <div className="flex sm:hidden justify-center gap-6 mt-6">
          <button
            onClick={() => setIndex(index === 0 ? total - perView : index - 1)}
            className="w-12 h-12 rounded-full bg-brand-gradient text-white text-2xl"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex(index >= maxIndex ? 0 : index + 1)}
            className="w-12 h-12 rounded-full bg-brand-gradient text-white text-2xl"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyPartner;
