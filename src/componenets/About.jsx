import { NavLink } from "react-router-dom";
import MiniCard from "./MiniCard";
import AboutImage from "./AboutImage";
import {
  faWeightHanging,
  faUserGroup,
  faGears,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Cards from "../Cards";
function About() {
  return (
    <div className="bg-grey bg-cover bg-center w-full h-full flex justify-center max-xl:pb-11">
      <section className="h-full bg-cover relative w-full px-[10rem] max-w-[1900px]">
        <Cards />

        <div className="flex items-center justify-between max-xl:justify-center ">
          <div className="w-[35rem] max-xl:w-[23rem]">
            <p className="uppercase font-extrabold text-[#ff0336]">
              who we are
            </p>
            <h2 className="font-bold text-3xl text-black mb-4">
              Take Your Health And Body To Next Level
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>

            <div className="flex gap-6 justify-center mb-10 max-sm:grid">
              <MiniCard icon={faUserGroup}>professional trainers</MiniCard>
              <MiniCard icon={faWeightHanging}>modern equipments</MiniCard>
              <MiniCard icon={faGears}>fancy gym machines</MiniCard>
            </div>

            <div className="relative w-[10.5rem] h-[3rem] ">
              <NavLink
                to="/schedule"
                className="w-full h-full mt-9 bg-[#292929] text-white uppercase font-bold text-sm hover:bg-[#1c1c1c] transition-all duration-300 ease-linear flex justify-center items-center "
              >
                take a tour
              </NavLink>
            </div>
          </div>
          <AboutImage>{faCircleHalfStroke}</AboutImage>
        </div>
      </section>
    </div>
  );
}

export default About;
