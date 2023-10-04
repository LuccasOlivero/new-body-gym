import { NavLink } from "react-router-dom";

function PricingCard({
  children,
  type,
  price,
  bg,
  item1 = "",
  item2 = "",
  item3 = "",
}) {
  return (
    <>
      <div
        className={`flex flex-col w-[22rem] h-[32rem] bg-yellow-50 items-center shadow-2xl max-lg:w-[16rem] max-lg:h-[26rem] max-sm:w-[12rem] max-sm:h-[20rem] `}
      >
        <div className={`${bg} bg-cover w-full h-1/3 block`}></div>

        <div className="bg-white text-center w-[70%] flex flex-col p-6 relative top-[-1.5rem] rounded shadow-lg items-center h-[60%] justify-between max-xl:p-4 ">
          <div className="flex flex-col pb-2">
            <h3 className="font-semibold uppercase text-lg max-sm:text-sm">
              {type}
            </h3>
            <span className="uppercase font-bold text-4xl pb-4 max-xl:text-3xl max-xl:pb-1 max-sm:text-lg">
              ${price}
            </span>
            <p className="max-sm:text-xs">- Free Hand</p>
            <p className="max-sm:text-xs">- Gym Fitness</p>
            <p className="max-sm:text-xs">{item1}</p>
            <p className="max-sm:text-xs">{item2}</p>
            <p className="max-sm:text-xs">{item3}</p>
          </div>

          {/* <div className="relative w-full h-[3rem] min-h-[3rem] max-sm:h-[2rem] max-sm:min-h-[2rem] ">
            <button
              className="w-full h-full bg-[#c92142] text-white 
            uppercase font-bold text-sm hover:bg-[#ad203c] transition-all duration-300 ease-linear max-sm:text-xs "
            >
              purchase now
            </button>
          </div> */}

          <div className="relative w-full h-[3rem] min-h-[3rem] max-sm:h-[2rem] max-sm:min-h-[2rem] ">
            <NavLink
              to="/pricing"
              className="w-full h-full bg-[#c92142] text-white 
                uppercase font-bold text-sm hover:bg-[#ad203c] transition-all duration-300 ease-linear max-sm:text-xs  flex justify-center items-center"
            >
              take a tour
            </NavLink>
          </div>

          <span className="absolute top-0 bg-yellow-500 w-full text-white font-semibold">
            {children}
          </span>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
