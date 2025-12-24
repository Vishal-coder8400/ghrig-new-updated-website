import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

export default function JobCategories() {
  return (
    <div className="max-w-6xl mx-auto mt-12 sm:mt-20 mb-10 px-4">
      <div className="w-full">
        <div className="mb-6 sm:mb-12 mt-4">
          <h2 className="font-[600] text-[26px] sm:text-4xl text-center font_family_jakarta">
            Top Job Categories Right now (for Job Seekers)
          </h2>

          <p className="font_family_display text-center text-[14px] sm:text-lg text-[#7F7F7F] font-normal mb-4 mt-4">
            Click on the link below that interests you as a Job seeker
            <br className="hidden lg:block" />
          </p>
        </div>

        {/* Responsive Grid - 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

          {/* Card 1 */}
          <div className="col-span-1 p-5 rounded-2xl bg-gradient-to-br from-[#8E2C6D] via-[#7A3FA2] to-[#4B4DB5] shadow-lg">
            <div className="flex justify-start items-center p-0 rounded-lg">
              <p className="inline-flex text-[12px] sm:text-sm font_family_inter text-white items-center rounded-md bg-white/20 border border-white/20 px-3 py-1 font-medium">
                Design
              </p>
            </div>

            <h2 className="text-white font_family_inter font-semibold mt-4 mb-6 sm:mb-8 text-[18px] sm:text-xl leading-[24px]">
              Sr. UI/UX Designer
            </h2>

            <p className="font_family_inter font-medium text-[13px] sm:text-sm mt-3 text-gray-100 leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.
            </p>

            {/* Inner Box - Glassmorphism Style */}
            <div className="mt-5 flex flex-col sm:flex-row border bg-white/10 border-white/20 backdrop-blur-sm rounded-xl p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p
                  className="
                    inline-flex
                    font_family_inter
                    text-white
                    items-center
                    rounded-md
                    bg-gradient-to-r
                    from-[#8E2C6D]
                    via-[#7A3FA2]
                    to-[#4B4DB5]
                    px-2 py-1
                    text-[11px] sm:text-xs
                    font-medium
                    shadow-sm
                  "
                >
                  Perfect for
                </p>
              </div>

              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-[11px] sm:text-xs text-gray-200 leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>

            <div className="flex mt-6 mb-2 justify-center">
              <button
                type="button"
                className="
                  group
                  relative
                  flex items-center justify-center gap-2
                  h-[38px] sm:h-[42px]
                  px-[24px] sm:px-[28px]
                  rounded-full
                  bg-white
                  shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                  transition-transform duration-200 hover:scale-105 active:scale-95
                  focus:outline-none
                "
              >
                {/* Text with Gradient Fill */}
                <span className="
                  font_family_inter
                  font-bold
                  text-[13px] sm:text-sm
                  bg-gradient-to-r from-[#8E2C6D] to-[#4B4DB5]
                  bg-clip-text text-transparent
                  flex items-center gap-2
                ">
                  Apply Now
                  {/* Icon colored with standard text color or hardcoded to match gradient start */}
                  <ChevronRightIcon className="w-4 h-4 text-[#8E2C6D]" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 p-5 rounded-2xl bg-gradient-to-br from-[#8E2C6D] via-[#7A3FA2] to-[#4B4DB5] shadow-lg">
            <div className="flex justify-start items-center p-0 rounded-lg">
              <p className="inline-flex text-[12px] sm:text-sm font_family_inter text-white items-center rounded-md bg-white/20 border border-white/20 px-3 py-1 font-medium">
                Technology
              </p>
            </div>

            <h2 className="text-white font_family_inter font-semibold mt-4 mb-6 sm:mb-8 text-[18px] sm:text-xl leading-[24px]">
              Software Developer
            </h2>

            <p className="font_family_inter font-medium text-[13px] sm:text-sm mt-3 text-gray-100 leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.
            </p>

            {/* Inner Box */}
            <div className="mt-5 flex flex-col sm:flex-row border bg-white/10 border-white/20 backdrop-blur-sm rounded-xl p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p
                  className="
                    inline-flex
                    font_family_inter
                    text-white
                    items-center
                    rounded-md
                    bg-gradient-to-r
                    from-[#8E2C6D]
                    via-[#7A3FA2]
                    to-[#4B4DB5]
                    px-2 py-1
                    text-[11px] sm:text-xs
                    font-medium
                    shadow-sm
                  "
                >
                  Perfect for
                </p>
              </div>

              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-[11px] sm:text-xs text-gray-200 leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>

            <div className="flex mt-6 mb-2 justify-center">
              <button
                type="button"
                className="
                  group
                  relative
                  flex items-center justify-center gap-2
                  h-[38px] sm:h-[42px]
                  px-[24px] sm:px-[28px]
                  rounded-full
                  bg-white
                  shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                  transition-transform duration-200 hover:scale-105 active:scale-95
                  focus:outline-none
                "
              >
                <span className="
                  font_family_inter
                  font-bold
                  text-[13px] sm:text-sm
                  bg-gradient-to-r from-[#8E2C6D] to-[#4B4DB5]
                  bg-clip-text text-transparent
                  flex items-center gap-2
                ">
                  Apply Now
                  <ChevronRightIcon className="w-4 h-4 text-[#8E2C6D]" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 p-5 rounded-2xl bg-gradient-to-br from-[#8E2C6D] via-[#7A3FA2] to-[#4B4DB5] shadow-lg">
            <div className="flex justify-start items-center p-0 rounded-lg">
              <p className="inline-flex text-[12px] sm:text-sm font_family_inter text-white items-center rounded-md bg-white/20 border border-white/20 px-3 py-1 font-medium">
                Management
              </p>
            </div>

            <h2 className="text-white font_family_inter font-semibold mt-4 text-[18px] sm:text-xl leading-[24px]">
              Business Development <br className="hidden lg:block" />
              Representative (BDR)
            </h2>

            <p className="font_family_inter font-medium text-[13px] sm:text-sm mt-3 text-gray-100 leading-[20px]">
              This role is ideal for individuals who enjoy building{" "}
              <br className="hidden lg:block" />
              rapport, negotiating deals, and working in a fast-paced environment.
            </p>

            {/* Inner Box */}
            <div className="mt-5 flex flex-col sm:flex-row border bg-white/10 border-white/20 backdrop-blur-sm rounded-xl p-3">
              <div className="mb-2 sm:mb-0 sm:w-[30%]">
                <p
                  className="
                    inline-flex
                    font_family_inter
                    text-white
                    items-center
                    rounded-md
                    bg-gradient-to-r
                    from-[#8E2C6D]
                    via-[#7A3FA2]
                    to-[#4B4DB5]
                    px-2 py-1
                    text-[11px] sm:text-xs
                    font-medium
                    shadow-sm
                  "
                >
                  Perfect for
                </p>
              </div>

              <div className="sm:ml-2">
                <p className="font_family_inter font-medium text-[11px] sm:text-xs text-gray-200 leading-[18px]">
                  People with strong <br className="hidden lg:block" />
                  communication skills and a <br className="hidden lg:block" />
                  passion for persuading others.
                </p>
              </div>
            </div>

            <div className="flex mt-6 mb-2 justify-center">
              <button
                type="button"
                className="
                  group
                  relative
                  flex items-center justify-center gap-2
                  h-[38px] sm:h-[42px]
                  px-[24px] sm:px-[28px]
                  rounded-full
                  bg-white
                  shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                  transition-transform duration-200 hover:scale-105 active:scale-95
                  focus:outline-none
                "
              >
                <span className="
                  font_family_inter
                  font-bold
                  text-[13px] sm:text-sm
                  bg-gradient-to-r from-[#8E2C6D] to-[#4B4DB5]
                  bg-clip-text text-transparent
                  flex items-center gap-2
                ">
                  Apply Now
                  <ChevronRightIcon className="w-4 h-4 text-[#8E2C6D]" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}