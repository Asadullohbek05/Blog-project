import aboutImg1 from "../assets/about-img1.png";
import aboutImg2 from "../assets/about-img2.png";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-[1320px]  mx-auto px-5">
        <div className="my-5 sm:my-14 bg-[#F4F0F8] xs:p-[30px] sm:p-[50px] md:p-[83px] flex flex-col md:flex-row justify-between gap-10 md:gap-6">
          <div className="w-full md:max-w-[516px]">
            <h2 className="text-[#232536] font-inter font-semibold text-[16px] leading-5 tracking-[3px] uppercase mb-3 sm:mb-6">
              Our mision
            </h2>
            <h1 className="max-w-[481px] text-[#232536] font-sen font-semibold text-[24px] sm:text-[28px] leading-7 sm:leading-10 tracking-[-1px] mb-3 sm:mb-4">
              Creating valuable content for creatives all around the world
            </h1>
            <p className="text-[#6D6E76] font-inter font-normal text-[16px] text-justify md:text-left sm:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="w-full md:max-w-[516px]">
            <h2 className="text-[#232536] font-inter font-semibold text-[16px] leading-5 tracking-[3px] uppercase mb-3 sm:mb-6">
              Our mision
            </h2>
            <h1 className="max-w-[481px] text-[#232536] font-sen font-semibold text-[24px] sm:text-[28px] leading-7 sm:leading-10 tracking-[-1px] mb-3 sm:mb-4">
              A platform that empowers individuals to improve
            </h1>
            <p className="text-[#6D6E76] font-inter font-normal text-[16px] text-justify md:text-left sm:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>

        <div className="my-[64px] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:max-w-[519px]">
            <h1 className="text-[#232536] font-sen font-semibold text-[27px] sm:text-[36px] sm:leading-[48px] tracking-[-2px]">
              Our team of creatives
            </h1>
            <h2 className="my-2 sm:my-4 text-[#232536] font-sen font-semibold text-[20px] sm:text-[24px] sm:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h2>
            <p className="text-[#232536] text-justify sm:text-left text-[16px] sm:leading-7 font-inter font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <img className="w-full md:w-[50%]" src={aboutImg1} alt="" />
        </div>
        <div className="my-[64px] flex flex-col-reverse md:flex-row justify-between items-center gap-10">
          <img className="w-full md:w-[50%]" src={aboutImg2} alt="" />
          <div className="w-full md:max-w-[519px]">
            <h1 className="text-[#232536] font-sen font-semibold text-[27px] sm:text-[36px] sm:leading-[48px] tracking-[-2px]">
              Why we started this Blog
            </h1>
            <h2 className="my-2 sm:my-4 text-[#232536] font-sen font-semibold text-[20px] sm:text-[24px] sm:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h2>
            <p className="text-[#232536] text-justify sm:text-left text-[16px] sm:leading-7 font-inter font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
