const Welcome = ({ setHasNotWelcomed }) => {
  setTimeout(() => setHasNotWelcomed(false), 2000);
  return (
    <div className="fixed bg-[#d25eb1] top-0 right-0 bottom-0 left-0 flex items-center justify-center text-4xl font-bold">
      <div className="relative">
        <div className="absolute h-12 w-0 shrink bg-black"></div>
        <p className="enter">Hey, Welcome</p>
      </div>
    </div>
  );
};

export default Welcome;
