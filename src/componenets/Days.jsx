import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Days() {
  const currLocation = useLocation();

  const styles =
    "text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white";

  return (
    <div className="flex justify-center mt-8">
      <section className="px-[10rem] h-[35rem] flex flex-col max-lg:px-[5rem] max-sm:h-full max-sm:mb-6 max-sm:px-[2rem] w-full max-w-[1900px]">
        <div className="flex w-full h-9 mb-5 justify-center max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-2 z-50">
          <NavLink
            to="monday"
            className={`${styles} ${
              "/schedule/monday" === currLocation.pathname ? "bg-[#ff0336]" : ""
            }`}
          >
            Monday
          </NavLink>
          <NavLink
            to="tuesday"
            className={`${styles} ${
              "/schedule/tuesday" === currLocation.pathname
                ? "bg-[#ff0336]"
                : ""
            }`}
          >
            Tuesday
          </NavLink>
          <NavLink
            to="wednesday"
            className={`${styles} ${
              "/schedule/wednesday" === currLocation.pathname
                ? "bg-[#ff0336]"
                : ""
            }`}
          >
            Wednesday
          </NavLink>
          <NavLink
            to="thursday"
            className={`${styles} ${
              "/schedule/thursday" === currLocation.pathname
                ? "bg-[#ff0336]"
                : ""
            }`}
          >
            Thursday
          </NavLink>
          <NavLink
            to="friday"
            className={`${styles} ${
              "/schedule/friday" === currLocation.pathname ? "bg-[#ff0336]" : ""
            }`}
          >
            Friday
          </NavLink>
          <NavLink
            to="saturday"
            className={`${styles} ${
              "/schedule/saturday" === currLocation.pathname
                ? "bg-[#ff0336]"
                : ""
            }`}
          >
            Saturday
          </NavLink>
        </div>
        <Outlet />
      </section>
    </div>
  );
}

export default Days;
