import "./test.css";

function Main() {
  return (
    <main className="w-screen h-screen relative flex items-center max-lg:justify-center">
      <div className="bg-cover bg-top bg-main-bg w-full h-full absolute z-[-10] bg-no-repeat"></div>

      <section className="relative flex-col w-[41rem] max-lg:mx-8 pl-[10rem] max-lg:pl-[3rem] max-sm:p-0">
        <picture className="absolute w-[12rem] h-[2.5rem] rotate-6 top-[-.7rem] z-[-5]">
          <img
            src="./mancha.png"
            alt="mancha.png"
            className="w-full h-full block"
          />
        </picture>

        <div className="text-yellow-50">
          <p className="text-black font-medium mb-2 ml-4 max-lg:ml-0 text-base uppercase max-lg:text-sm max-lg:pl-[1rem] max-sm:pl-[1.5rem]">
            find your energy
          </p>
          <h3 className="text-6xl uppercase font-extrabold max-lg:text-3xl">
            your best self starts here
          </h3>
        </div>

        <div className="relative w-[10.5rem] h-[3rem]">
          <button
            className="w-full h-full mt-9 bg-yellow-50 text-black uppercase font-bold text-sm bordepa relative 
          after:absolute after:transform after:translate-x-[-6.5rem] after:translate-y-[-1.8rem] after:transition-transform after:duration-500 after:ease-in-out after:hover:translate-x-[-8.1rem] after:hover:translate-y-[-.89rem] after:border after:border-[#ff0336] after:w-[10.5rem] after:h-[3rem] after:z-[-10] hover:text-[#c92142] transition-all duration-300 ease-linear"
          >
            our classes
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
