import myPic from "../../assets/images/omkar.jpg";

const HeroSection = () => {
  return (
    <section id="hero-section" className="bounce-once flex mt-[-52px] h-screen items-center justify-center ">
      <div className="flex flex-col flex-wrap items-center justify-center gap-10 p-4 sm:flex-row">
        <div className="flex h-[280px] w-[280px] flex-col items-center justify-center overflow-hidden rounded-full border-3 border-transparent shadow-2xl">
          <img className="w-full object-cover" src={myPic} alt="Omkar" />
        </div>
        <div className="flex flex-col p-8 text-3xl leading-10 font-bold sm:text-4xl md:text-5xl md:leading-[3.8rem] lg:max-w-[55vw]">
          <h1 className="mb-4 w-fit rounded-2xl bg-[#ffffff3f] px-5 py-2 text-2xl font-medium backdrop-blur-sm sm:text-3xl">
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
