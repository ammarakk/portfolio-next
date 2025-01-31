"use client";

import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import Ammar from "../public/Images/Ammar.png";
import About from "./about/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-cyan-500 text-white font-sans flex flex-col">
        <title>Ammar Portfolio (Home)</title>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-16 py-12 md:py-24 space-y-8">
          {/* Profile Image */}
          <Image
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg transition-transform transform hover:scale-105 duration-300 mb-8"
            src={Ammar}
            alt="Profile Ammar"
          />

          {/* Name with Animated Effect */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide animate-[typing_3s_steps(40,_end)_1s_forwards] overflow-hidden whitespace-nowrap border-r-4 border-white pr-2">
            AMMAR AHMED KHAN
          </h2>

          {/* Intro Text */}
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl text-gray-200 px-4">
            Hi, I’m a passionate Full-Stack Web Developer committed to
            creating beautiful, functional digital experiences.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <a
              href="/projects"
              className="bg-white text-indigo-800 py-2 px-6 rounded-full font-semibold shadow-md hover:bg-indigo-100 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </main>

        {/* Sections */}
        <div className="space-y-12 md:space-y-16">
      
        </div>

        {/* Footer */}
        <Footer />
      </div>
  
  );
}
