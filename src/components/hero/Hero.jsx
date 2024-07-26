import heroImage from "../../assets/hero.svg";
import overlayImage from "../../assets/hero-overlay.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const overlayStyle = {
    backgroundImage: `url(${overlayImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <div style={divStyle} className="w-full">
      <div style={overlayStyle}></div>
      <div className="relative max-w-[1320px] h-auto mx-auto py-[70px] sm:py-[128px] px-5">
        <h2 className="text-[white] text-[16px] uppercase font-inter font-semibold leading-5 tracking-[3px]">
          Posted on <span className="font-extrabold">startup</span>
        </h2>
        <h1 className="text-white my-6 text-[40px] sm:text-[56px] max-w-[809px] leading-[50px] sm:leading-[64px] font-sen font-bold tracking-[-2px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <h4 className="text-white font-inter font-normal text-[16px] leading-[28px]">
          By <span className="text-[#ffd050]">James West</span> | May 23, 2022
        </h4>
        <p className="text-[white] max-w-[580px] mt-4 font-inter font-normal text-[16px] leading-[28px] mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Link className="bg-[#FFD050] text-[#232536] py-3 px-6 sm:px-12 font-sen font-semibold text-[18px] leading-[24px]">
          Read More &gt;
        </Link>
      </div>
    </div>
  );
};

export default Hero;
