import Blog from "./Blog.jsx";
import BlogCard from "../components/blogs/BlogCard.jsx";
const BlogPosts = () => {
const blogs = [
  {
    title: "Error in markdown rendering",
    description: "This is a sample blog post about an error in markdown rendering.",
    link: "/blog/readme"
  },
  {
    title: "Tasks to complete the project",
    description: "This blog contains the tasks need to complete for this profolio.",
    link: "/blog/tasks"
  }
]
const Blogs = blogs.map((blog, index) => {
  return (
    <BlogCard key={index} blog={blog} />)
})
  return (
    <section>
      {Blogs}
    </section>
  )
};

export default BlogPosts;