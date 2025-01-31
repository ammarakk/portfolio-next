import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white font-sans">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Brand */}
        <div className="text-lg font-semibold">
          <Link href="/">AMMAR Portfolio</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer hover:text-sky-400">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-sky-400">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-sky-400">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-sky-400">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="cursor-pointer hover:text-sky-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label
            htmlFor="menu-toggle"
            className="block cursor-pointer p-2 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </label>
          
          {/* Mobile Menu */}
          <div className="absolute right-0 top-16 w-48 bg-indigo-700 shadow-lg rounded-md z-10 p-4 hidden transition-transform duration-300 ease-in-out transform scale-95"
               id="menu-content">
            <ul className="flex flex-col space-y-4 text-center">
              <li className="cursor-pointer hover:text-sky-400">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-400">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-400">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-400">
                <Link href="/skills">Skills</Link>
              </li>
              <li className="cursor-pointer hover:text-sky-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
