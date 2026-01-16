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
    title: " gHRig Recruiter",
    image: "/assets/images/jobRecruiter.png",
    href: "https://portal.ghrig.in/recruiter/log-in",
  },
  {
    title: "Job Referrers",
    image: "/assets/images/jobReferrers.png",
    href: "https://ghrig-new-update.vercel.app/super-admin/log-in",
  },
  {
    title: "Client/Corporate",
    image: "/assets/images/client.png",
    href: "https://portal.ghrig.in/corporate/log-in",
  },
];

export const Engage = () => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-16 px-4 py-8 sm:py-10 w-full bg-[#F5F1FF]">
      <header className="flex flex-col items-center gap-4 sm:gap-6 max-w-4xl text-center">
  <h2
  className="
    text-[28px] sm:text-4xl md:text-5xl
    font-bold
    text-center
    leading-tight md:leading-[1.2]
    py-1
    
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  Choose How You Engage with  gHRig
</h2>

        <p className="text-[15px] sm:text-lg text-gray-600 max-w-2xl
        font-semibold 
        bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent">
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
              p-4 sm:p-5
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
<div className="h-[110px] sm:w-[170px] sm:h-[170px] flex items-start justify-center pt-4 overflow-hidden">
  <img
    src={role.image}
    alt={role.title}
    className={`
      w-full h-full object-contain
      transition-transform duration-300
      ${
        role.title === "Trainer" || role.title === "Job Referrers"
          ? "scale-170"
          : role.title === "Client/Corporate"
          ? "scale-85"
          : "scale-100"
      }
      group-hover:scale-110
    `}
  />
</div>




            <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
              <h3 className="text-[18px] sm:text-xl font-semibold text-white">
                {role.title}
              </h3>

          <a
  href={
    role.title === " gHRig Recruiter"
      ? "https://ghrig-new-update.vercel.app/recruiter/log-in"
      : role.title === "Client/Corporate"
      ? "https://ghrig-new-update.vercel.app/corporate/log-in"
      : "/coming-soon"
  }
  className="
    relative
    flex items-center justify-center gap-2
    h-[32px] sm:h-[35px]
    px-[18px] sm:px-[21px]
    rounded-[100px]
    text-white
    text-[13px] sm:text-sm
    font-medium
    overflow-hidden
    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
  "
>


                {/* BORDER */}
                <span className="
                  absolute inset-0
                  rounded-[100px]
                  border border-[rgba(142,119,228,0.6)]
                " />

                {/* CONTENT */}
                <span className="relative z-10 flex items-center gap-2">
                  Proceed
                  <ChevronRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
