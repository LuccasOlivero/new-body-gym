import ScheduleOfClasses from "./ScheduleOfClasses";

function Tuesday() {
  return (
    <div className="max-md:pt-[2rem] max-sm:mt-[2rem]">
      <ScheduleOfClasses
        type="Boxing"
        time="9:00am - 10:00am"
        trainer="Mike Tyson"
      />
      <ScheduleOfClasses
        type="Yoga"
        time="10:00am - 11:00am"
        trainer="Mia Kha"
      />
      <ScheduleOfClasses
        type="Crossfit"
        time="12:00am - 13:00am"
        trainer="Cristofer Columbo"
      />
      <ScheduleOfClasses
        type="Fitness"
        time="14:00am - 15:00pm"
        trainer="Kimbo"
      />
    </div>
  );
}

export default Tuesday;
