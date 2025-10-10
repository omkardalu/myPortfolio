const Welcome = () => {
  setTimeout(() => { document.location.href = "https://omkardalu.onrender.com"}, 4000);
  return (
    <div className="fixed bg-[#d25eb1] top-0 right-0 bottom-0 left-0 flex items-center justify-center text-4xl font-bold">
      <div className="relative h-full flex flex-col justify-center gap-7">
        <p className="font-normal text-center">😅changed the Domain name, </p>
        <p className={`text-2xl text-center font-extralight`}>Redirecting..</p>
        <p className=" text-center  font-extralight">catch you there!! </p>
      </div>
    </div>
  );
};

export default Welcome;
