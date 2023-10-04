import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import LogoGym from "./LogoGym";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isCrolled, setIsScrolled] = useState(false);
  const [colors, setColors] = useState({
    button1: "text-white",
    button2: "text-white",
  });

  function handleMouseOver(button) {
    setColors((prevColors) => ({
      ...prevColors,
      [button]: "text-base",
    }));
  }

  function handleMouseOut(button) {
    setColors((prevColors) => ({
      ...prevColors,
      [button]: "text-white",
    }));
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento del scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-row h-[5.5rem] items-centerpy-8 px-12 justify-between top-0 left-0 right-0 w-screen z-[100] font-Montserrat fixed max-sm:px-3 
    bg-${isCrolled ? "black" : "transparent"} max-md:h-[6.5rem] max-w-[1800px]`}
    >
      <picture className="h-[10rem] top-[.5rem] relative cursor-pointer max-md:h-[14rem] max-md:top-8 max-sm:right-5">
        <LogoGym />
      </picture>

      <div className="flex items-center max-xl:hidden">
        <ul className="flex gap-6 text-base gap-x-11 font-semibold max-2xl:gap-5 ">
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            <NavLink to="/schedule/monday">Schedule</NavLink>
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center relative max-md:top-3">
        <picture
          className={`mr-5 cursor-pointer hidden max-xl:block max-sm:mr-4 transition-all duration-150 ease-linear ${colors.button1}`}
          onMouseOver={() => handleMouseOver("button1")}
          onMouseOut={() => handleMouseOut("button1")}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </picture>
        <picture
          className={`mr-5 cursor-pointer relative max-sm:mr-4 transition-all duration-150 ease-linear ${colors.button2}`}
          onMouseOver={() => handleMouseOver("button2")}
          onMouseOut={() => handleMouseOut("button2")}
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
