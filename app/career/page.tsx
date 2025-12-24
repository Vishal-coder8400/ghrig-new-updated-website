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
    <section className="py-10 flex justify-center">
      <div className="max-w-3xl w-full px-6">

        {/* ✅ Heading */}
        <div className="text-center mb-12 px-5">
          <h1 className="text-xl sm:text-xxl lg:text-3xl font-bold text-gray-900 leading-tight font_family_jakarta">
            We're always excited to hear from you!
          </h1>
          <p className="text-gray-600 mt-3 text-md max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have questions, need assistance, or just want to say hello, feel free to reach out. Our team is always ready to help.
          </p>
        </div>

        {/* ✅ Styled Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2
            className="
    text-3xl
    font-bold
    text-center
    mb-8
    bg-gradient-to-r
    from-[#BC263A]
    to-[#004A8F]
    bg-clip-text
    text-transparent
  "
          >
            Apply Now
          </h2>


          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* ✅ Full Name + Email + Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 items-center">
              <div className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name*</label>
                  <input
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="w-[220px] sm:w-[280px] lg:w-[330px] xl:w-[380px] mx-auto self-start">
                <Image
                  src="/assets/images/careerlogo4.png"
                  alt="Career Illustration"
                  width={900}
                  height={500}
                  className="object-contain w-full h-auto scale-90 translate-y-2"
                  priority
                />
              </div>




            </div>

            {/* ✅ Pin + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Pin Code*</label>
                <input
                  name="pin"
                  required
                  value={form.pin}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                  placeholder="Enter pin code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* ✅ Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Address*</label>
              <input
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                placeholder="Enter your address"
              />
            </div>

            {/* ✅ Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 mt-1 focus:ring-2 outline-none focus:ring-[#0A1B6F50]"
                placeholder="Write message..."
              ></textarea>
            </div>

            {/* ✅ File Upload */}
            <div>
              <label className="block text-sm mb-1 font-medium">Upload CV / Resume</label>
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
    relative
    w-full
    flex items-center justify-center
    h-[56px]                /* matches your original py-4 */
    rounded-lg
    text-white text-lg
    font-semibold
    overflow-hidden
    transition
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
            >
              {/* BASE GRADIENT */}
              <span
                className="
      absolute inset-0
      bg-gradient-to-r
      from-[#BC263A]
      to-[#004A8F]
    "
              />

              {/* PURPLE SOFT OVERLAY */}
              <span
                className="
      absolute inset-0
      bg-[linear-gradient(90deg,rgba(122,46,108,0.65),rgba(75,47,107,0.65))]
    "
              />

              {/* INNER BORDER */}
              <span
                className="
      absolute inset-0
      rounded-lg
      border border-[rgba(142,119,228,0.6)]
    "
              />

              {/* BUTTON TEXT */}
              <span className="relative z-10">
                {loading ? "Submitting..." : "Submit Application"}
              </span>
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
