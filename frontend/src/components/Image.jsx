import myImage from "../assets/images/myimage.jpg";
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
      x: 540.7,
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
        start: "top 23%",
        end: "bottom 53%",
        scrub: true,
      },
    });

    gsap.to(".profession", {
      display: "none",
      scrollTrigger: {
        trigger: "img",
        start: "top 28%",
        end: "bottom 82%",
        scrub: true,
      },
    });

    gsap.to(".skills", {
      opacity: 1,
      scrollTrigger: {
        trigger: "img",
        start: "top 30%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    gsap.to(".socials", {
      display: "none",
      scrollTrigger: {
        trigger: "img",
        start: "top 30%",
        end: "bottom 73%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-[70%] h-[600px] relative left-10 flex flex-col justify-center items-center">
      <h1 className="name poppins-extrabold font-black relative right-25">
        vaibhav chavan
      </h1>
      <h3 className="profession poppins-extralight font-thin relative right-[69px]">
        Undergraduate,YCIS satara.
      </h3>
      <img
        ref={img}
        src={myImage}
        alt="Vaibhav's Image"
        className="rounded-lg shadow-gray-200 h-[60%] w-full object-cover relative top-1"
      />
      <div className="socials h-[50px] w-[90%] relative top-3 flex justify-center gap-5 items-start">
        <a
          href="https://www.linkedin.com/in/dev-vaibhav-chavan/"
          target="_blank">
          <img
            src="https://thumbs.dreamstime.com/b/linkedin-logo-icon-linkedin-logo-icon-vector-illustration-358522873.jpg"
            className="h-[30px] w-[30px] rounded-[50%]"
            alt=""
          />
        </a>
        <a href="https://github.com/dev-vaibhavchavan/" target="_blank">
          <img
            src="https://as2.ftcdn.net/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg"
            className="h-[30px] w-[30px] rounded-[50%] object-cover"
            alt=""
          />
        </a>
        <a href="https://leetcode.com/dev-vaibhavchavan/" target="_blank">
          <img
            src="https://preview.redd.it/i-have-been-leetcoding-for-a-while-but-what-does-the-v0-ucy9q7w40wtc1.jpg?width=720&format=pjpg&auto=webp&s=41e11a55faf86e0b7bbbddf934b906212caa0fa9"
            className="h-[30px] w-[30px] rounded-[50%] object-cover"
            alt=""
          />
        </a>
        <a
          href="https://www.instagram.com/imvaibhav47/
"
          target="_blank">
          <img
            src="https://static.vecteezy.com/system/resources/previews/042/387/654/non_2x/instagram-button-icon-set-instagram-screen-social-media-and-social-network-interface-template-stories-user-button-symbol-sign-logo-stories-liked-editorial-free-png.png"
            className="h-[30px] w-[30px] rounded-[50%] object-cover bg-white"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Image;

