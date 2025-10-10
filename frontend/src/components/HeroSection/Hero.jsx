const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="bounce-once mt-[-52px] relative flex h-screen items-center justify-center"
    ><div className="absolute bottom-10 rotate-180 flex flex-col items-center text-3xl"><div>^</div><div className="absolute">|</div></div>
      <div className="flex flex-col flex-wrap items-center justify-center p-4 sm:flex-row">
        <div className="flex h-[280px] w-[280px] flex-col items-center justify-center overflow-hidden rounded-full border-3 border-[var(--card-bg-color)] shadow-2xl max-sm:mt-12">
          <img
            rel="preload"
            as="image"
            className="w-full object-cover"
            src={"images/omkar.jpg"}
            alt="Omkar"
          />
        </div>
        <div className="flex flex-col p-8 text-3xl leading-10 font-bold sm:text-4xl md:text-5xl md:leading-[3.8rem] lg:max-w-[55vw]">
          <h1 className="mb-4 w-fit rounded-lg border border-[var(--card-bg-color)] bg-[#ffffff3f] px-5 py-2 text-2xl font-medium text-wrap backdrop-blur-sm sm:text-3xl">
            Hi, I’m Omkar 👋
          </h1>
          <p>
            I build responsive, clean, and modern websites — with purpose and
            precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
