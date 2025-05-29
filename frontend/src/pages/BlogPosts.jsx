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
    <section className="mx-auto flex flex-col items-center gap-10 p-8">
      <h1 className="bounce-up text-4xl font-bold">Blogs</h1>
      <div className="bounce-up flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        {Blogs}
      </div>
    </section>
  );
};

export default BlogPosts;
