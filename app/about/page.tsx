"use client";

import Image from "next/image";
import Navbar from "../navbar";

export default function Home() {
  return (
    <div className="h-screen bg-notebook flex flex-col items-center text-black p-4 sm:p-6">
      {/* Navbar */}
      <div className="pt-2">
      <Navbar />
      </div>
      

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">A Bit About Me</h1>
          <p className="text-gray-600 text-xs sm:text-sm">15 Dec, 2024</p>
        </div>

        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/images/pfp.png"
            alt="Profile picture"
            width={200}
            height={200}
            className="rounded-md shadow-md border border-gray-300"
          />
        </div>

        {/* Description */}
        <div className="max-w-xs sm:max-w-2xl text-justify text-gray-800 leading-relaxed p-4">
          <p className="text-sm sm:text-base">
            I am Arjun Santhosh, and this summer I decided to learn programming properly.
            This included web-development, app-development, and other scripting languages
            like Python. Admittedly, I was not able to explore too deeply into these topics;
            however...
          </p>
        </div>
      </div>
    </div>
  );
}
