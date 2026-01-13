"use client";
import { useState } from "react";
import Image from "next/image";
import contact_img from "../../public/assets/images/contact_img.png";
import email from "../../public/assets/images/email.png";

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function SectionForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const fd = new FormData();
      fd.append("firstName", form.firstName);
      fd.append("lastName", form.lastName);
      fd.append("email", form.email);
      fd.append("message", form.message);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setSuccess("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full bg-[#F5F2FF] flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-6 md:py-10 px-4">
        {/* LEFT FORM SECTION */}
        <div className="bg-[#FAFAFA] w-full p-6 sm:p-8 md:p-10 rounded-xl">
       <h2
  className="
    mt-0
    text-start
    font-medium
    font_family_jakarta
    text-[20px] sm:text-[54px]
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
  We're always excited to hear from you!
</h2>


          <p className="mt-8 text-black font-normal text-[16px] text-start font-semibold 
        bg-gradient-to-r
    from-[#8E2C6D]
    via-[#7A3FA2]
    to-[#4B4DB5]
    bg-clip-text
    text-transparent">
            {" "}
            We’d love to hear from you! Whether you have questions, need assistance, or just want to say hello, feelfree to reach out. Our team is always ready to help.{" "}
          </p>

          <hr className="my-8" />

          {/* FORM */}
         <form className="space-y-6" onSubmit={handleSubmit}>
  {/* First & Last Name */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="flex flex-col space-y-2">
      <label className="text-[14px] font-semibold leading-[24px] text-[#20102B] font_family_inter">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="e.g. Jason"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
    </div>

    <div className="flex flex-col space-y-2">
      <label className="text-[14px] font-semibold leading-[24px] text-[#20102B] font_family_inter">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="e.g. Wild"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
    </div>
  </div>

  {/* Email */}
  <div className="flex flex-col space-y-2">
    <label className="text-[14px] font-semibold leading-[24px] text-[#20102B] font_family_inter">
      E-mail Address
    </label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="E-mail ID"
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      required
    />
  </div>

  {/* Message */}
  <div className="flex flex-col space-y-2">
    <label className="text-[14px] font-semibold leading-[24px] text-[#20102B] font_family_inter">
      Message
    </label>
    <textarea
      rows="5"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Write your message to us here"
      className="px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  {/* Submit */}
  <div className="flex justify-center mt-6 sm:mt-8 gap-2 flex-wrap">
    <button
      type="submit"
      disabled={loading}
      className="
        relative
        text-[13px] sm:text-[15px]
        text-white
        px-4 sm:px-5
        py-2.5 sm:py-3
        rounded-[100px]
        font-semibold
        font_family_display
        overflow-hidden
        shadow-[0_10px_25px_rgba(0,0,0,0.12)]
        disabled:opacity-60
      "
    >
      <span className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#BC263A] to-[#004A8F]" />
      <span className="absolute inset-0 rounded-[100px] bg-[linear-gradient(90deg,rgba(122,46,108,0.65),rgba(75,47,107,0.65))]" />
      <span className="absolute inset-0 rounded-[100px] border border-[rgba(142,119,228,0.6)]" />

      <span className="relative z-10">
        {loading ? "Sending..." : "Join the Movement"}
      </span>
    </button>
  </div>

  {success && <p className="text-green-600 text-center">{success}</p>}
  {error && <p className="text-red-600 text-center">{error}</p>}
</form>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6">
          <Image
            src={contact_img}
            height={600}
            width={550}
            alt="contact image"
            className="rounded-xl object-cover"
          />

          <div className="bg-[#FAFAFA] rounded-xl p-10 space-y-6">
    <p
  className="
    font-bold tracking-wide
    bg-gradient-to-r from-[#BC263A] to-[#004A8F]
    bg-clip-text text-transparent
  "
>
  GET IN TOUCH
</p>


      <div className="bg-white gap-4 flex items-center shadow-sm rounded-lg p-4">
        <div className="bg-gradient-to-r from-[#BC263A] to-[#004A8F] text-white p-3 rounded-full">
          <FiMail size={20} />
        </div>
        <div>
          <p className="font-[500] text-[16px] text-black">E-mail</p>
          <p className="font-[500] text-[15px] text-[#7C7C7C]">
            connect@ghrig.com
          </p>
        </div>
      </div>

      <div className="bg-white gap-4 flex items-center shadow-sm rounded-lg p-4">
        <div className="bg-gradient-to-r from-[#BC263A] to-[#004A8F] text-white p-3 rounded-full">
          <FiMapPin size={20} />
        </div>
        <div>
          <p className="font-[500] text-[16px] text-black">Address</p>
          <p className="font-[500] text-[15px] text-[#7C7C7C]">
            A 100, A Block, Sector 58, Noida, U.P. 201301
          </p>
        </div>
      </div>

      <div className="bg-white gap-4 flex items-center shadow-sm rounded-lg p-4">
        <div className="bg-gradient-to-r from-[#BC263A] to-[#004A8F] text-white p-3 rounded-full">
          <FiPhone size={20} />
        </div>
        <div>
          <p className="font-[500] text-[16px] text-black">Phone</p>
          <p className="font-[500] text-[15px] text-[#7C7C7C]">
            +91 97118 25377
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
