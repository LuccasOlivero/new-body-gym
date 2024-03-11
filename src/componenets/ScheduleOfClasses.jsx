import { NavLink } from "react-router-dom";

function ScheduleOfClasses({ type, time, trainer }) {
  const columnStyles = "font-semibold max-sm:text-sm";
  return (
    <>
      <section className="relative w-full bg-[#f2f2f2] h-[5rem] shadow-lg flex justify-between items-center px-10 mt-3 max-md:px-5 max-sm:px-3 max-sm:h-[15rem] max-sm:py-[1rem] max-sm:text-center  max-sm:flex-col">
        <div className="w-[9rem]">
          <span className="text-xs font-light max-sm:font-extralight">
            Class Name
          </span>
          <p className={columnStyles}>{type}</p>
        </div>

        <div className="w-[9rem]">
          <span className="text-xs font-light max-sm:text-sm">Time</span>
          <p className={columnStyles}>{time}</p>
        </div>

        <div className="w-[9rem]">
          <span className="text-xs font-light max-sm:text-sm">Trainer</span>
          <p className={columnStyles}>{trainer}</p>
        </div>

        <div className="">
          <NavLink to="/contact" onClick={() => window.scroll(0, 0)}>
            <button className="text-white text-[15px] max-sm:text-xs font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200">
              Join Now
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default ScheduleOfClasses;
