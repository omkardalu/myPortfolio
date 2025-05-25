import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
const Blog = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("docs/readme.md")
      .then((res) => res.text())
      .then((data) => setContent(data));
  }, []);
  return (
    <article className="mx-auto max-w-3xl p-6 flex justify-center" >
      <div  className="prose flex-col justify-center rounded-2xl border-2 border-transparent bg-[#ffffff3c] p-3 text-gray-700 shadow-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default Blog;
