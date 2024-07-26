import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import categoryImg1 from "../../assets/category-images/category-img1.png";
import categoryImg2 from "../../assets/category-images/category-img2.png";
import categoryImg3 from "../../assets/category-images/category-img3.png";

const PopularBlogs = () => {
  return (
    <div className="mt-[54px] sm:mt-[94px]">
      <div className="max-w-[1320px] h-auto mx-auto px-5">
        <h1 className="text-[25px] sm:text-[36px] font-bold font-sen text-[#000000] mb-[40px] sm:mb-[44px]">
          Popular blogs
        </h1>
        <div className="pb-[100px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              290: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg1}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg2}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg3}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg1}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 mb-9 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg2}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 mb-9 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/blogs/blogID" className="h-auto">
                <div className="h-full w-full">
                  <img
                    src={categoryImg3}
                    className="w-full"
                    alt="Category Image"
                  />
                  <p className="mt-8 mb-4 text-[14px] font-inter font-medium leading-5 text-[#4c4c4c]">
                    By <span className="text-[#592EA9]">John Doe</span> l Aug
                    23, 2021
                  </p>
                  <h2 className="text-[25px] sm:text-[28px] font-bold leading-8 sm:leading-10 font-sen tracking-[-1px]">
                    A UX Case Study Creating a Studious Environment for
                    Students:
                  </h2>
                  <p className="mt-4 mb-9 text-[16px] font-inter font-normal text-[#232536] opacity-[70%] leading-7">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularBlogs;
