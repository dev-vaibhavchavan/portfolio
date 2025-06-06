import React from "react";

const Projects = () => {
  return (
    <div className="relative top-30 h-[700px] w-full flex flex-col gap-10 items-center justify-center">
      <h1 className="font-extrabold text-5xl">PROJECTS</h1>
      <div className="h-[200px] w-[90%] flex items-center justify-around">
        <div className="h-[40px] w-[40px] bg-purple-700 rounded-[50%] font-bold text-4xl flex items-center justify-center">
          1
        </div>
        <div className="w-[60%]">
          <h2 className="text-3xl font-extrabold relative bottom-3">meety</h2>
          <p>
            I have developed a real-time chat and video communication web
            application using the MERN stack, incorporating technologies such as
            WebSockets, WebRTC, and Toastify. The platform enables seamless
            peer-to-peer video calls and instant messaging with real-time
            updates, delivering a responsive and engaging user experience.
            <br />
            <a
              className="text-blue-500"
              target="_blank"
              href="https://google.com">
              visit project
            </a>
          </p>
        </div>
      </div>
      <div className="h-[200px] w-[90%] flex items-center justify-around">
        <div className="h-[40px] w-[40px] bg-purple-700 rounded-[50%] font-bold text-4xl flex items-center justify-center">
          2
        </div>
        <div className="w-[60%]">
          <h2 className="text-3xl font-extrabold relative bottom-3">casholine</h2>
          <p>
           I developed a location-based web application that connects people nearby—such as at ATMs or banks—who are looking to exchange physical cash for digital payments and vice versa. Built using the MERN stack, the app includes robust authentication and additional features to ensure secure and seamless transactions. This project reflects my focus on solving real-world problems using scalable and user-friendly technologies.
            <br />
            <a
              className="text-blue-500"
              target="_blank"
              href="https://google.com">
              visit project
            </a>
          </p>
        </div>
      </div>
      <div className="h-[200px] w-[90%] flex items-center justify-around">
        <div className="h-[40px] w-[40px] bg-purple-700 rounded-[50%] font-bold text-4xl flex items-center justify-center">
          3
        </div>
        <div className="w-[60%]">
          <h2 className="text-3xl font-extrabold relative bottom-3">portfolio</h2>
          <p>
           I developed a personal portfolio project using React, Tailwind CSS, GSAP, and additional libraries such as Locomotive Scroll and ScrollTrigger. Throughout the development process, I gained valuable experience with animation, smooth scrolling, and modern UI design. This project greatly enhanced my understanding of frontend technologies, and I’m excited to continue exploring and building with these and other tech stacks.
            <br />
            <a
              className="text-blue-500"
              target="_blank"
              href="https://google.com">
              visit project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

