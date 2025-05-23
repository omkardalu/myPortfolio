import myPic from "../../assets/images/omkar.jpg";

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-green-200">
      <div className="p-4 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10">
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden flex items-center justify-center">
          <img className="w-full object-cover" src={myPic} alt="Omkar" />
        </div>
        <div className="flex flex-col p-8 font-bold text-3xl leading-10 sm:text-4xl md:text-5xl md:leading-[3.8rem] lg:max-w-[55vw]">
          <h1 className="text-2xl sm:text-3xl font-medium w-fit bg-[#ffffff3f] backdrop-blur-sm rounded-2xl px-5 py-2 mb-4">
            Hi, I’m Omkar 👋
          </h1>
          <p>I build responsive, clean, and modern websites — with purpose and precision.</p>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;