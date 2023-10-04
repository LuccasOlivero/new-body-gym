import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="w-full h-full bg-gray-50 bg-cover relative ">
      <div className="text-center flex flex-col py-16">
        <p className=" uppercase font-extrabold text-[#ff0336]">pricing</p>
        <h3 className="text-black font-bold text-4xl pb-2">
          Exclusive Pricing Plan
        </h3>
        <p className="text-gray-600 font-light text-base">
          Gymat an unknown printer took a galley of type and
          <br /> scrambled make a type specimen book.
        </p>
      </div>

      <div className="flex gap-20 justify-center max-2xl:gap-10 max-2xl:px-[10rem] max-xl:grid mb-[5rem]">
        <PricingCard
          type="mensual"
          price={12}
          bg={"bg-back-r"}
          item1="- weight loss"
        ></PricingCard>
        <PricingCard
          type="trimestral"
          price={22}
          bg="bg-legs-p"
          size={35}
          top="2"
          width="22"
          item1="- weight loss"
          item2="- trainer"
        ></PricingCard>
        <PricingCard
          type="semestral"
          price={32}
          bg={"bg-back-w"}
          item1="- weight loss"
          item2="- trainer"
          item3="- cycling"
        ></PricingCard>
      </div>
    </div>
  );
}

export default Pricing;
