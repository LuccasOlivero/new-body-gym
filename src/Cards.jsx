import {
  faClockRotateLeft,
  faDumbbell,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const text1 =
  "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.";
const text2 =
  "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.";
const text3 =
  "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.";

function Cards() {
  return (
    <div className="flex relative top-[-7rem] justify-between gap-10 max-xl:grid max-xl:justify-center max-xl:gap-0 ">
      <div
        className={`flex flex-col bg-yellow-50 justify-center text-center items-center mt-16 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[300px] w-full max-w-sm hover:bg-aboutImg2 hover:bg-cover hover:text-white z-10 transition-all duration-300 ease-linear `}
      >
        <FontAwesomeIcon icon={faClockRotateLeft} color="#ff0336" size="3x" />
        <div className="px-10">
          <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">
            progression
          </h3>
          <p className="text-xs font-medium leading-2 w-full ">{text1}</p>
        </div>
      </div>

      <div
        className={`flex flex-col bg-yellow-50 justify-center text-center items-center mt-16 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[300px] w-full max-w-sm hover:bg-legs-p hover:bg-cover hover:text-white z-10 transition-all duration-300 ease-linear`}
      >
        <FontAwesomeIcon icon={faDumbbell} color="#ff0336" size="3x" />
        <div className="px-10">
          <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">workout</h3>
          <p className="text-[15px] font-medium leading-2 w-full ">{text2}</p>
        </div>
      </div>

      <div
        className={`flex flex-col bg-yellow-50 justify-center text-center items-center mt-16 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[300px] w-full max-w-sm hover:bg-back-w hover:bg-cover hover:text-white z-10 transition-all duration-300 ease-linear`}
      >
        <FontAwesomeIcon icon={faListCheck} color="#ff0336" size="3x" />
        <div className="px-10">
          <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">
            nutrition
          </h3>
          <p className="text-[15px] font-medium leading-2 w-full ">{text3}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
