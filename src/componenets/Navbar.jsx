import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "./test.css";
import { useState } from "react";

export default function NavBar() {
  const [color, setColor] = useState("text-white");
  const [color2, setColor2] = useState("text-white");
  function handleOver() {
    setColor(() => "text-base");
  }

  function handleMouseOut() {
    setColor(() => "text-white");
  }
  function handleOver2() {
    setColor2(() => "text-base");
  }

  function handleMouseOut2() {
    setColor2(() => "text-white");
  }

  return (
    <nav className="flex flex-row h-[5.5rem] items-center justify-between py-8 px-12 top-0 left-0 right-0 w-screen z-50 bg-transparent font-Montserrat fixed max-sm:px-3 ">
      <picture className="h-[10rem] top-[.5rem] relative cursor-pointer max-md:h-[14rem] max-md:top-8 max-sm:right-5">
        <img
          src="/logo.png"
          alt="logo.png"
          className="w-full h-full block"
          style={{ filter: "drop-shadow(0px 0px 8px red)" }}
        />
      </picture>

      <div className="flex items-center max-xl:hidden">
        <ul className="flex gap-6 text-base gap-x-11 font-semibold max-2xl:gap-5 ">
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Home
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            About
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Blog
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Schedule
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Pricing
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Classes
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center relative max-md:top-3">
        <picture
          className={`mr-5 cursor-pointer hidden max-xl:block max-sm:mr-4 transition-all duration-150 ease-linear ${color2}`}
          onMouseOver={handleOver2}
          onMouseOut={handleMouseOut2}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </picture>
        <picture
          className={`mr-5 cursor-pointer relative max-sm:mr-4 transition-all duration-150 ease-linear ${color}`}
          onMouseOver={handleOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faUser} size="lg" />
        </picture>

        <div className="relative flex items-center border-[3px] border-gray-600 rounded-md py-[.3rem] px-[.3rem] cursor-pointer max-md:hidden text-white text-sm font-semibold hover:text-[#ff0336] hover:border-gray-700 transition-all duration-150 ease-linear">
          <span className="relative bg-red-600 w-9 h-[2.5rem] rounded-md text-white text-3xl mr-2 after:content-['+'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:items-center after:justify-center"></span>
          FIND GYM NOW
        </div>
      </div>
    </nav>
  );
}
