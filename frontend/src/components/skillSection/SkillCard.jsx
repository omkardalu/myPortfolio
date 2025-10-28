const SkillCard = ({ image, skillName }) => {
  return (
    <div className="relative m-6 mt-2 group flex flex-col items-center justify-center">
      <div className="w-20">
        <img src={image} alt={skillName} className="w-full group-hover:drop-shadow-[0_6px_10px_white] transition-drop-shadow duration-450" />
      </div>
      <div className="absolute bottom-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-450">
        <span className="relative mt-2 rounded bg-black px-4 py-1 text-white">
          <span className="absolute top-0 left-1/2 z-49 h-2 w-2 translate-[-50%] rotate-45 bg-black"></span>
          {skillName}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
