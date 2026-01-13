"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Check } from "lucide-react";

export default function CarouselCard() {
  const cards = [
    {
      title: "Corporates",
      color: "#3B82F6",
      icon: "💼",
      points: [
        "Free Job postings.",
        "Easy access to multiple gHRig Recruiters.",
        "Reduce Internal Fixed Cost on Recruitment team.",
        "Automated Digitized platform with Transparency.",
        "Reduce Hiring TATs.",
      ],
    },
    {
      title: "gHRig Recruiters",
      color: "#8B5CF6",
      icon: "👤",
      points: [
        "Ready availability of Hiring Assignments.",
        "Work from Home and Be Your Own Boss",
        "Flexible Timings / Increase in Work Life balance.",
        "Higher earning Potential than any Full time assignment.",
        "Exposure to Multiple Sectors / Projects.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "gHRig Trainers",
      color: "#10B981",
      icon: "🎓",
      points: [
        "Choose your favorable Training Assignments from Corporates",
        "Work as per your comfort level and Be Your Own Boss.",
        "Higher earning Potential than any Full time assignment.",
        "Exposure to Multiple Sectors / Projects.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "Job Seekers",
      color: "#F59E0B",
      icon: "🧑‍💻",
      points: [
        "Get access to latest Job openings PAN India.",
        "Apply across Entry / Mid / Senior levels open positions.",
        "High chances of getting interviewed from multiple Corporates.",
        "Automated Digitized platform with Transparency.",
      ],
    },
    {
      title: "Referrers",
      color: "#EC4899",
      icon: "💰",
      points: [
        "“Refer and Earn” on every Closure.",
        "Refer Unlimited candidates across Sectors – no restrictions.",
        "Automated Digitized platform with Transparency.",
      ],
    },
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center">
     <h2
  className="
    text-[26px] sm:text-[32px] lg:text-[38px]
    font-bold
    text-center
    px-4
    leading-tight sm:leading-[1.2]
    py-1
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  Unlock Your Potential with Our Platform
</h2>


      <p className="
      font-semibold 
      bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent text-center max-w-2xl mt-3 text-[14px] sm:text-[16px] lg:text-[18px] px-4">
        We offer tailored solutions for every role in the recruitment ecosystem.
        Find out how we can help you succeed.
      </p>

      <div className="w-full max-w-7xl mt-10 px-4 sm:px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  rounded-[22px]
                  bg-brand-gradient
                  shadow-[0_20px_50px_rgba(75,47,107,0.35)]
                  hover:-translate-y-2
                  transition-all duration-300
                  flex flex-col
                  h-[380px] sm:h-[410px] lg:h-[430px]
                  p-6
                  text-white
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    flex items-center justify-center
                    text-2xl
                    bg-white/20
                    mb-4
                  "
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold mb-3">
                  {card.title}
                </h3>

                <div className="w-full h-[1px] bg-white/30 mb-4"></div>

                {/* Points */}
                <ul className="space-y-2 text-[13px] sm:text-[14px] lg:text-[15px]">
                  {card.points.map((p, i) => (
                  <li key={i} className="flex gap-2 leading-snug items-start">
  <Check className="w-4 h-4 text-white shrink-0 mt-[2px]" />
  {p}
</li>

                  ))}
                </ul>

                <div className="flex-grow" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
