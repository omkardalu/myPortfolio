import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-80 rounded-lg border border-[var(--card-bg-color)] bg-[var(--card-bg-color)] p-4 shadow-2xl">
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="mt-2 h-[3lh]">{blog.description}</p>
      <Link to={blog.link} className="text-blue-800 hover:underline">
        Read More
      </Link>
    </div>
  );
};
export default BlogCard;
