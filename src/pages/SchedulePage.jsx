import Days from "../componenets/Days";
import NavBar from "../componenets/NavBar";
function SchedulePage() {
  return (
    <>
      <NavBar />
      <span
        rel="preload"
        className="h-[24rem] w-full bg-about bg-center bg-cover text-center text-white font-bold text-4xl flex justify-center items-end pb-3"
      >
        Schedule by days
      </span>
      <Days />
    </>
  );
}

export default SchedulePage;
