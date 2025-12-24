import React from "react";
import Link from "next/link";
export default function Banner_section() {
  return (
    <div>
      <div className="bg-section relative  hidden md:block ">
        {/* <div className=" flex gap-2 justify-end px-4 pt-4">
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Register
          </Link>
        </div> */}
        <div className="flex justify-center ">
          <div className="height-section flex justify-center md:items-top md:mt-24 lg:items-end pb-24 h-100  w-3xl">
            <h1 className="heading text-[68px] md:text[49px] md:leading-[54px] font-medium lg:leading-[70px] text-white text-center  font_family_jakarta">
              The Online Recruitment
              <br className="hidden lg:block" /> Marketplace
            </h1>
          </div>
        </div>
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/trainer/log-in">
            <div className="absolute  top-[42%]  w-[14%]  left-[40px] h-[24%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
        </Link>
        <div className="flex justify-center">
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/job-seeker/log-in">
            <div className="absolute    w-[18%] top-[64%] left-[20%]   h-[27.5%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/corporate/log-in">
            <div className="absolute     w-[18%]  top-[64%] h-[28%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-end">
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/super-admin/log-in">
            <div className="absolute    top-[42%] right-[51px]  w-[14%]   h-[23%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/Recruiter/log-in">
            <div className="absolute    w-[9%]   h-[6%] left-[46%] top-[47.5%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://job-portal-frontend-ghrig-d1pi.vercel.app/Recruiter/log-in">
            <div className="absolute     w-[18%]   h-[26%] left-[62%] top-[65%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-section-mobile relative block md:hidden">
        <div className="flex justify-center ">
          <div className="height-section flex justify-center items-end md:mt-24 pb-10 h-100  w-3xl">
            <h1 className="heading text-[47px]   font-medium leading-[60px] text-white text-center  font_family_jakarta">
              The Online Recruitment
              <br className="hidden lg:block" /> Marketplace
            </h1>
          </div>
        </div>{" "}
         <div className="flex justify-center">
          <Link href="#">
            <div className="absolute     w-[18%]   h-[26%] left-[62%] top-[65%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
         <div className="flex justify-center">
          
        </div>
         <div className="flex justify-center">
          <Link href="#">
            <div className="absolute     w-[24%]   h-[13%] left-[70%] top-[63%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
         <div className="flex justify-end">
          <Link href="#">
            <div className="absolute     w-[36%]   h-[16%] left-[33%] top-[44%] cursor-pointer ">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
         <div className="flex justify-start">
          <Link href="#">
            <div className="absolute     w-[24%] left-[5%] top-[63%]  h-[13%] cursor-pointer">
              <p className="text-[45px] text-white"></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}