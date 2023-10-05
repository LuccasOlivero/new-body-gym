import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function SideBar({ setSideBar }) {
  useEffect(() => {
    // When the component mounts, it disables scrolling
    document.body.style.overflow = "hidden";

    // When the component unmounts, it re-enables scrolling
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleClick() {
    setSideBar(() => false);
  }

  return (
    <>
      <div className="flex">
        <section className="bg-[#ff0336] w-[38%] h-screen z-[200] absolute overflow-hidden p-12 left-0 clip-custom-shape-2">
          <div
            className=" w-full flex justify-end cursor-pointer"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faTimes} size="3x" color="white" />
          </div>

          <div className="flex flex-col items-center h-full justify-center">
            <ul className="">
              <li
                className="text-white text-2xl font-semibold mb-6"
                onClick={handleClick}
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                className="text-white text-2xl font-semibold mb-6"
                onClick={handleClick}
              >
                <NavLink to="/about">About</NavLink>
              </li>
              <li
                className="text-white text-2xl font-semibold mb-6"
                onClick={handleClick}
              >
                <NavLink to="/schedule/monday">Schedule</NavLink>
              </li>
              <li
                className="text-white text-2xl font-semibold mb-6"
                onClick={handleClick}
              >
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li
                className="text-white text-2xl font-semibold mb-6"
                onClick={handleClick}
              >
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </section>
        <div
          className="w-full bg-gray-600 bg-opacity-50 h-full z-[199] absolute"
          onClick={handleClick}
        ></div>
      </div>
    </>
  );
}

export default SideBar;
