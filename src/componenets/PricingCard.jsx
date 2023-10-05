import { NavLink } from "react-router-dom";

function PricingCard({ children, type, price, bg, item1 = "", item2 = "" }) {
  return (
    <>
      <div
        className={`flex flex-col w-[22rem] h-[32rem] bg-yellow-50 items-center shadow-2xl max-lg:w-[16rem] max-lg:h-[26rem] max-sm:w-[12rem] max-sm:h-[20rem] `}
      >
        <div className={`${bg} bg-cover w-full h-1/3 block`}></div>

        <div className="bg-white text-center w-[70%] flex flex-col p-6 relative top-[-1.5rem] rounded shadow-lg items-center h-[60%] justify-between max-xl:p-4 max-lg:p-3">
          <div className="flex flex-col pb-2 ">
            <h3 className="font-semibold uppercase text-lg max-sm:text-sm max-lg:text-[.9rem]">
              {type}
            </h3>
            <span className="uppercase font-bold text-4xl my-3 max-xl:text-3xl max-xl:mb-4 max-sm:text-lg max-lg:text-[1.5rem] max-lg:mb-1 max-lg:my-1">
              ${price}
            </span>
            <p className="max-sm:text-xs max-xl:text-lg">- Free Hand</p>
            <p className="max-sm:text-xs max-xl:text-lg">- Gym Fitness</p>
            <p className="max-sm:text-xs max-xl:text-lg">{item1}</p>
            <p className="max-sm:text-xs max-xl:text-lg">{item2}</p>
          </div>

          <div className="relative w-full h-[3rem] min-h-[2rem] max-sm:h-[2rem] max-sm:min-h-[2rem] max-lg:h-[2rem]">
            <NavLink
              to="/pricing"
              className="w-full h-full bg-[#c92142] text-white 
                uppercase font-bold text-sm hover:bg-[#ad203c] transition-all duration-300 ease-linear max-sm:text-xs  flex justify-center items-center "
            >
              take a tour
            </NavLink>
          </div>

          <span className="absolute top-0 max-lg:top-[-.5rem] max-sm:top-[-.7rem] bg-yellow-500 w-full text-white font-semibold">
            {children}
          </span>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
