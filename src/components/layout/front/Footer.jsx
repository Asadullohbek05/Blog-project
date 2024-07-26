import { Link } from "react-router-dom";

import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import linkedin from "../../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#232536]">
      <div className="max-w-[1320px] h-auto mx-auto px-5 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-center py-[35px] sm:py-[54px]">
        <div>
          <p className="text-center sm:text-left text-[#FFFFFF] text-[16px] font-inter font-normal leading-7 opacity-70">
            Finstreet 118 2561 Fintown
          </p>
          <p className="text-center sm:text-left text-[#FFFFFF] text-[16px] font-inter font-normal leading-7 opacity-70">
            Hello@finsweet.com 020 7993 2905
          </p>
        </div>
        <div className="flex gap-[28px]">
          <Link>
            <img className="w-5 h-5" src={facebook} alt="" />
          </Link>
          <Link>
            <img className="w-5 h-5" src={twitter} alt="" />
          </Link>
          <Link>
            <img className="w-5 h-5" src={instagram} alt="" />
          </Link>
          <Link>
            <img className="w-5 h-5" src={linkedin} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
