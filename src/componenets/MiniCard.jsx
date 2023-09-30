import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MiniCard({ children, icon }) {
  return (
    <div className="flex flex-col bg-yellow-50 w-[9rem] h-[7rem] justify-center items-center shadow-xl rounded-tr-[35px] rounded-bl-[35px] text-center mt-6 p-5">
      <FontAwesomeIcon icon={icon} size="2x" color="#ff0336" />
      <h2 className="font-bold text-xs uppercase pt-3 text-black ">
        {children}
      </h2>
    </div>
  );
}

export default MiniCard;
