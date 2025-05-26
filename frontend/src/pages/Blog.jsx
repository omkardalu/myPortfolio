import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Blog = () => {
  
  const [content, setContent] = useState();
  const params = useParams();
  console.log(params.blog);

  useEffect(() => {
    fetch(`docs/${params.blog}.md`)
      .then((res) => res.text())
      .then((data) => setContent(data));
  }, []);

  return (
    <section className="flex items-center justify-center px-4 py-8">
      <div className="prose max-w-full flex-col justify-center rounded-2xl border-2 border-transparent bg-[#ffffff3c] p-8 break-words shadow-2xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <>
                {" "}
                <h1 className="mt-4 mb-4 text-4xl font-semibold" {...props} />
                <hr />
              </>
            ),
            h2: ({ node, ...props }) => (
              <h2 className="mt-3 mb-3 text-3xl font-semibold" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="mt-2 mb-2 text-2xl font-semibold" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="mb-4 ml-4 list-inside list-disc" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="mb-4 ml-6 list-inside list-decimal" {...props} />
            ),
            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
            pre: ({ node, ...props }) => (
              <pre
                className="my-2 overflow-auto rounded-xl bg-white/10 p-4 backdrop-blur-2xl"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="pt-1.5 pb-1.5" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code
                className="rounded-sm bg-white/20 p-0.5 backdrop-blur-2xl"
                {...props}
              />
            ),
            a: ({ node, ...props }) => <a className="underline" {...props} />,
            tr: ({ node, ...props }) => (
              <tr className="mt-2 w-fit border-b-1" {...props} />
            ),
            td: ({ node, ...props }) => <td className="p-2" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default Blog;
