import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutCard({ children, icon, title }) {
  return (
    <div className="flex flex-col bg-yellow-50 p-12 items-center justify-evenly">
      <FontAwesomeIcon icon={icon} size="2x" color="#ff0336" />
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-sm font-light">{children}</p>
    </div>
  );
}

export default AboutCard;
