import ScheduleOfClasses from "./ScheduleOfClasses";

function Monday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Fitness"
        time="9:00am - 10:00am"
        trainer="David Vila"
      />
      <ScheduleOfClasses
        type="Body"
        time="10:00am - 11:00am"
        trainer="Mario Vreco"
      />
      <ScheduleOfClasses
        type="Running"
        time="11:00pm - 12:00pm"
        trainer="John Weights"
      />
      <ScheduleOfClasses
        type="Cycling"
        time="4:00pm - 5:00pm"
        trainer="Michael Jonson"
      />
      <ScheduleOfClasses
        type="Cross"
        time="6:00pm - 7:00pm"
        trainer="David Vila"
      />
    </div>
  );
}

export default Monday;
