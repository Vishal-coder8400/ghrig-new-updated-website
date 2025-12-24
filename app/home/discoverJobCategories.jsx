import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const jobCategories = [
  ["Pharma", "Edutech"],
  ["E Commerce", "Travel"],
  ["Hospitality", "Financial Services"],
  ["Banking", "IT"],
  ["Insaurance", "Housing"],
  ["FMCG"],
];

export const DiscoverJobCategories = () => {
  return (
    <section
      className="
        relative
        w-full
        rounded-2xl
        mx-auto
        max-w-[1152px]
        text-white
        overflow-hidden
      "
      style={{
        /* ✅ FIGMA EXACT — FULL HEIGHT VERTICAL GRADIENT */
        background: `
          linear-gradient(
            180deg,
            #8C2F4F 0%,
            #7A365C 25%,
            #6B3E73 50%,
            #4B437F 75%,
            #2E3A6F 100%
          )
        `,
      }}
    >
      {/* TOP WINE GLOW — FIGMA */}
      <div
        className="absolute top-0 left-0 w-full h-[120px] sm:h-[160px] pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(158, 52, 82, 0.75) 0%,
              rgba(158, 52, 82, 0.45) 35%,
              rgba(158, 52, 82, 0.18) 65%,
              rgba(158, 52, 82, 0) 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="
        relative z-10 mx-auto
        px-4 sm:px-6 md:px-10
        pt-6 sm:pt-8 md:pt-10
        pb-6 sm:pb-6 md:pb-8
        grid grid-cols-1 lg:grid-cols-[30%_70%]
        gap-8
        items-start
      ">
        {/* LEFT */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <h2 className="
            [font-family:'Outfit',Helvetica]
            font-bold
            text-[26px] sm:text-[32px] md:text-4xl
            leading-tight
          ">
            Discover jobs categories in industry
          </h2>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <img
                className="w-14 sm:w-16 md:w-20 h-auto object-contain pointer-events-none select-none"
                alt="Star 1"
                src="/assets/images/Star 1.png"
              />
              <img
                className="absolute -top-2 -right-12 sm:-right-16
                  w-10 sm:w-12 md:w-16
                  h-auto object-contain
                  pointer-events-none select-none
                  opacity-70 z-10"
                alt="Star 2"
                src="/assets/images/Star 1.png"
              />
            </div>

            <img
              className="w-32 sm:w-40 md:w-60 h-auto object-contain pointer-events-none select-none"
              alt="Person illustration"
              src="/assets/images/apple.png"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6 md:gap-4
        ">
          {jobCategories.flat().map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="
                flex items-center justify-between
                w-full
                h-[50px] sm:h-[56px]
                px-4 sm:px-6
                text-white
                rounded-[12px]
                shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
              "
              style={{
                background: `
                  linear-gradient(
                    180deg,
                    rgba(255,255,255,0.22) 0%,
                    rgba(255,255,255,0.18) 100%
                  )
                `,
              }}
            >
              <span className="
                [font-family:'Plus_Jakarta_Sans',Helvetica]
                font-semibold
                text-[15px] sm:text-[16px] md:text-[18px]
                tracking-[-0.2px]
              ">
                {category}
              </span>

              <ChevronRight
                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                strokeWidth={1.5}
              />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
