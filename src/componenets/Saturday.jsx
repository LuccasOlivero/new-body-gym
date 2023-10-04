import ScheduleOfClasses from "./ScheduleOfClasses";
function Saturday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Body Building"
        time="8:00am - 9:00am"
        trainer="Ramon Dino"
      />
      <ScheduleOfClasses
        type="Body Building"
        time="9:00am - 10:00am"
        trainer="Joan Pradells"
      />
      <ScheduleOfClasses
        type="Body Building"
        time="10:00am - 11:00am"
        trainer="Chris Bumstead"
      />
    </div>
  );
}

export default Saturday;
