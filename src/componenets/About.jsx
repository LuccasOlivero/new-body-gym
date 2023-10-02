import MiniCard from "./MiniCard";
import AboutImage from "./AboutImage";
import {
  faWeightHanging,
  faUserGroup,
  faGears,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="flex items-center justify-between h-screen w-full relative bg-slate-700 px-24">
      <div className="w-[30rem]">
        <p className="uppercase font-extrabold text-[#ff0336]">who we are</p>
        <h2 className="font-bold text-3xl text-black mb-4">
          Take Your Health And Body To Next Level
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>

        <div className="flex gap-6 justify-center mb-5">
          <MiniCard icon={faUserGroup}>professional trainers</MiniCard>
          <MiniCard icon={faWeightHanging}>modern equipments</MiniCard>
          <MiniCard icon={faGears}>fancy gym machines</MiniCard>
        </div>

        <div className="relative w-[10.5rem] h-[3rem]">
          <button
            className="w-full h-full mt-9 bg-yellow-50 text-black uppercase font-bold text-sm   
            after:absolute after:transform after:translate-x-[-5rem] after:translate-y-[-1.8rem] after:transition-transform after:duration-500 after:ease-in-out                      after:hover:translate-x-[-6rem]              after:hover:translate-y-[-.8rem] after:border after:border-gray-400 after:w-[10rem] after:h-[2.8rem] after:z-[-10] hover:text-[#c92142] transition-all duration-300 ease-linear"
          >
            Test
          </button>
        </div>
      </div>
      <AboutImage>{faCircleHalfStroke}</AboutImage>
    </div>
  );
}

export default About;
