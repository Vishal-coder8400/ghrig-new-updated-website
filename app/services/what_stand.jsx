import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  FiUsers,
  FiEye,
  FiPenTool,
  FiRefreshCw,
  FiMessageSquare,
} from "react-icons/fi";

const roles = [
  {
    title: "People > processes",
    description: "Human-Centered First",
    icon: <FiUsers size={22} />,
    href: "/assets/images/people-process.png",
  },
  {
    title: "Transparency Matters",
    description: "For candidates, clients, and collaborators",
    icon: <FiEye size={22} />,
    href: "/assets/images/transparency-matters.png",
  },
  {
    title: "Design for Outcomes",
    description: "UI is not just pretty — it’s functional",
    icon: <FiPenTool size={22} />,
    href: "/assets/images/design-outcome.png",
  },
  {
    title: "Fluid, Not Fixed",
    description: "Roles evolve. So do we.",
    icon: <FiRefreshCw size={22} />,
    href: "/assets/images/fluid-not-fixed.png",
  },
  {
    title: "Feedback is Oxygen",
    description: "Every feature starts with a conversation",
    icon: <FiMessageSquare size={22} />,
    href: "/assets/images/feedback-oxygen.png",
  },
];

export default function what_stand() {
  return (
    <div className="bg-[#EEE9FF]">
      {/* HEADER */}
      <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full py-20">
          <div>
            <h2
  className="
    text-start sm:text-start
    font-medium
    font_family_jakarta
    text-[39px] sm:text-[64px]
    leading-tight sm:leading-[1.1]
    py-1
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  What We <br className="hidden lg:block" />
  Stand For
</h2>

          </div>
        
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-col items-center gap-16 pb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="
                group
                flex flex-col items-start gap-6 p-6
                bg-brand-gradient
                rounded-2xl
                shadow-[0_20px_50px_rgba(75,47,107,0.35)]
                hover:-translate-y-2
                transition-all duration-300
                border-none
                text-white
              "
            >
              {/* ICON */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center rounded-full
                  bg-white/20
                  group-hover:scale-105
                  transition-transform duration-300
                "
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                  {role.icon}
                </div>
              </div>

              {/* CONTENT */}
              <CardContent className="flex flex-col gap-3 p-0 text-left">
                <h3 className="text-[20px] font-semibold font_family_jakarta text-white">
                  {role.title}
                </h3>
                <p className="text-[16px] text-white/90 leading-5 font_family_jakarta">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
