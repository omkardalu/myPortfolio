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
  },
  {
    title: "My reflection on the project",
    description: "This blog contains my reflection on the project.",
    link: "/blog/reflection"
  }
]
const Blogs = blogs.map((blog, index) => {
  return (
    <BlogCard key={index} blog={blog} />)
})
  return (
    <section className=" align-middle grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
      {Blogs}
    </section>
  )
};

export default BlogPosts;