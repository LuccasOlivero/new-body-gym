function PricingCard({ type, price, bg }) {
  return (
    <div
      className={`flex flex-col w-[22rem] h-[34rem] bg-yellow-50 items-center shadow-2xl `}
    >
      <div className={`${bg} bg-cover w-full h-1/3 block `}></div>

      <div className="bg-white text-center w-[70%] flex flex-col p-6 relative top-[-1.5rem] rounded shadow-lg items-center">
        <h3 className="font-semibold uppercase text-lg pb-2">{type}</h3>
        <span className="uppercase font-bold text-4xl pb-4">${price}</span>
        <p>- free hand</p>
        <p>- gym fitness</p>
        <p>- weight loss</p>
        <p>- personal trainer</p>
        <p className="pb-4">- cycling</p>
        <div className="relative w-[10.5rem] h-[3rem]">
          <button
            className="w-full h-full bg-[#c92142] text-white 
            uppercase font-bold text-sm hover:bg-[#ad203c] transition-all duration-300 ease-linear"
          >
            test
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
