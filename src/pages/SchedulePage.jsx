import Days from "../componenets/Days";

function SchedulePage() {
  return (
    <>
      <span className="block h-[24rem] w-full bg-about bg-center bg-cover"></span>
      <h2
        className={`relative text-center font-bold text-4xl top-[-3rem] text-white`}
      >
        Schedule by days
      </h2>
      <Days />
    </>
  );
}

export default SchedulePage;
