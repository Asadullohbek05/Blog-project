import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../../assets/Logo.svg";

const Header = () => {
  const [visible, setIsVisible] = useState(false);

  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="bg-[#232536]">
      <div className="flex justify-between items-center max-w-[1320px] mx-auto py-3 px-5">
        {isAuthenticated ? (
          <NavLink
            className="text-[#] font-inter font-normal text-outline text-[16px] leading-[28px]"
            to="/my-blogs"
          >
            My Blogs
          </NavLink>
        ) : (
          <NavLink
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/"
          >
            <img className="w-[120px] sm:w-[140px]" src={Logo} alt="Logo" />
          </NavLink>
        )}
        <ul className="hidden md:flex items-center gap-6">
          <NavLink
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="text-white font-inter font-normal text-[16px] leading-[28px] mr-[0px]"
            to="/register"
          >
            Register
          </NavLink>
          {isAuthenticated ? (
            <NavLink
              className="ml-[60px] bg-[#ffffff] text-[#232536] py-3 px-12 font-sen font-semibold text-[18px] leading-[24px]"
              to="/account"
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              className="ml-[60px] bg-[#ffffff] text-[#232536] py-3 px-12 font-sen font-semibold text-[18px] leading-[24px]"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </ul>
        <button
          onClick={() => setIsVisible(!visible)}
          className="p-2 flex md:hidden items-center justify-center"
        >
          <GiHamburgerMenu color="white" size={25} />
        </button>
      </div>
      <div
        className={`bg-[#252843] w-[70%] z-30 h-full fixed transition ${
          visible ? "right-0" : "right-[-70%]"
        } top-0`}
      >
        <ul className="flex flex-col w-full h-full justify-center items-center gap-6">
          <NavLink
            onClick={() => setIsVisible(!visible)}
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setIsVisible(!visible)}
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(!visible)}
            className="text-white font-inter font-normal text-[16px] leading-[28px]"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => setIsVisible(!visible)}
            className="text-white font-inter font-normal text-[16px] leading-[28px] "
            to="/register"
          >
            Register
          </NavLink>
          {isAuthenticated ? (
            <NavLink
              onClick={() => setIsVisible(!visible)}
              className="bg-[#ffffff] text-[#232536] py-3 px-12 font-sen font-semibold text-[18px] leading-[24px]"
              to="/account"
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              onClick={() => setIsVisible(!visible)}
              className="bg-[#ffffff] text-[#232536] py-3 px-12 font-sen font-semibold text-[18px] leading-[24px]"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </ul>
      </div>

      {visible ? (
        <div
          onClick={() => setIsVisible(!visible)}
          className={`w-[100%] z-20 transition ${
            visible ? "opacity-1" : "opacity-0"
          }  h-full bg-[#00000056] fixed left-0 top-0`}
        ></div>
      ) : null}
    </header>
  );
};

export default Header;
