import Days from "../componenets/Days";

function SchedulePage() {
  return (
    <>
      <span className="h-[24rem] w-full bg-about bg-center bg-cover text-center text-white font-bold text-4xl flex justify-center items-end pb-3">
        Schedule by days
      </span>
      <Days />
    </>
  );
}

export default SchedulePage;
