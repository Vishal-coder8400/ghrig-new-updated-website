import React from "react";

export default function AccelerateJob() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden flex items-center min-h-[350px] md:min-h-[400px]">
        {/* Background Image */}
        <img
          src="/assets/images/accelrate-your-job.png"
          alt="Accelerate Job Search"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFAA49] via-[#FFAA49]/95 to-transparent"></div>

        {/* Decorative Stars */}
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[140px] top-[70px] w-10 opacity-60"
        />
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[100px] top-[130px] w-6 opacity-60"
        />
        <img
          src="/assets/images/Star 1.png"
          alt="Star"
          className="absolute left-[200px] top-[160px] w-8 opacity-60"
        />

        {/* Text Content */}
        <div className="relative z-10 w-full md:w-1/2 pl-6 sm:pl-10 py-8">
          <h2 className="font_family_jakarta text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-tight mb-4">
            Why partner with gHRig.com
          </h2>

          {/* Bullet points with better spacing */}
          <div className="text-white text-sm md:text-base font_family_inter max-w-[550px]">
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">One stop holistic solution for all your HR needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Ownership on tasks designed with focus on Quality and Quick TAT</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Team with high ethical standards and transparency in execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Talent of gHRig People Solutions with rich HR experience from industry</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">Knowhow of intricacies and challenges of HR Function</span>
              </li>
            </ul>
          </div>

          <a
            href="#"
            className="inline-block bg-white text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition mt-6"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}