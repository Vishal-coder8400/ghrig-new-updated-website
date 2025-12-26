"use client";
import Link from "next/link";
import Image from "next/image";

const roles = [
  {
    title: "Recruiter / Company",
    desc: "Hire top talent faster",
    slug: "recruiter",
    img: "/assets/images/recruiter-card1.png",
  },
  {
    title: "Job Seeker",
    desc: "Find & apply for jobs",
    slug: "job-seeker",
    img: "/assets/images/jobseeker-card.png",
  },
  {
    title: "Trainer",
    desc: "Teach & earn by training",
    slug: "trainer",
    img: "/assets/images/trainer-card.png",
  },
  {
    title: "Referrer",
    desc: "Refer candidates & earn",
    slug: "referrer",
    img: "/assets/images/referrer-card.png",
  },
  {
    title: "Corporate HR",
    desc: "End-to-end hiring solutions",
    slug: "corporate",
    img: "/assets/images/corporate-card.png",
  },
];

export default function RegisterPage() {
  return (
    <div className="bg-[#F5F0FA] min-h-screen">
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#3D3D3D]">
          Welcome to gHRig
        </h1>
        <p className="text-lg text-gray-500 mt-2 mb-14">
          Choose your role to continue
        </p>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {roles.slice(0, 3).map((role) => (
            <RoleCard key={role.slug} role={role} />
          ))}
        </div>

        {/* BOTTOM ROW */}
<div className="hidden lg:grid grid-cols-4 gap-10 mt-10">
  <div /> {/* left gap */}
  <RoleCard role={roles[3]} />
  <RoleCard role={roles[4]} />
  <div /> {/* right gap */}
</div>

        <p className="text-gray-500 mt-16">
          Select your role to login or register and start your journey with gHRig
        </p>
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function RoleCard({ role }) {
  return (
    <Link
      href={`/register/${role.slug}`}
      className="relative w-full max-w-[320px] h-[200px] rounded-2xl
                 bg-[linear-gradient(135deg,#8A2E55,#4B3E6D)]
                 text-white overflow-hidden shadow-lg
                 hover:-translate-y-1 transition"
    >
      {/* Logo */}

      {/* TEXT */}
      <div className="p-6 pt-16 relative z-10 text-left">
        <h3 className="text-lg font-semibold">
          {role.title}
        </h3>
        <p className="text-sm mt-2 opacity-90 max-w-[70%]">
          {role.desc}
        </p>
      </div>

      {/* IMAGE (no alt text to avoid duplication) */}
      <div className="absolute bottom-0 right-0 w-[175px] h-[175px]">
        <Image
          src={role.img}
          alt=""
          fill
        className="object-contain object-bottom"
        />
      </div>
    </Link>
  );
}
