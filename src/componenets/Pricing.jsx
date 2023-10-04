import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="w-full h-full  bg-cover relative ">
      <div className="text-center flex flex-col py-10">
        <h3 className="text-black font-bold text-4xl pb-1">
          Exclusive Pricing Plan
        </h3>
        <p className="text-gray-600 font-light text-base">
          Gymat an unknown printer took a galley of type and
          <br /> scrambled make a type specimen book.
        </p>
      </div>

      <div className="flex gap-20 justify-center max-2xl:gap-10 max-2xl:px-[10rem] max-xl:grid mb-[5rem]">
        <PricingCard
          type="One-Month Plan"
          price={12}
          bg={"bg-back-r"}
          item1="- Weight Loss"
        ></PricingCard>
        <PricingCard
          type="Three-Month Plan"
          price={22}
          bg="bg-legs-p"
          size={35}
          top="2"
          width="22"
          item1="- Weight Loss"
          item2="- Trainer"
          best=""
        >
          Best-Selling
        </PricingCard>
        <PricingCard
          type="One-Year Plan"
          price={32}
          bg={"bg-back-w"}
          item1="- Weight Loss"
          item2="- Trainer"
          item3="- Cycling"
        ></PricingCard>
      </div>
    </div>
  );
}

export default Pricing;
