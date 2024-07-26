import { Link } from "react-router-dom";

const PopularBlogCard = () => {
  return (
    <Link to="/category">
      <div className="border h-full w-full">
        <h1>PopularBlogCard</h1>
      </div>
    </Link>
  );
};

export default PopularBlogCard;
