import LogoGym from "./LogoGym";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Footer() {
  const [color, setColor] = useState("text-white");
  const [color2, setColor2] = useState("text-white");
  const [color3, setColor3] = useState("text-white");

  function handleOver1() {
    setColor(() => "text-red-600");
  }
  function handleOut1() {
    setColor(() => "text-white");
  }
  function handleOver2() {
    setColor2(() => "text-red-600");
  }
  function handleOut2() {
    setColor2(() => "text-white");
  }
  function handleOver3() {
    setColor3(() => "text-red-600");
  }
  function handleOut3() {
    setColor3(() => "text-white");
  }

  return (
    <section className="w-full bg-black h-[33rem] flex justify-between px-[10rem] py-[8rem] relative max-lg:flex-col max-lg:py-0 max-lg:items-center ">
      <div className="w-[20rem] text-white flex flex-col justify-between h-16 relative items-center">
        <div className="w-[200px] h-[250px]">
          <LogoGym />
        </div>

        <div className="relative top-[-2.5rem] max-lg:hidden">
          <p className="text-sm pb-3">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex justify-center gap-10  pb-3">
            <picture
              onMouseOver={handleOver1}
              onMouseOut={handleOut1}
              className={color}
            >
              <FontAwesomeIcon icon={faUserGroup} size="xl" />
            </picture>
            <picture
              onMouseOver={handleOver2}
              onMouseOut={handleOut2}
              className={color2}
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </picture>
            <picture
              onMouseOver={handleOver3}
              onMouseOut={handleOut3}
              className={color3}
            >
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </picture>
          </div>
          <h3 className=" text-sm">Privacy Policy | © 2023 NewBodyGym</h3>
        </div>
      </div>

      <div className="w-[15rem] text-white flex flex-col justify-evenly relative items-center">
        <h3 className="relative text-[22px] font-bold">
          Our Classes
          <span className="absolute bottom-[0px] left-[0rem] w-[3rem] h-[3px] bg-red-600 transform -translate-y-1/2 "></span>
        </h3>
        <p className="hover:font-extrabold hover:text-red-600">
          Fitness Classes
        </p>
        <p className="hover:font-extrabold hover:text-red-600">
          Aerobics Classes
        </p>
        <p className="hover:font-extrabold hover:text-red-600">Power Yoga</p>
        <p className="hover:font-extrabold hover:text-red-600">
          Learn Machines
        </p>
        <p className="hover:font-extrabold hover:text-red-600">
          Full-body Strength
        </p>
      </div>

      <div className="w-[15rem] text-white flex flex-col justify-evenly relative items-center max-lg:mb-[3rem]">
        <h3 className="relative text-[22px] font-bold">
          Workin hours
          <span className="absolute  bottom-[0px] left-[0rem] w-[3rem] h-[3px] bg-red-600 transform -translate-y-1/2 "></span>
        </h3>
        <p>Monday - Friday:</p>
        <p className="hover:font-extrabold hover:text-red-600">
          7:00am - 21:00pm
        </p>
        <p>Saturday:</p>
        <p className="hover:font-extrabold hover:text-red-600">
          7:00am - 19:00pm
        </p>
        <p>Sunday - Closed</p>
      </div>
    </section>
  );
}

export default Footer;
