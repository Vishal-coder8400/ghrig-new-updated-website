import React from "react";

const testimonials = [
  {
    name: "Dave Nash",
    handle: "@once",
    text:
      "After exploring the @Kundkund platform for a few months, I finally took the plunge. Wow, it’s a game changer! Just give it a shot! You won't regret it ✌️",
  },
  {
    name: "Kyle Sulkar",
    handle: "@sulkarmedia",
    text:
      "Integrates seamlessly with various financial tools and provides IPO insights in just minutes. How can something so effective be so user-friendly? This is top-notch design and functionality! 😍",
  },
  {
    name: "Jordan Welch",
    handle: "@jrdn.w",
    text:
      "I was part of the beta launch… absolutely mind-blowing. Managing my investments has never been easier. @Kundkund is my go-to platform! 😄",
  },
  {
    name: "Dylan Pearson",
    handle: "@dylanbusiness",
    text:
      "Kundkund – The Tesla of financial services. A brief consultation nearly doubled my investment returns. The future is bright! 🌟",
  },
 
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-8 sm:py-10 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 px-4 sm:px-6">
        <div>
    <h2
  className="
    text-[26px] sm:text-4xl
    font-bold
    leading-tight sm:leading-[1.2]
    py-1
    text-center
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  Hear from Our Customers
</h2>

          {/* <p className="text-[14px] sm:text-base text-gray-500 mt-2 max-w-xl">
            Over 2,000 people have already benefited from our all-in-one finance platform.
          </p> */}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              relative
              min-h-[220px] sm:min-h-[260px]
              p-4 sm:p-6
              rounded-2xl
              bg-[#FBF9FF]
              text-[#2A2A2A]
              shadow-md
              cursor-pointer
              transition-all
              duration-500
              ease-out

              hover:rotate-[3deg]
              hover:scale-[1.03]
              hover:text-white
              hover:shadow-2xl
              hover:bg-gradient-to-br
              hover:from-[#6F2F4E]
              hover:to-[#2E3A6F]
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              {/* ✅ FIGMA AVATAR ICON */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EFEAF6] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#6F2F4E]"
                >
                  <path
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 20c0-4 4-6 8-6s8 2 8 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-[14px] sm:text-base">
                  {item.name}
                </p>
                <p className="text-[12px] sm:text-sm opacity-80">
                  {item.handle}
                </p>
              </div>
            </div>

            {/* Text */}
            <p className="text-[13px] sm:text-sm leading-relaxed opacity-90">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
