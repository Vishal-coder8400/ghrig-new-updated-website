import React from "react";

export default function Banner_Section() {
  return (
    <div className="flex flex-col items-center w-full bg-white overflow-hidden">
      {/* ===== Top Section ===== */}
     {/* ===== Top Section ===== */}
<div className="max-w-7xl w-full text-center px-6 pt-6 pb-10 sm:pt-10 sm:pb-10">
  <h2 className="text-black sm:leading-[72px] leading-[44px] font-medium sm:text-[64px] text-[36px] font_family_jakarta">
    We’re Redefining <br className="hidden lg:block" />
    How India Hires.
  </h2>

  <p className="mt-4 text-black font-normal text-[16px] font_family_inter">
    From freshers to seasoned professionals, from recruiters to{" "}
    <br className="hidden lg:block" />
    referrers — gHRig is the new operating system for talent.
  </p>

  <div className="flex justify-center mt-6 gap-3 flex-wrap">
    {/* buttons */}
  </div>
</div>


      {/* ===== Bottom Section: Banner Illustration ===== */}
      <div className="w-full p-4 flex justify-center -mt-6 sm:-mt-8">
        <div className="bg-banner-about relative flex justify-center items-center rounded-[20px] h-[70vh] w-[100vw] overflow-hidden">
          
          {/* ==== HIDE THESE ON MOBILE ==== */}
          <div className="hidden sm:block">
            {/* === Trainers === */}
            {/* <div className="absolute top-[20%] left-[8%] text-white text-center">
              <div className="bg-[#2B2250] bg-opacity-90 px-8 py-5 rounded-2xl shadow-md w-[260px]">
                <h3 className="font-semibold text-lg font_family_jakarta">
                  Trainers
                </h3>
                <p className="text-sm mt-1 opacity-80 font_family_inter">
                  Upskill professionals with expert-led programs
                </p>
              </div>
            </div> */}

            {/* === Job Seekers === */}
            {/* <div className="absolute bottom-[22%] left-[10%] text-white text-center">
              <div className="bg-[#2B2250] bg-opacity-90 px-8 py-5 rounded-2xl shadow-md w-[270px]">
                <h3 className="font-semibold text-lg font_family_jakarta">
                  Job Seekers
                </h3>
                <p className="text-sm mt-1 opacity-80 font_family_inter">
                  Find jobs, track applications, and get referrals.
                </p>
              </div>
            </div> */}

            {/* === Referrers === */}
            {/* <div className="absolute top-[20%] right-[8%] text-white text-center">
              <div className="bg-[#2B2250] bg-opacity-90 px-8 py-5 rounded-2xl shadow-md w-[260px]">
                <h3 className="font-semibold text-lg font_family_jakarta">
                  Referrers
                </h3>
                <p className="text-sm mt-1 opacity-80 font_family_inter">
                  Earn by referring qualified candidates.
                </p>
              </div>
            </div> */}

            {/* === Recruiters === */}
            {/* <div className="absolute bottom-[22%] right-[10%] text-white text-center">
              <div className="bg-[#2B2250] bg-opacity-90 px-8 py-5 rounded-2xl shadow-md w-[270px]">
                <h3 className="font-semibold text-lg font_family_jakarta">
                  Recruiters
                </h3>
                <p className="text-sm mt-1 opacity-80 font_family_inter">
                  Access top talent and manage hiring efficiently.
                </p>
              </div>
            </div> */}
          </div>
          {/* ==== END OF MOBILE-HIDDEN CONTENT ==== */}

        </div>
      </div>
    </div>
  );
}
