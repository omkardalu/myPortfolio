import myPic from "../../assets/images/omkar.jpg";
const HeroSection = () => {
  return (
    <section className=" h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-green-200">
      <div className=" p-4 flex items-center gap-10 justify-center flex-col  flex-wrap sm:flex-row " >
        <div className="flex justify-center items-center w-[280px] h-[280px] rounded-[50%] overflow-hidden">
          <img className="w-[100%]" src={myPic} alt="mypic" />
        </div>
        <div className="flex flex-col font-bold leading-10 text-3xl p-8 lg:max-w-[55vw] md:leading-15 md:text-5xl ">
          <h1 className="text-2xl backdrop-blur-2xs bg-[#ffffff3f] font-medium w-fit rounded-2xl px-5 py-2 ">
            Hi, I’m Omkar 👋
          </h1>
          <p>I build responsive, clean, and modern websites — with purpose and precision.</p>
        </div>
      </div>
    </section>
  )
};


export default HeroSection;