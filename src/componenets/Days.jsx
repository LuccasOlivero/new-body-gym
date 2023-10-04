import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./test.css";

function Days() {
  return (
    <div className="flex justify-center mt-8">
      <section className="px-[10rem] h-[35rem] flex flex-col max-lg:px-[5rem] max-sm:h-full max-sm:mb-6 max-sm:px-[2rem] w-full max-w-[1900px]">
        <div className="flex w-full h-9 mb-5 justify-center max-lg:grid max-lg:grid-cols-3 max-sm:grid-cols-2 z-50">
          <NavLink
            to="monday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Monday
          </NavLink>
          <NavLink
            to="tuesday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white  "
          >
            Tuesday
          </NavLink>
          <NavLink
            to="wednesday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white  "
          >
            Wednesday
          </NavLink>
          <NavLink
            to="thursday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
          >
            Thursday
          </NavLink>
          <NavLink
            to="friday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white  "
          >
            Friday
          </NavLink>
          <NavLink
            to="saturday"
            className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white  "
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
