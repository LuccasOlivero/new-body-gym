function AboutImage() {
  return (
    <div className="w-[33rem] min-w-[29rem] h-full flex items-center">
      <div className=" absolute h-[30rem] w-[15rem] bg-red-600 rounded-br-full rounded-tr-full z-10 right-[9.3rem] top-[8rem]"></div>
      <img src="./run.png" alt="" className="w-full h-full block z-20" />
    </div>
  );
}

export default AboutImage;
