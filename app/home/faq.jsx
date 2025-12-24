"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Plus, Minus } from "lucide-react";

/* ================= FAQ DATA ================= */
const faqData = {
  General: [
     {
        q: "What is ProConnect?",
        a: "ProConnect is a digital recruitment and training marketplace that connects recruiters, corporate teams, job seekers, and trainers on one platform.",
      },
      {
        q: "How do I create an account?",
        a: "Click the Sign Up button, choose your role, enter your details, and verify your email or phone number to get started.",
      },
      {
        q: "Is the platform free to use?",
        a: "Yes, basic usage is free. Additional premium features like candidate database access may require a subscription.",
      },
      {
        q: "Which devices are supported?",
        a: "ProConnect works seamlessly on desktops, tablets, and mobile devices.",
      },
      {
        q: "Who can use ProConnect?",
        a: "Recruiters, Corporate HR teams, Trainers, and Job Seekers can all use ProConnect based on their role.",
      },
  ],

  "For Corporate": [
     {
        q: "How is gHRig different from other Sourcing platforms?",
        a: "We are amongst the first to take this initiative towards setting up an Online Recruitment / Training Marketplace, where you get plenty of relevant options within a short span of time and with far better commercials compared to any other player. We stand up for Speed, Quality and best of Rates in the market.",
      },
      {
        q: "What are the main Features available at gHRig platform as an Employer?",
        a: "Real time Dashboard bringing transparency to the entire Hiring process with progress state of each candidate. As an Employer, you can post your open vacancies / Trainer requirement mandates freely at our platform. Also, you can have access to the shared resumes 24/7 as uploaded and validated by our TA and Quality team.",
      },
      {
        q: "How often will I get notifications?",
        a: "You will receive notifications on the following occasions:\na. Upon each successful posting of Jobs\nb. Upon submission of resumes by our Team\nc. Upon joining of any selected candidate",
      },
      {
        q: "Do I get a mobile app for easy access?",
        a: "Yes, mobile app of our platform is available in Android as well as iOS, where you get regular notifications.",
      },
      {
        q: "What type of HR Staffing solution does gHRig provide?",
        a: "gHRig People Solutions provides Permanent Staffing solutions along with Trainer requirements on short term assignments across various Sectors and Functions.",
      },
  ],

  "For Recruiters": [
    {
    q: "How is gHRig different from other Sourcing platforms ?",
    a: "We are amongst the first to take this initiative towards setting up an Online Recruitment Marketplace, where you get plenty of relevant Gig options related to Recruitment where you can work upon basis your skillsets and strengths, right at the comfort of your hometown, without any hastles of daily commute and at your available time of the day which you decide.\nWe stand up for Quality work mandates from Professional Organizations."
  },
  {
    q: "What are the main Features available at gHRig platform as a Recruiter?",
    a: "Real time Dashboard bringing transparency to the entire Hiring process with progress state of each candidate.\nAs a gHRig Recruiter, you can have a ready platform with pool pf open positions to work upon at the comfort of your home, your available time of the day with no hastles of daily travel.\nThe resumes shared from your end shall be considered as yours in the database for a tenure of 6 months from the date of submission, and you shall get the benefit of same in case the candidate is placed with our Client within a span of 6 months from the date of submission."
  },
  {
    q: "How often will I get notifications?",
    a: "You will receive notifications on below occasions:\na. Upon each successful posting of candidates from your end.\nb. Upon approval / rejection of resumes by our system / Quality Team\nc. Upon joining of any selected candidate\nd. Upon release of payment"
  },
  {
    q: "Can a Recruiter work on multiple Open positions ?",
    a: "Off course yes. As a platform, we have no restrictions to work on any number of open positions."
  },
  {
    q: "Can the Recruiter operate from home and anywhere in India ?",
    a: "Yes, as a gHRig Recruiter, you have the flexibility to operate from anywhere at India and at your own preferred time.\nYou just need to have your own computer / laptop, phone and Internet connectivity."
  },
  ],

  "For Job Seekers": [
    {
        q: "How do I apply for a job?",
        a: "Browse available jobs, select the one you like, click Apply, upload your resume, and submit your application.",
      },
      {
        q: "Is my personal information kept private?",
        a: "Your data is encrypted and only shared with recruiters when you apply for a job.",
      },
      {
        q: "How do I track my applications?",
        a: "Go to Dashboard → Applications to check the status such as Submitted, Shortlisted, or Interview Scheduled.",
      },
      {
        q: "Can I upload multiple resumes?",
        a: "Yes, you can upload multiple resumes and choose which one to use for each application.",
      },
      {
        q: "Do I need to pay to apply?",
        a: "No, job seekers can apply to all jobs for free.",
      },
  ],

  "For Trainers": [
 {
        q: "How can I list my training courses?",
        a: "Go to Trainer Dashboard → Add Course and enter the course title, price, duration, and training format.",
      },
      {
        q: "How do I get paid for my courses?",
        a: "Payments are processed securely, and payouts are transferred directly to your registered bank account.",
      },
      {
        q: "Can I conduct live training?",
        a: "Yes, trainers can host live sessions using Zoom, Google Meet, or the integrated virtual classroom.",
      },
      {
        q: "How do students enroll?",
        a: "Students browse the training marketplace and enroll using the Buy Now or Register buttons.",
      },
      {
        q: "Can I offer discounts?",
        a: "Yes, you can create promotional codes and discounted pricing for your courses.",
      },
  ],
};

