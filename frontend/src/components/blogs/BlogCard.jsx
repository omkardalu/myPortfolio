import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl m-5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className=" text-2xl">{blog.title}</h2>
      <p className="">{blog.description}</p>
      <Link to={blog.link} className="text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
}
export default BlogCard;