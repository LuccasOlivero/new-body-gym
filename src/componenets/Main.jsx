import "./test.css";

function Main() {
  return (
    <main className="w-screen h-screen relative flex items-center max-lg:justify-center">
      <div className="bg-cover bg-top bg-main-bg w-full h-full absolute z-[-10]"></div>

      <section className="relative flex-col w-[33.8rem] ml-[10rem] max-lg:ml-0">
        <picture className="absolute w-[12rem] h-[2.5rem] rotate-6 top-[-.7rem] z-[-5]">
          <img
            src="./mancha.png"
            alt="mancha.png"
            className="w-full h-full block"
          />
        </picture>

        <div className="text-yellow-50 max-lg:text-center">
          <p className="text-black font-medium mb-2 ml-4 max-lg:ml-0 text-base uppercase max-lg:text-sm">
            find your energy
          </p>
        </div>

        <div className="relative w-[10.5rem] h-[3rem]">
          <button
            className="w-full h-full mt-9 bg-yellow-50 text-black uppercase font-bold text-sm bordepa relative 
          after:absolute after:transform after:translate-x-[-6.5rem] after:translate-y-[-1.8rem] after:transition-transform after:duration-500 after:ease-in-out after:hover:translate-x-[-8.1rem] after:hover:translate-y-[-.89rem] after:border after:border-white after:w-[10.5rem] after:h-[3rem]"
          >
            our classes
          </button>
          {/* <span className="absolute transform translate-x-[-9.7rem] translate-y-[1.5rem] transition-transform duration-500 ease-in-out hover:translate-x-[-10.5rem] hover:translate-y-[44.5px] border border-white w-[10.5rem] h-[3rem]"></span> */}
        </div>
      </section>
    </main>
  );
}

export default Main;
