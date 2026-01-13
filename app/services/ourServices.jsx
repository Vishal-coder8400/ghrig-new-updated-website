"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiSearch,
  FiBarChart2,
  FiAward,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";

/* ================= DATA ================= */
const services = [
  {
    icon: <FiUser size={22} />,
    title: "Permanent Staffing",
    content: `As an Executive Search firm, we do provide permanent staffing services to Corporates based on their requirements. Also, we handle the entire end to end recruitment process of Organizations.

gHRig People Solutions act as a catalyst before our Clients where our expert team works closely with them thereby understanding their requirement minutely to provide the best solutions from the market.

Our dedicated team focuses on identifying professionals who align not only with the prescribed Job Descriptions but also with the culture and business goals of our Clients.

We go beyond the traditional mechanisms of hiring which begins with thorough understanding of our Clients requirement, followed by market scouting of relevant candidates, screening and shortlisting the best fit.

Also we ensure a seamless onboarding of the shortlisted candidates.`,
  },
  {
    icon: <FiSearch size={22} />,
    title: "HR Consulting",
    content: `We also assist our clients towards setting up of robust HR systems and processes right from creation of proper HR Roadmap to setting up of HR policies, preparation of proper Job Descriptions and setting up of effective Performance management systems.

We also have expertise towards setting up of right and customized HRMS and LMS softwares as per the requirements at end of Clients.

We can assist towards streamlining of the HR Processes as well as developing and refining various HR policies.`,
  },
  {
    icon: <FiAward size={22} />,
    title: "Training & Development",
    content: `Right from conducting the Training Need Analysis to deliverance along with measuring the effectiveness of Trainings, we conduct all through our team of Trainers.

Based on the Training Need Analysis, customise training solutions can be prepared by our team. Soft skills, Behavioural and Domain specific trainings are all conducted from our end. Asides for the young workforce we do workshops on 'How to face and crack Interviews'.

Grooming Sessions by professionals of gHRig People Solutions are also conducted as well making them Interview ready before the Corporate world.`,
  },
  {
    icon: <FiBarChart2 size={22} />,
    title: "Payroll & Statutory Compliances",
    content: `We do have the capabilities to execute monthly payroll as well as meeting out various Statutory compliances as per the Government norms.

Our team has industry rich experience to take care of all your Statutory requirements. This includes taking care of Shop and Establishment Registration along with their timely renewals, PF registration and related query handling, PT registration, ESI compliances, LWF registration, filing of various annual, half yearly and Quarterly returns before the concerned authorities.`,
  },
  {
    icon: <FiCheckCircle size={22} />,
    title: "Employee Benefits",
    content: `You too can be an employer of choice before the Gen Z, by providing a comprehensive bouquet of Employee Benefits programs before your existing as well as potential team members.

With the increase in health costs, having a proper and adequate employee benefit package for your team which goes beyond the statutory requirements, has nowadays become very critical to take care of all their medical and financial exigencies.

Our team has a rich experience towards assisting you with the best of solutions and at the best of market rates related to:
• Group Mediclaim
• Group Term Plans
• Group Personal Accident Policy

Pls feel free to connect with us to get the best of market solution`,
  },
  {
    icon: <FiShield size={22} />,
    title: "Background Verification",
    content: `Comprehensive background verification services to ensure you hire with confidence. Our thorough screening process includes employment verification, education verification, criminal record checks, reference checks, and identity verification.`,
  },
];

/* ================= MAIN COMPONENT ================= */
const OurServices = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="bg-[#F5F1FF] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
       <h2
  className="
    text-4xl md:text-5xl
    font-bold
    leading-tight md:leading-[1.2]
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
  Our Services
</h2>

          <p className="text-[#141414B2] text-base leading-relaxed md:text-right  font-semibold 
        bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent">
            "gHRig People Solutions" has a clear cut Vision, Capability and
            Expertise to provide entire bouquet of HR Services before its
            Clients, fuelled with the knowhow of the practical needs of the
            Corporate world.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onOpen={() => setActiveService(service)}
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {activeService && (
       <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">

  <div
  className="relative max-w-3xl w-full rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[85vh]"
  style={{ backgroundColor: "#FAF7F4" }}
>

            {/* CLOSE */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-[#BC263A] to-[#004A8F] text-white p-3 rounded-full">
                {activeService.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {activeService.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              {activeService.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* ================= CARD ================= */
/* ================= CARD ================= */
const ServiceCard = ({ service, onOpen }) => {
  return (
    <div
      className="
        rounded-2xl
        bg-brand-gradient
        shadow-[0_20px_50px_rgba(75,47,107,0.35)]
        hover:-translate-y-2
        transition-all duration-300
        flex flex-col
        text-white
      "
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 text-white p-3 rounded-full">
            {service.icon}
          </div>
          <h3 className="font-semibold text-lg">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={onOpen}
          className="
            text-sm font-medium
            text-white
            hover:underline
          "
        >
          Show More →
        </button>
      </div>
    </div>
  );
};


export default OurServices;
