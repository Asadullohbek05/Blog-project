import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import businessIcon from "../../assets/business-icon.svg";
import startupIcon from "../../assets/startup-icon.svg";
import economyIcon from "../../assets/economy-icon.svg";
import technologyIcon from "../../assets/technology-icon.svg";

const Category = () => {
  return (
    <div className="max-w-[1320px] h-auto mx-auto px-5">
      <h1 className="text-center mb-[30px] sm:mb-[66px] text-[#232536] text-[28px] sm:text-[36px] font-sen font-bold leading-12 tracking-[-2px]">
        Choose A Catagory
      </h1>
      <div className="mb-[40px] sm:mb-[70px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={32}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper h-auto pb-[50px]"
        >
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={businessIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Business
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={startupIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Startup
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={economyIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Economy
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={technologyIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Technology
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={businessIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Business
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/category">
              <div className="w-full h-auto border border-[#D8D8D8] p-8 hover:bg-[#FFD050] transition">
                <div className="flex items-center justify-center w-12 h-12 border bg-[#FBF6EA] rounded-lg mb-4">
                  <img src={economyIcon} alt="" />
                </div>
                <h2 className="text-[#232536] text-[28px] font-sen font-bold leading-10 tracking-[-1px]">
                  Economy
                </h2>
                <p className="font-inter text-[#6D6E76] leading-7 mt-1 font-normal">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
