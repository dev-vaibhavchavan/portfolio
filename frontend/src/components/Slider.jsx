import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(gsap.ModifiersPlugin);

const Slider = () => {
  useGSAP(() => {
    const totalWidth = document.querySelector(".track").scrollWidth;

    gsap.to(".track", {
      x: `-=${totalWidth / 2}`,
      duration: 10,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
      },
    });
  }, []);

  let skills = [
    "https://juststickers.in/wp-content/uploads/2019/07/nodejs.png",
    "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
    "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
    "https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZAPhkIP75IVa4trptoEfFlzk-0KFEm0ibg&s",
    "https://img.icons8.com/m_outlined/512/github.png",
    "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s",
    "https://static.vecteezy.com/system/resources/previews/001/416/705/non_2x/html5-emblem-orange-shield-and-white-text-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/001/416/680/non_2x/css3-emblem-blue-shield-and-white-text-vector.jpg",
    "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
  ];

  return (
    <div className="slider h-[150px] w-full relative top-20 overflow-hidden">
      <div className="track flex w-max gap-5">
        {/* skillsdiv 1 */}
        <div className="skillsdiv flex items-center gap-5">
          {skills.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="skill h-[120px] w-[120px] rounded-3xl object-cover bg-white"
            />
          ))}
        </div>
        <div className="skillsdiv flex items-center gap-5">
          {skills.map((src, i) => (
            <img
              key={`dup-${i}`}
              src={src}
              alt=""
              className="skill h-[120px] w-[120px] rounded-3xl object-cover bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;


