import { Link } from "react-router-dom";

import blogImg from "../assets/blog-card.png";

const BlogsPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-5">
      <input
        type="text"
        className="my-[40px] sm:my-[57px] border rounded-[2px] border-[#6D6E7680] outline-none pl-6 w-full h-[50px] sm:h-[76px]"
        placeholder="Searching ..."
      />
      <h1 className="text-[#232536] text-[30px] sm:text-[48px] font-sen font-bold leading-[64px] tracking-[-2px] mb-4 sm:mb-8">
        All posts
      </h1>
      <hr className="h-[1px] bg-[#6D6E76] mb-[64px]" />
      <div className="flex flex-col gap-8">
        <Link
          to="/blogs/blogId"
          className="w-full flex flex-col md:flex-row gap-5 md:gap-12"
        >
          <img className="md:w-[50%] object-cover" src={blogImg} alt="" />
          <div>
            <h5 className="text-[#592EA9] leading-5 tracking-[3px] font-inter text-[16px] font-semibold mb-3 md:mb-5 uppercase">
              Business
            </h5>
            <h1 className="text-[#232536] text-[25px] tracking-[-2px] sm:text-[36px] font-sen font-bold leading-8 sm:leading-[48px] mb-[20px] sm:mb-[64px]">
              Top 6 free website mockup tools 2022
            </h1>
            <p className="sm:text-left text-justify text-[#6D6E76] text-[16px] font-inter font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </Link>
        <Link
          to="/blogs/blogId"
          className="w-full flex flex-col md:flex-row gap-5 md:gap-12"
        >
          <img className="md:w-[50%] object-cover" src={blogImg} alt="" />
          <div>
            <h5 className="text-[#592EA9] leading-5 tracking-[3px] font-inter text-[16px] font-semibold mb-3 md:mb-5 uppercase">
              Business
            </h5>
            <h1 className="text-[#232536] text-[25px] tracking-[-2px] sm:text-[36px] font-sen font-bold leading-8 sm:leading-[48px] mb-[20px] sm:mb-[64px]">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="sm:text-left text-justify text-[#6D6E76] text-[16px] font-inter font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </Link>
        <Link
          to="/blogs/blogId"
          className="w-full flex flex-col md:flex-row gap-5 md:gap-12"
        >
          <img className="md:w-[50%] object-cover" src={blogImg} alt="" />
          <div>
            <h5 className="text-[#592EA9] leading-5 tracking-[3px] font-inter text-[16px] font-semibold mb-3 md:mb-5 uppercase">
              Business
            </h5>
            <h1 className="text-[#232536] text-[25px] tracking-[-2px] sm:text-[36px] font-sen font-bold leading-8 sm:leading-[48px] mb-[20px] sm:mb-[64px]">
              Ten free foogle fonts that you should use
            </h1>
            <p className="sm:text-left text-justify text-[#6D6E76] text-[16px] font-inter font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </Link>
        <Link
          to="/blogs/blogId"
          className="w-full flex flex-col md:flex-row gap-5 md:gap-12"
        >
          <img className="md:w-[50%] object-cover" src={blogImg} alt="" />
          <div>
            <h5 className="text-[#592EA9] leading-5 tracking-[3px] font-inter text-[16px] font-semibold mb-3 md:mb-5 uppercase">
              Business
            </h5>
            <h1 className="text-[#232536] text-[25px] tracking-[-2px] sm:text-[36px] font-sen font-bold leading-8 sm:leading-[48px] mb-[20px] sm:mb-[64px]">
              What did I learn from doing 50+ design sprints?
            </h1>
            <p className="sm:text-left text-justify text-[#6D6E76] text-[16px] font-inter font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec.
            </p>
          </div>
        </Link>
      </div>
      <div className="mx-auto w-[300px] flex justify-center gap-5 my-[50px]">
        <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
          {"<"}Prev
        </button>
        <div className="flex gap-1">
          <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
            1
          </button>
          <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
            2
          </button>
          <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
            3
          </button>
          <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
            4
          </button>
          <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
            5
          </button>
        </div>
        <button className="font-sen font-bold text-[24px] sm:text-[28px] leading-10 tracking-[-1px] text-[#232536]">
          Next&gt;
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
