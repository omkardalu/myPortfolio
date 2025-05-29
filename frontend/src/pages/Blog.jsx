import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Blog = () => {
  const [content, setContent] = useState();
  const params = useParams();
  useEffect(() => {
    fetch(`../docs/${params.blog}.md`)
      .then((res) => res.text())
      .then((data) => {
        setContent(data)
  });
  }, []);
  return (
    <section className="py-8 px-4 flex items-center justify-center">
      <div className="prose break-words flex-col justify-center max-w-full rounded-lg  border-2 border-transparent bg-[var(--card-bg)] p-8 shadow-2xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) =><> <h1 className="text-4xl font-semibold mt-4   mb-4" {...props} /><hr/></>,
            h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-3 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-2 mb-2" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside ml-4 mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside ml-6 mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-white/10 rounded-xl  p-4 overflow-auto backdrop-blur-2xl my-2" {...props} />,
            p: ({node, ...props}) => <p className="pb-1.5 pt-1.5 " {...props} />,
            code: ({node, ...props}) => <code className="bg-white/20 rounded-sm p-0.5 backdrop-blur-2xl" {...props} />,
            a: ({node, ...props}) => <a className="underline " {...props} />,
            tr: ({node, ...props}) => <tr className=" mt-2 border-b-1 w-fit " {...props} />,
            td: ({node, ...props}) => <td className=" p-2" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default Blog;
