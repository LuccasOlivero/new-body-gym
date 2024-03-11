import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutCard({ children, icon, title, hidden = "" }) {
  return (
    <div
      className={`flex flex-col bg-yellow-50 p-12 items-center justify-evenly max-sm:p-4 ${hidden} `}
    >
      <div>
        <div className="flex justify-center items-center pb-4 ">
          <FontAwesomeIcon icon={icon} size="xl" color="#ff0336" />
          <h3 className="font-semibold text-2xl max-xl:text-xl ml-[1.5rem] max-md:text-lg max-sm:text-sm">
            {title}
          </h3>
        </div>
        <p className="text-sm font-light">{children}</p>
      </div>
    </div>
  );
}

export default AboutCard;
