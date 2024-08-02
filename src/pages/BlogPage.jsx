import blogImg from "../assets/blog.png";
import profileImg from "../assets/profile-img.svg";

const BlogPage = () => {
  return (
    <div className="pb-[100px]">
      <div className="max-w-[1320px] h-auto mx-auto px-5">
        <img src={blogImg} className="my-5 sm:my-14" />
        <div className="max-w-[843px] h-auto mx-auto">
          <div className="flex items-center gap-4">
            <img className="w-[40px] sm:w-auto" src={profileImg} alt="" />
            <div className="flex flex-col justify-center">
              <h3 className="text-[#592EA9] font-sen font-bold sm:leading-8 leading-5 text-[20px] sm:text-[28px] tracking-[-1px]">
                Andrew Jonson
              </h3>
              <p className="text-[#6D6E76] font-inter font-normal text-[16px] leading-7">
                Posted on 27th January 2022
              </p>
            </div>
          </div>
          <h1 className="mt-3 sm:mt-6 text-[#232536] font-sen font-semibold text-[25px] sm:text-[48px] leading-[30px] sm:leading-[64px] sm:tracking-[-2px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <h4 className="font-sen font-bold text-[18px] sm:text-[24px] leading-4 text-[#232536] mt-[20px] sm:mt-[34px]  sm:leading-8">
            Startup (#business, #screen, #life)
          </h4>
          <div className="mt-[25px] sm:mt-[50px] flex flex-col gap-4 sm:gap-6">
            <p className="text-[#6D6E76] font-inter font-normal text-[16px] leading-6 sm:leading-7 sm:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
            <p className="text-[#6D6E76] font-inter font-normal text-[16px] leading-6 sm:leading-7 sm:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus. Sociis natoque penatibus
              et magnis dis parturient montes. Ridiculus mus mauris vitae
              ultricies leo. Neque egestas congue quisque egestas diam. Risus in
              hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
