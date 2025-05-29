import { useRef } from "react";

const Contact = () => {
  const headingRef = useRef(null);

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    headingRef.current.innerText = "Thank you for your message!";
    console.log(data);
  };
  return (
    <section id="contact" className="p-4 bounce-up my-auto">
      <div className="mx-auto max-w-2xl rounded-lg bg-[var(--card-bg)] p-6 shadow-xl backdrop-blur-xs">
        <h1 className="mb-8 text-4xl font-bold text-inherit" ref={headingRef}>Contact Me</h1>
        <form onSubmit={handleSubmit} action={import.meta.env.VITE_FORMSPREE_URL} method='POST' className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-lg border border-gray-700 p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-700 p-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full rounded-lg border border-gray-700 p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-mdtransition-colors rounded-lg w-full bg-gradient-to-br from-[#f3c290c0] to-[#d25eb1c0] px-4 py-2 font-semibold text-white duration-200 hover:bg-gradient-to-br hover:from-[#d25eb1c0] hover:to-[#f3c290c0]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
