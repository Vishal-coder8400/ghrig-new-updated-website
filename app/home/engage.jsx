import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const roles = [
  {
    title: "Trainer",
    image: "/assets/images/trainer-about.png",
    href: "https://ghrig-new-update.vercel.app/trainer/log-in",
  },
  {
    title: "Job Seeker",
    image: "/assets/images/jobSeeker.png",
    href: "https://ghrig-new-update.vercel.app/log-in",
  },
  {
    title: "HR Recruiter",
    image: "/assets/images/jobRecruiter.png",
    href: "https://ghrig-new-update.vercel.app/recruiter/log-in",
  },
  {
    title: "Job Referrers",
    image: "/assets/images/jobReferrers.png",
    href: "https://ghrig-new-update.vercel.app/super-admin/log-in",
  },
  {
    title: "Client/Corporate",
    image: "/assets/images/client.png",
    href: "https://ghrig-new-update.vercel.app/corporate/log-in",
  },
];

export const Engage = () => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 px-4 py-8 sm:py-10 w-full bg-[#F5F1FF]">
      <header className="flex flex-col items-center gap-4 sm:gap-6 max-w-4xl text-center">
        <h2 className="text-[28px] sm:text-4xl md:text-5xl font-bold text-gray-900">
          Choose How You Engage with GHRig
        </h2>
        <p className="text-[15px] sm:text-lg text-gray-600 max-w-2xl">
          Click on your role below to proceed to the respective login page and have a great journey with gHRig
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-7xl">
        {roles.map((role, index) => (
          <Card
            key={index}
            className="
              group
              flex flex-col
              items-center
              gap-5 sm:gap-6
              p-5 sm:p-6
              rounded-2xl
              bg-gradient-to-r
              from-[#8E2C6D]
              via-[#7A3FA2]
              to-[#4B4DB5]
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >
            {/* ICON – NO BG */}
  <div className="h-[110px] flex items-center justify-center">
  <img
    src={role.image}
    alt={role.title}
    className="max-h-[78px] sm:max-h-[88px] w-auto object-contain"
  />
</div>




            <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
              <h3 className="text-[18px] sm:text-xl font-semibold text-white">
                {role.title}
              </h3>

              <a
                href={role.href}
                target="_blank"
                className="
                  flex items-center justify-center gap-2
                  h-[32px] sm:h-[35px]
                  px-[18px] sm:px-[21px]
                  rounded-[100px]
                  bg-white
                  text-[#7A3FA2]
                  text-[13px] sm:text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:text-[#6F2E91]
                "
              >
                Proceed
                <ChevronRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
