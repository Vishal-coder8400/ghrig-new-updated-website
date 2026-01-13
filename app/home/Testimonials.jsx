import React from "react";

const testimonials = [
  {
    name: "VP HR from Fintech Firm",
    text:
      "Collaborating with someone who has firsthand experience on this side of the table is truly remarkable. Sanjay possesses a profound understanding of the challenges faced in Talent Acquisition (TA). His insight into candidate profiles is exceptional, and his extensive network allows him to attract top-tier talent effectively. I encourage everyone to explore the recruitment services offered by his company.",
  },
  {
    name: "COO of a Housing Finance Company",
    text:
      "Quick TAT, understanding of the job requirement and good database has helped us towards closure of few critical positions and at Tier 2 / 3 locations.",
  },
  {
    name: "Jordan Welch",
    text:
      "I was part of the beta launch… absolutely mind-blowing. Managing my investments has never been easier. @Kundkund is my go-to platform! 😄",
  },
  {
    name: "Dylan Pearson",
    text:
      "Kundkund – The Tesla of financial services. A brief consultation nearly doubled my investment returns. The future is bright! 🌟",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-8 sm:py-10 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 px-4 sm:px-6">
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
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              relative
              min-h-[180px] sm:min-h-[210px]
              p-3 sm:p-4
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
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              {/* Avatar */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EFEAF6] flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
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

              <p className="font-semibold text-[13px] sm:text-[14px]">
                {item.name}
              </p>
            </div>

            {/* Text */}
            <p className="text-[12px] sm:text-[13px] leading-snug opacity-90 font-semibold">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
