import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTimeline } from "../context/TimelineContext";

const Navbar = () => {
  let tl = useTimeline();

  useGSAP(() => {
    tl.from(
      "a",
      {
        opacity: 0,
        y: 30,
        stagger: 0.3,
      },
      1
    );
  });

  return (
    <div className="navbar gap-10 flex relative bottom-14 px-8 py-4 border-2 border-gray-400 rounded-md">
      <a
        href=""
        className="px-4 py-1 hover:rounded-sm hover:bg-purple-700 hover:text-white">
        Projects
      </a>
      <a
        href=""
        className="px-4 py-1 hover:rounded-sm hover:bg-purple-700 hover:text-white">
        Work Experience
      </a>
      <a
        href=""
        className="px-4 py-1 hover:rounded-sm hover:bg-purple-700 hover:text-white">
        Academics
      </a>
      <a
        href=""
        className="px-4 py-1 hover:rounded-sm hover:bg-purple-700 hover:text-white">
        Achievements
      </a>
    </div>
  );
};

export default Navbar;

