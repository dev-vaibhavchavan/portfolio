import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center w-[100%] h-[1000px] relative top-[220px]">
      <h1 className="font-extrabold text-5xl mb-10">WORK EXPERIENCE</h1>
      <div className="flex justify-center items-center-safe gap-20 relative top-[30px]  h-[200px] w-[1100px]">
        <h2 className="relative left-[70px]">Jan 2025 - March 2025</h2>
        <div className="h-5 w-5 bg-white rounded-[50%]"></div>
        <div className="bg-white h-[250px] w-[600px] rounded-2xl">
          <h1 className="text-black font-extrabold font-sans text-xl relative left-6 top-2">
            Chat App - Full-Stack Developer
          </h1>
          <div className="relative left-6 top-4 w-[570px] flex flex-col gap-2">
            <h3 className="text-black font-semibold">
              1. Tech Stack: React, Node.js, Socket.IO, WebRTC, MongoDB
            </h3>
            <h3 className="text-black font-semibold">
              2. Built a real-time video and text chat platform (like Omegle)
              from scratch.
            </h3>
            <h3 className="text-black font-semibold">
              3. Implemented peer-to-peer video calls using WebRTC and dynamic
              room creation with Socket.IO.
            </h3>
            <h3 className="text-black font-semibold">
              4. Designed a responsive UI using Tailwind CSS for mobile and
              desktop.
            </h3>
            <h3 className="text-black font-semibold">
              5. Achieved 5s connection time between users, tested with 50+
              concurrent users.
            </h3>
          </div>
        </div>
      </div>
      <div className="z-10 w-[560px] h-[3px] bg-white rotate-90 relative right-[220px] top-[215px]" />
      <div className="flex justify-center items-center-safe gap-20 relative top-[330px]  h-[200px] w-[1100px]">
        <h2 className="relative left-[70px] top-[54px]">May 2025 - june 2025</h2>
        <div className="h-5 w-5 bg-white rounded-[50%] relative top-[55px] left-[3px]"></div>
        <div className="bg-white h-[250px] w-[600px] rounded-2xl">
          <h1 className="text-black font-extrabold font-sans text-xl relative left-6 top-2">
            Portfolio Website - Front-end Developer
          </h1>
          <div className="relative left-6 top-4 w-[570px] flex flex-col gap-2">
            <h3 className="text-black font-semibold">
              1. Tech Stack: React, GSAP, ScrollTrigger, Locomotive Scroll,
              Tailwind CSS
            </h3>
            <h3 className="text-black font-semibold">
              2. Built a responsive and visually rich portfolio site using React
              and Tailwind CSS.
            </h3>
            <h3 className="text-black font-semibold">
              3. Added scroll-based animations with GSAP and ScrollTrigger.
            </h3>
            <h3 className="text-black font-semibold">
              4. Used Locomotive Scroll for smooth scrolling and parallax
              effects.
            </h3>
            <h3 className="text-black font-semibold">
              5. Optimized performance with 90+ Lighthouse scores across key
              metrics.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

