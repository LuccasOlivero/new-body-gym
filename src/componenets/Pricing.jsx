import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="w-full h-screen bg-grey bg-cover ">
      <div className="text-center flex flex-col py-20">
        <p className="uppercase text-red-600 font-bold text-base">pricing</p>
        <h3 className="text-black font-bold text-3xl pb-2">
          Exclusive Pricing Plan
        </h3>
        <p className="text-gray-600 font-light text-base">
          Gymat an unknown printer took a galley of type and
          <br /> scrambled make a type specimen book.
        </p>
      </div>

      <div className="flex gap-20 justify-center">
        <PricingCard type="mensual" price={12} bg={"bg-back-r"}></PricingCard>
        <PricingCard
          type="trimestral"
          price={22}
          bg="bg-legs-p"
          size={35}
          top="2"
          width="22"
        ></PricingCard>
        <PricingCard type="semestral" price={32} bg={"bg-back-w"}></PricingCard>
      </div>
    </div>
  );
}

export default Pricing;