/* ================= TAB CONFIG ================= */
const TABS = [
  { label: "Recruiters", key: "For Recruiters" },
  { label: "Job Seeker", key: "For Job Seekers" },
  { label: "Trainer", key: "For Trainers" },
  { label: "Corporate", key: "For Corporate" },
  { label: "Referrer", key: "General" },
];

export const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const faqsToShow = faqData[activeTab.key]?.slice(0, 5) || [];

  return (
    <section className="w-full bg-white py-10 sm:py-[50px]">
      <div className="max-w-[1152px] mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-[72px]">
        {/* LEFT CONTENT */}
        <div className="max-w-full lg:max-w-[420px]">
          <h2
            className="
            text-[26px] sm:text-[30px] lg:text-[36px]
            font-semibold
            leading-[34px] sm:leading-[40px] lg:leading-[44px]
            tracking-[-1.2px]
            text-black
          "
          >
            Frequently Asked Question
          </h2>

          <p className="mt-4 text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] text-[#141414b2]">
            You can return any item within 30 days of purchase as long as it's
            in its original condition with tags still attached. Simply contact
            our customer service team, and they will guide you through the
            process. Please note that certain items are non-returnable.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* TABS */}
          <div className="flex gap-5 overflow-x-auto whitespace-nowrap border-b border-[#E6ECF5] mb-0">
            {TABS.map((tab) => {
              const isActive = activeTab.label === tab.label;

              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-[10px] text-[13px] sm:text-[14px] transition-all ${
                    isActive
                      ? "text-[#6F2F4E] font-semibold border-b-2 border-[#6F2F4E]"
                      : "text-[#0F172A] font-medium hover:text-[#334155]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* FAQ CARD */}
          <div className="bg-[#F8FBFF] rounded-[12px] px-4 sm:px-6 lg:px-[32px] pt-4 pb-6 sm:pb-[28px]">
            <Accordion
              type="single"
              collapsible
              className="space-y-5 sm:space-y-[26px]"
            >
              {faqsToShow.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={String(index)}
                  className="border-none"
                >
                  <AccordionTrigger className="hover:no-underline py-0 [&>svg]:hidden">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-left text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-semibold text-[#0F172A]">
                        {item.q}
                      </span>

                      <span className="ml-4 text-[#0F172A]">
                        <Plus className="h-[18px] w-[18px] data-[state=open]:hidden" />
                        <Minus className="h-[18px] w-[18px] hidden data-[state=open]:block" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pt-[10px]">
                    <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-[#475569] whitespace-pre-line">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
