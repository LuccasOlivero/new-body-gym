import SideBar from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import LogoGym from "./LogoGym";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState("translate-x-[-100%]");
  const [isCrolled, setIsScrolled] = useState(false);
  const [colors, setColors] = useState({
    button1: "text-white",
    button2: "text-white",
  });
  const linkStyles =
    "text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear";

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

  function handleSideBar() {
    setActive("translate-x-0");
  }

  function upScrollOnNavLinks() {
    window.scroll(0, 0);
  }

  return (
    <>
      <nav
        className={`flex flex-row h-[5.5rem] items-centerpy-8 px-12 justify-between top-0 left-0 right-0 w-screen z-[100] font-Montserrat fixed max-sm:px-3 
    bg-${isCrolled ? "black" : "transparent"} max-md:h-[6.5rem] transition-all`}
      >
        <NavLink
          to="/"
          className="h-[4rem] top-[.6rem] relative cursor-pointer max-md:h-[3rem] max-md:top-8 max-sm:right-5 max-sm:pl-8"
        >
          <LogoGym />
        </NavLink>

        <div className="flex items-center max-xl:hidden">
          <ul className="flex gap-6 text-base gap-x-11 font-semibold max-2xl:gap-5 ">
            <li className={linkStyles}>
              <NavLink to="/" onClick={() => upScrollOnNavLinks()}>
                Home
              </NavLink>
            </li>
            <li className={linkStyles}>
              <NavLink to="/about" onClick={() => upScrollOnNavLinks()}>
                About
              </NavLink>
            </li>
            <li className={linkStyles}>
              <NavLink
                to="/schedule/monday"
                onClick={() => upScrollOnNavLinks()}
              >
                Schedule
              </NavLink>
            </li>
            <li className={linkStyles}>
              <NavLink to="/pricing" onClick={() => upScrollOnNavLinks()}>
                Pricing
              </NavLink>
            </li>
            <li className={linkStyles}>
              <NavLink to="/contact" onClick={() => upScrollOnNavLinks()}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center relative max-md:top-3">
          <picture
            className={`mr-5 cursor-pointer hidden max-xl:block max-sm:mr-4 transition-all duration-150 ease-linear ${colors.button1}`}
            onMouseOver={() => handleMouseOver("button1")}
            onMouseOut={() => handleMouseOut("button1")}
            onClick={handleSideBar}
          >
            <FontAwesomeIcon icon={faBars} size="xl" />
          </picture>

          <NavLink
            to="/contact"
            className="relative flex items-center border-[3px] border-gray-600 rounded-md py-[.3rem] px-[.3rem] cursor-pointer max-md:hidden text-white text-sm font-semibold hover:text-[#ff0336] hover:border-gray-700 transition-all duration-150 ease-linear uppercase"
          >
            <span className="relative bg-red-600 w-9 h-[2.5rem] rounded-md text-white text-3xl mr-2 after:content-['+'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:items-center after:justify-center "></span>
            find gym now
          </NavLink>
        </div>
      </nav>
      <SideBar setActive={setActive} active={active} />
    </>
  );
}

export default NavBar;
