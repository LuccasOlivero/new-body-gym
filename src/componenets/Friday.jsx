import ScheduleOfClasses from "./ScheduleOfClasses";

function Friday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Body Building"
        time="8:00am - 9:00am"
        trainer="Chris Bumstead"
      />
      <ScheduleOfClasses
        type="Cycling"
        time="9:00am - 10:00am"
        trainer="Lara Croft"
      />
      <ScheduleOfClasses
        type="Fitness"
        time="10:00am - 11:00am"
        trainer="Lary Wheels"
      />
      <ScheduleOfClasses
        type="Running"
        time="12:00am - 13:00am"
        trainer="John Weights"
      />
      <ScheduleOfClasses
        type="Cross"
        time="8:00pm - 9:00pm"
        trainer="Milica Tails"
      />
    </div>
  );
}

export default Friday;
