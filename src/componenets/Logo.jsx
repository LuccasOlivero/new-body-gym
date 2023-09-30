function Logo({ color = "white" }) {
  return (
    <picture className="absolute w-[12rem] h-[2.5rem] rotate-6 top-[-.7rem] z-[-5]">
      <img
        src="./mancha.png"
        alt="mancha.png"
        className="w-full h-full block"
      />
    </picture>
  );
}

export default Logo;
