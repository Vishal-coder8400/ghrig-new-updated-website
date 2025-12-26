"use client";

import { useState } from "react";
import Image from "next/image";


export default function CareerPage() {
  // ✅ Form Fields State
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    pin: "",
    phone: "",
    address: "",
    message: "",
  });

  // ✅ File Upload State
  const [cv, setCv] = useState<File | null>(null);

  // ✅ Loading / Success / Error UI
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ Input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const fd = new FormData();
      fd.append("fullName", form.fullName);
      fd.append("email", form.email);
      fd.append("pin", form.pin);
      fd.append("phone", form.phone);
      fd.append("address", form.address);
      fd.append("message", form.message);
      if (cv) fd.append("cv", cv);

      const res = await fetch("/api/career", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed");
      }

      setSuccess("✅ Application submitted successfully. We will contact you soon.");
      setForm({ fullName: "", email: "", pin: "", phone: "", address: "", message: "" });
      setCv(null);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 flex justify-center bg-[#F5F2FF]">
      <div className="max-w-3xl w-full px-6">

        {/* ✅ Heading */}
        <div className="text-center mb-12 px-5">
        <h1
  className="
    text-xl sm:text-xxl lg:text-3xl
    font-bold
    font_family_jakarta
    leading-tight sm:leading-[1.2]
    py-1
    bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent
  "
>
  We're always excited to hear from you!
</h1>

          <p className="text-gray-600 mt-3 text-md max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions, need assistance, or just want to say hello, feel free to reach out. Our team is always ready to help.
          </p>
        </div>

        {/* ✅ Styled Form */}
    <div
  className="
    rounded-2xl
    shadow-xl
    p-8
    bg-gradient-to-br
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
  "
>

  <h2 className="text-3xl font-bold text-center mb-8 text-white">
  Apply Now
</h2>


  <form className="space-y-6" onSubmit={handleSubmit}>

    {/* ✅ Full Name + Email + Logo */}
  <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 items-start">
      <div className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-white">Full Name*</label>
         <input
  name="fullName"
  required
  value={form.fullName}
  onChange={handleChange}
  className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
  placeholder="Enter your name"
/>

        </div>

        {/* Email */}
        <div>
         <label className="block text-sm font-medium text-white">Email*</label>
         <input
  type="email"
  name="email"
  required
  value={form.email}
  onChange={handleChange}
  className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
  placeholder="Enter your email"
/>

        </div>
      </div>

      <div className="w-[220px] sm:w-[280px] lg:w-[330px] xl:w-[380px] mx-auto self-start">
  <div className="relative w-[220px] sm:w-[280px] lg:w-[330px] xl:w-[380px] mx-auto">
  <div className="relative aspect-[9/4] flex items-start">
    <Image
      src="/assets/images/careerlogo5.png"
      alt="Career Illustration"
      fill
      className="object-contain object-top"
      priority
    />
  </div>
</div>



      </div>
    </div>

    {/* ✅ Pin + Phone */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
       <label className="block text-sm font-medium text-white">Pin Code*</label>
        <input
          name="pin"
          required
          value={form.pin}
          onChange={handleChange}
          className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
          placeholder="Enter pin code"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white">Phone Number*</label>
        <input
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
         className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
          placeholder="Enter phone number"
        />
      </div>
    </div>

    {/* ✅ Address */}
    <div>
     <label className="block text-sm font-medium text-white">Address*</label>
      <input
        name="address"
        required
        value={form.address}
        onChange={handleChange}
        className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
        placeholder="Enter your address"
      />
    </div>

    {/* ✅ Message */}
    <div>
      <label className="block text-sm font-medium text-white">Message (Optional)</label>
      <textarea
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="
    w-full
    bg-white
    border
    rounded-lg
    px-3 py-3 mt-1
    outline-none
    focus:ring-2
    focus:ring-white/60
  "
        placeholder="Write message..."
      ></textarea>
    </div>

    {/* ✅ File Upload */}
    <div>
     <label className="block text-sm font-medium text-white">Upload CV / Resume</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setCv(e.target.files?.[0] ?? null)}
      />
      {cv && (
        <div className="text-sm mt-1 text-gray-600">{cv.name}</div>
      )}
    </div>

    {/* ✅ Submit button */}
   <button
  type="submit"
  disabled={loading}
  className="
    w-full
    h-[56px]
    flex items-center justify-center
    gap-2
    bg-white
    rounded-full
    text-[18px]
    font-semibold
    text-[#7A3FA2]
    transition-all duration-300
    hover:bg-white/90
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? "Submitting..." : "Proceed"}
  {!loading && (
    <span className="text-[22px] leading-none">›</span>
  )}
</button>


    {/* ✅ Success / Error Message Below Submit */}
    {success && (
      <p className="text-green-700 text-sm bg-green-50 border border-green-200 px-4 py-3 rounded-lg mt-3">
        {success}
      </p>
    )}

    {error && (
      <p className="text-red-700 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-lg mt-3">
        {error}
      </p>
    )}

  </form>
</div>

      </div>
    </section>
  );
}
