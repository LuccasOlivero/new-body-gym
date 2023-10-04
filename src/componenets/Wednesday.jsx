import ScheduleOfClasses from "./ScheduleOfClasses";

function Wednesday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Cycling"
        time="8:00am - 9:00am"
        trainer="John Weights"
      />
      <ScheduleOfClasses
        type="Body Building"
        time="9:00am - 10:00am"
        trainer="Tom Rizzly"
      />
      <ScheduleOfClasses
        type="Boxing"
        time="10:00am - 11:00am"
        trainer="Mike Tyson"
      />
    </div>
  );
}

export default Wednesday;
