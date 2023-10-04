import ScheduleOfClasses from "./ScheduleOfClasses";

function Monday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Fitness"
        time="5:00am - 6:00am"
        trainer="Ronnie Coleman"
      />
      <ScheduleOfClasses
        type="Body"
        time="7:00am - 8:00am"
        trainer="Ramon Dino"
      />
      <ScheduleOfClasses
        type="Running"
        time="9:00am - 10:00am"
        trainer="Joan Pradells"
      />
      <ScheduleOfClasses
        type="Cycling"
        time="10:00am - 11:00am"
        trainer="Michael Jonson"
      />
      <ScheduleOfClasses
        type="Cross"
        time="11:00am - 12:00am"
        trainer="Chris Bumstead"
      />
    </div>
  );
}

export default Monday;
