import {
  faClockRotateLeft,
  faDumbbell,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text1, text2, text3 } from "./constants/constants";

const cardsStyle =
  "flex flex-col bg-slate-50 justify-center text-center items-center mt-16 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[300px] w-full max-w-sm hover:bg-cover hover:text-white z-10 transition-all duration-300 ease-linear";

function Cards() {
  return (
    <div className="flex relative top-[-7rem] justify-between gap-10 max-xl:grid max-xl:justify-center max-xl:gap-0 ">
      <div className={`${cardsStyle} hover:bg-aboutImg2 `}>
        <FontAwesomeIcon icon={faClockRotateLeft} color="#ff0336" size="3x" />
        <div className="px-10">
          <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">
            progression
          </h3>
          <p className="text-xs font-medium leading-2 w-full ">{text1}</p>
        </div>
      </div>

      <div className={`${cardsStyle} hover:bg-legs-p`}>
        <FontAwesomeIcon icon={faDumbbell} color="#ff0336" size="3x" />
        <div className="px-10">
          <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">workout</h3>
          <p className="text-[15px] font-medium leading-2 w-full ">{text2}</p>
        </div>
      </div>

      <div className={`${cardsStyle} hover:bg-back-w`}>
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
