import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
const roles = [
  {
    title: "People > processes",
    description: "Human-Centered First",
    image: "/assets/images/people-process.png",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/assets/images/people-process.png",
  },
  {
    title: "Transparency Matters",
    description: "For candidates, clients, and collaborators",
    image: "/assets/images/transparency-matters.png",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/assets/images/transparency-matters.png",
  },
  {
    title: "Design for Outcomes",
    description: "UI is not just pretty — it’s functional",
    image: "/assets/images/design-outcome.png",
    color: "bg-green-50",
    iconColor: "text-green-600",
    href: "/assets/images/design-outcome.png",
  },
  {
    title: "Fluid, Not Fixed",
    description: "Roles evolve. So do we.",
    image: "/assets/images/fluid-not-fixed.png",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/assets/images/fluid-not-fixed.png",
  },
  {
    title: "Feedback is Oxygen",
    description: "Every feature starts with a conversation",
    image: "/assets/images/feedback-oxygen.png",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    href: "/assets/images/feedback-oxygen.png",
  },
];
export default function what_stand() {
  return (
    <div>
      <div className=" bg-[#EEE9FF]">
        <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full py-20">
          <div className="col-span-1">
            <h2 className="sm:text-start text-start text-black sm:leading-16 font-medium sm:text-[64px] leading-[44px] text-[39px] font_family_jakarta">
              What We <br className="hidden lg:block" />
              Stand For{" "}
            </h2>
          </div>
          <div className="col-span-1">
            <p className="text-[#141414B2] text-start mt-3 sm:text-end font-medium text-[16px] font_family_display">
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt.Mollit in laborum tempor Lorem
              incididunt irure. Aute eu ex ad sunt.
            </p>
          </div>
        </div></div>
        <div className="flex flex-col items-center gap-16 pb-16 px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl cursor-pointer">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="group flex flex-col items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg">
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

                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
