"use client";
import { useParams } from "next/navigation";

export default function RoleRegisterPage() {
  const { role } = useParams();

  const roleTitleMap = {
    recruiter: "Recruiter / Company Registration",
    "job-seeker": "Job Seeker Registration",
    trainer: "Trainer Registration",
    corporate: "Corporate HR Registration",
    referrer: "Referrer Registration",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0FA]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {roleTitleMap[role] || "Register"}
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded px-4 py-3"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded px-4 py-3"
          />

          <input type="hidden" value={role} />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
