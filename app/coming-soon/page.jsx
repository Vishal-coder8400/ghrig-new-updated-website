"use client";

import { useState } from "react";

export default function ComingSoonPage() {
     const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch("/api/coming-soon", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("You're on the list! 🚀");
      setEmail("");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen w-full bg-[#FAF9F7] flex flex-col items-center justify-between px-4 py-10">

      {/* TOP BRAND */}
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="flex items-center gap-2">
         <div
  className="
    h-10
    px-4
    rounded-xl
    flex items-center justify-center
    bg-gradient-to-br
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    text-white
    font-bold
    text-sm
    whitespace-nowrap
  "
>
  gHRig
</div>

        </div>

        <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-400 uppercase">
          A New Vision Awaits
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center text-center max-w-2xl gap-8">

        <h1
          className="
            font-serif
            text-[56px] sm:text-[72px]
            leading-[1.05]
            bg-gradient-to-r
            from-[#8E2C6D]
            via-[#7A3FA2]
            to-[#4B4DB5]
            bg-clip-text
            text-transparent
          "
        >
          Coming <br /> Soon
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          We're meticulously crafting a digital experience that redefines
          elegance. Be the first to witness the intersection of art and utility.
        </p>

        {/* EMAIL BOX */}
        <div className="flex w-full max-w-md rounded-xl bg-white shadow-lg overflow-hidden">
          <input
            type="email"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
          <button
           onClick={handleSubmit}
            disabled={loading}
            className="
              px-6
              text-sm
              font-semibold
              text-white
              bg-gradient-to-r
              from-[#8E2C6D]
              via-[#7A3FA2]
              to-[#4B4DB5]
              hover:opacity-90
            "
          >
            {loading ? "Sending..." : "Get Notified"}
          </button>
            {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-sm font-semibold text-green-600">
            {success}
          </p>
        )}
        </div>

        {/* DOT INDICATOR */}
        <div className="flex gap-2 mt-2">
          <span className="h-3 w-3 rounded-full   bg-gradient-to-r
              from-[#8E2C6D]
              via-[#7A3FA2]
              to-[#4B4DB5]" />
          <span className="h-3 w-3 rounded-full   bg-gradient-to-r
              from-[#8E2C6D]
              via-[#7A3FA2]
              to-[#4B4DB5]" />
          <span className="h-3 w-3 rounded-full   bg-gradient-to-r
              from-[#8E2C6D]
              via-[#7A3FA2]
              to-[#4B4DB5]" />
        </div>

        <p className="text-xs text-gray-500 font-semibold">
          Join <span className="font-semibold">2,500+</span> visionaries awaiting the launch.
        </p>
      </div>
    </section>
  );
}
