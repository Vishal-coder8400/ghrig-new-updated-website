import React from "react";
import Image from "next/image";
import origin_story from "../../public/assets/images/neworigin_story.png";

export default function OurStory() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <Image
              src={origin_story}
              alt="Our Origin Story"
              className="max-w-full h-auto object-contain"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">

            <h2
              className="
                font_family_jakarta
                font-medium
                text-[36px] sm:text-[54px]
                leading-tight
                mb-6
                bg-gradient-to-r
                from-[#8E2C6D]
                via-[#7A3FA2]
                to-[#4B4DB5]
                bg-clip-text
                text-transparent
              "
            >
              Our Origin Story:
              <br />
              Built For the Real World
            </h2>

   <div className="space-y-4 text-[#141414] text-[16px] font_family_display leading-relaxed font-medium">

              <p>
                With 2 decades of Corporate HR experience and after going through all the phases in HR Function, right as a Management Trainee to Heading the HR function and facing the ever demanding Board members, from handling up a small team unit of 300 to scaling up to 2000 plus mostly in Tier 2 / 3 cities, to heading a team size of more than 15,000 plus, managing scale, volume and multiple product lines in the BFSI sector, there always was a burning desire by our Founder to build something which takes care of the day to day pain of the HR Fraternity members as well as meeting the demands from Management.
              </p>

              <p>
                Having a deep understanding of HR related Technology while implementing multiple HRMS tools, undertaking a lot of research across markets and with multiple discussions and feedback with related stakeholders, the concept of gHRig was born.
              </p>

              <p>
                gHRig is basically a blend of HR and GIG - this is what we believe where the future lies. Where people are acknowledged for the skills they possess and get rewarded for same; where one is free from all traditionally set boundaries, however there lies the professionalism towards execution with an urge to achieve, an environment where Talent gets nurtured, Thrive and outperform.
              </p>

              <p>
                This is what we are building, from an idea visualization to bringing it on table, here, through this platform of gHRig.
              </p>

              <p>
                As someone has rightly said, if one enjoys the journey, the destination is bound to be beautiful.
              </p>

              <p className="font-semibold text-[#141414]">
                Welcome to the gHRig Fraternity !!!
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
