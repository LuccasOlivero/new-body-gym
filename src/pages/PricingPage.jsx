import Pricing from "../componenets/Pricing";

function PricingPage() {
  return (
    <>
      <span
        rel="preload"
        className="h-[24rem] w-full bg-about bg-center bg-cover text-center text-white font-bold text-4xl flex justify-center items-end pb-2"
      >
        Pricing
      </span>
      <Pricing></Pricing>;
    </>
  );
}

export default PricingPage;
