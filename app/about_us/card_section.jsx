import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card"

const roles = [
  {
    title: "Trainer",
    description: "Upskill professionals with expert-led programs",
    image: "/assets/images/trainer-about.png",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/trainer/log-in",
  },
  {
    title: "Job Seeker",
    description: "Discover opportunities that match your skills",
    image: "/assets/images/job_seeker_about.png",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "https://job-portal-frontend-ghrig-d1pi.vercel.app/job-seeker/log-in",
  },
  {
    title: "HR Recruiter",
    description: "Find top talent for your organization",
    image: "/assets/images/recruiter-about-section.png",
    color: "bg-green-50",
    iconColor: "text-green-600",
    href: "/assets/images/recruiter-about-section.png",
  },
  {
    title: "Job Referrers",
    description: "Earn rewards by connecting great people",
    image: "/assets/images/referal-abput.png",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/assets/images/referal-abput.png",
  },
  {
    title: "Client/Corporate",
    description: "Access premium recruitment services",
    image: "/assets/images/clent-review.png",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/assets/images/clent-review.png",
  },
];

export const Card_section = () => {
  return (
    <section className="flex flex-col items-center gap-16 pb-16 px-4 w-full">
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl cursor-pointer">
        {roles.map((role, index) => (
          <Card
            key={index}
            className="group flex flex-col items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="w-30 h-23 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                alt={role.title}
                src={role.image}
              />
            </div>

            <CardContent className="flex flex-col items-left gap-4 p-0 text-center">
              <h3 className="text-[20px] text-start font_family_jakarta font-semibold text-[#4d4d4d] ">
                {role.title}
              </h3>
               <p className="text-[16px] text-[#4d4d4d] text-start font-normal leading-5 font_family_jakarta ">
                {role.description}
              </p> 

              <a
                href={role.href}
                className="flex items-center justify-start gap-2.5 w-full bg-[#6945ED]  text-white rounded-full px-6 py-2.5 transition-all duration-300 group-hover:shadow-lg"
                target="_blank"
              >
                
                <span className="font-medium">Proceed</span>
                <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};