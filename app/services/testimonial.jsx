"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import origin_story_new from "../../public/assets/images/origin_story_new.png";
import test1 from "../../public/assets/images/test1.webp";
import test2 from "../../public/assets/images/test2.jpg";

const testimonials = [
  {
    name: "VP HR and FinTech Firm",
    content:
      "Collaborating with someone who has firsthand experience on this side of the table is truly remarkable. Sanjay possesses a profound understanding of the challenges faced in Talent Acquisition (TA). His insight into candidate profiles is exceptional, and his extensive network allows him to attract top-tier talent effectively.",
    avatar: test1,
  },
  {
    name: "COO of a Housing Finance Company",
    content:
      "Quick TAT, understanding of the job requirement and good database has helped us towards closure of few critical positions and at Tier 2/3 locations.",
    avatar: test2,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.scrollWidth / testimonials.length;
    let index = 0;

    const interval = setInterval(() => {
      if (!container) return;

      index = (index + 1) % testimonials.length;
      container.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F1FF] py-20 px-6 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-16">
        {/* Left Image and Quote */}
        <div className="md:w-[35%] w-full flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative rounded-2xl overflow-hidden h-[350px] md:h-[480px] w-full">
            <Image
              src={origin_story_new}
              alt="Origin Story"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Testimonials */}
        <div className="md:w-[65%] w-full  flex flex-col items-end ">
          <h2 className="text-5xl font-bold mb-6 text-right w-full">
            Our<span className="text-[#9B5EFF]"> Testimonials</span>
          </h2>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide scroll-smooth w-full mt-4 min-h-[36vh]"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white min-w-[320px] md:min-w-[360px] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <p className="text-gray-700 text-md mb-6 leading-relaxed">
                  {item.content}
                </p>
                <div className="flex items-center gap-3">
                  {item.avatar && (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-[#141414] font-semibold text-sm">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;