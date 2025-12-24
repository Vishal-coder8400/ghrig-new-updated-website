"use client";

export default function CarouselSection() {
  const industries = [
    "Pharma",
    "Edutech",
    "E-Commerce",
    "Travel",
    "Hospitality",
    "Financial Services",
    "Banking",
    "IT",
    "Insurance",
    "Housing",
    "FMCG",
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
      {/* TEXT */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8 px-4">
        <p className="text-[15px] sm:text-[17px] text-gray-500 leading-relaxed">
          Top companies trust our platform to find the right talent.
          <br className="hidden sm:block" />
          Join the network of industry leaders hiring through us.
        </p>
      </div>

      {/* MARQUEE */}
      <div className="relative">
        {/* Left fade (smaller on mobile) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-4 sm:gap-6 whitespace-nowrap animate-marquee">
          {[...industries, ...industries].map((item, index) => (
            <span
              key={index}
              className="
                min-w-[130px] sm:min-w-[160px] md:min-w-[170px]
                h-[40px] sm:h-[44px] md:h-[48px]
                px-4
                flex items-center justify-center
                rounded-full
                text-sm sm:text-base
                font-semibold
                bg-brand-gradient
                text-white
                shadow-md
                whitespace-nowrap
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
