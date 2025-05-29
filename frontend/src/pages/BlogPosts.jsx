import BlogCard from "../components/blogs/BlogCard.jsx";
const BlogPosts = () => {
  const blogs = [
    {
      title: "Error in markdown rendering",
      description:
        "This is a sample blog post about an error in markdown rendering.",
      link: "/blog/readme",
    },
    {
      title: "Tasks to complete the project",
      description:
        "This blog contains the tasks need to complete for this profolio.",
      link: "/blog/tasks",
    },
    {
      title: "My reflection on the project",
      description: "This blog contains my reflection on the project.",
      link: "/blog/reflection",
    },
  ];
  const Blogs = blogs.map((blog, index) => {
    return <BlogCard key={index} blog={blog} />;
  });
  return (
    <section className="p-4 flex flex-col items-start mx-auto ">
      <h1 className="mb-4 font-medium text-4xl">Blogs</h1>
      <div className="flex flex-col flex-wrap justify-center gap-4 items-center sm:flex-row">
        {Blogs}
      </div>
    </section>
  );
};

export default BlogPosts;
