import React from "react";
import logo from "../assets/logo.png";

export default function Navbar({ onContact, onAbout }) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4">
      {/* Left section - logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain select-none"
          />
        </div>
      </div>

      {/* Right section - buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={onContact}
          className="px-2 sm:px-4 sm:py-2 py-1 sm:text-base rounded-md border border-gray-700 bg-transparent hover:bg-white/5 transition cursor-pointer"
        >
          Contact 
        </button>

        <button
          onClick={onAbout}
          className="px-2 sm:px-4 sm:py-2 py-1 sm:text-base rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition cursor-pointer font-semibold shadow-md"
        >
          About Us
        </button>
      </div>
    </nav>
  );
}
