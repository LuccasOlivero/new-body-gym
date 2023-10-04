import { NavLink } from "react-router-dom";

function Button({ children }) {
  return (
    <div className="relative w-[10.5rem] h-[3rem]">
      <NavLink
        to="/pricing"
        className="w-full h-full mt-9 bg-yellow-50 text-black uppercase font-bold text-sm   
      after:absolute after:transform after:translate-x-[2rem] after:translate-y-[-1rem] after:transition-transform after:duration-500 after:ease-in-out           after:hover:translate-x-[0rem] after:hover:translate-y-[0rem] after:border after:border-gray-400 after:w-[10.5rem] after:h-[3rem] after:z-[-10] hover:text-[#c92142] transition-all duration-300 ease-linear flex justify-center items-center"
      >
        {children}
      </NavLink>
    </div>
  );
}

export default Button;
