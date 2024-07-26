import Category from "../components/category/Category";
import Hero from "../components/hero/Hero";
import PopularBlogs from "../components/popular-blogs/PopularBlogs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PopularBlogs />
      <Category />
    </div>
  );
};

export default HomePage;
