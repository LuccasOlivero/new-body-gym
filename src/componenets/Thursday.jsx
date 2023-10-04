import ScheduleOfClasses from "./ScheduleOfClasses";

function Thursday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Fitness"
        time="6:00am - 7:00am"
        trainer="John Weights"
      />
      <ScheduleOfClasses
        type="Body Building"
        time="8:00am - 9:00am"
        trainer="Ronnie Coleman"
      />
      <ScheduleOfClasses
        type="Cycling"
        time="9:00am - 10:00am"
        trainer="Junifor Jonas"
      />
      <ScheduleOfClasses
        type="Running"
        time="10:00am - 11:00am"
        trainer="John Weights"
      />
      <ScheduleOfClasses
        type="Cycling"
        time="11:00am - 12:00am"
        trainer="David Vila"
      />
    </div>
  );
}

export default Thursday;
