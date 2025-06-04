import myImage from "../assets/images/my_image.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Image = () => {
  let img = useRef();

  useGSAP(() => {
    gsap.to(img.current, {
      height: "200px",
      width: "200px",
      x: 585,
      y: 0,
      borderRadius: "50%",
      scrollTrigger: {
        trigger: "img",
        start: "top 30%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.to(".navbar", {
      display: "none",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top 35%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.to(".intro", {
      display: "none",
      scrollTrigger: {
        trigger: ".intro",
        start: "top 50%",
        end: "bottom 67%",
        scrub: true,
      },
    });

    gsap.to(".name", {
      display: "none",
      scrollTrigger: {
        trigger: ".name",
        start: "top 25%",
        end: "bottom 53%",
        scrub: true,
      },
    });

    gsap.to(".profession", {
      display: "none",
      scrollTrigger: {
        trigger: "img",
        start: "top 55%",
        end: "bottom 82%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-[70%] h-[600px] flex flex-col justify-center">
      <h1 className="name poppins-extrabold font-black">
        vaibhav chavan
      </h1>
      <h3 className="profession poppins-extralight font-thin">
        Undergraduate,YCIS satara.
      </h3>
      <img
        ref={img}
        src={myImage}
        alt="Vaibhav's Image"
        className="rounded-lg shadow-gray-200 h-[60%] w-full object-cover relative top-1"
      />
    </div>
  );
};

export default Image;


