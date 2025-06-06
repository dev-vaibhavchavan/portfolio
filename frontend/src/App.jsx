import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useTimeline } from "./context/TimelineContext";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Slider from "./components/Slider";
import Projects from "./components/Projects";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  let textRef = useRef();
  let tl = useTimeline();

  useGSAP(() => {
    tl.from(
      textRef.current,
      {
        y: 20,
        duration: 0.6,
        delay: 0.5,
        ease: "power3.out",
        opacity: 0,
        stagger: 2,
      },
      0
    );
  });

  return (
    <div>
      <div
        ref={textRef}
        className="flex items-center justify-center poppins-extrabold font-black h-[100px] text-7xl">
        PORTFOLIO
      </div>
      <div className="flex flex-row w-screen h-[600px] relative">
        <div className=" w-[30%] flex justify-center items-center relative z-20">
          <Image />
        </div>
        <div className="w-[70%] flex flex-col justify-center items-center">
          <Navbar />
          <Introduction />
        </div>
      </div>
      <div className="skills w-[80%] h-[50px] flex items-center justify-around relative left-[126.6px] opacity-0">
        <h3 className="px-5 py-3 rounded-sm bg-purple-700">
          Good Problem Solver
        </h3>
        <h3 className="px-5 py-3 rounded-sm bg-purple-700">Clean Coder</h3>
        <h3 className="px-5 py-3 rounded-sm bg-purple-700">Stack Agnostic</h3>
        <h3 className="px-5 py-3 rounded-sm bg-purple-700">
          Continuous Learner
        </h3>
      </div>
      <Slider />
      <Projects />
    </div>
  );
};

export default App;
