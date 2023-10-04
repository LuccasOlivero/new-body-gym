import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ children, text, icon, img }) {
  return (
    <div
      className={`flex flex-col bg-yellow-50 justify-center text-center items-center mt-16 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[300px] w-full max-w-sm          hover:bg-${img} hover:bg-cover hover:text-yellow-50 z-10 transition-all duration-300 ease-linear`}
    >
      <FontAwesomeIcon icon={icon} color="#ff0336" size="3x" />
      <div className="px-10">
        <h3 className="text-[24px] font-bold uppercase mb-5 mt-2">
          {children}
        </h3>
        <p className="text-[15px] font-medium leading-2 w-full ">{text}</p>
      </div>
    </div>
  );
}

export default Card;
