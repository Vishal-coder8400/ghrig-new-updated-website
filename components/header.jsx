"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <header
      className={`
        w-full top-0 left-0 z-50 text-white
        py-4
        ${
          isHome
            ? "absolute bg-transparent"
            : "relative bg-[linear-gradient(180deg,#7B2F4E_0%,#6F365F_32%,#5F3F73_68%,#4B3E6D_100%)]"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-white rounded-full px-3 py-1 shadow-sm">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              width={68}
              height={34}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {[
              { label: "Home", href: "/home" },
              { label: "About gHRig", href: "/about_us" },
              { label: "Services we Offer", href: "/services" },
              { label: "Career @gHRig", href: "/career" },
              { label: "Contact Us", href: "/contact_us" },
            ].map((item) => (
              <li
                key={item.href}
                className="font_family_inter text-[14px] leading-[22px] cursor-pointer
                           transition-colors hover:text-white/80"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <Link href="/login">
            <div
              className="
                relative flex items-center justify-center
                h-[44px] min-w-[120px] px-8
                rounded-full text-white text-[16px] font-medium
                overflow-hidden
                shadow-[0_10px_25px_rgba(0,0,0,0.18)]
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#BC263A] to-[#004A8F]" />
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(122,46,108,0.7),rgba(75,47,107,0.7))]" />
              <span className="absolute inset-0 rounded-full border border-white/25" />
              <span className="relative z-10">Login</span>
            </div>
          </Link>

          <Link
            href="/register"
            className="
              px-7 py-2.5
              font_family_inter font-medium
              text-[15px]
              bg-white rounded-full
              text-[#6F3D8F]
              hover:text-[#4B2F6B]
              transition-colors
            "
          >
            Register
          </Link>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div
    className="
      md:hidden
      absolute top-full left-0
      w-full
      bg-white
      z-[9999]
      px-6 pt-4 pb-6
      shadow-lg
    "
  >
    <ul className="flex flex-col gap-4 text-black font-medium">
      <Link href="/home" onClick={() => setOpen(false)}>Home</Link>
      <Link href="/about_us" onClick={() => setOpen(false)}>About gHRig</Link>
      <Link href="/services" onClick={() => setOpen(false)}>Services we Offer</Link>
      <Link href="/career" onClick={() => setOpen(false)}>Career @gHRig</Link>
      <Link href="/contact_us" onClick={() => setOpen(false)}>Contact Us</Link>
      <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
      <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
    </ul>
  </div>
)}

    </header>
  );
}
