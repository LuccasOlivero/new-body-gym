import { faMap, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";
import AboutCard from "../componenets/AboutCard";
function AboutPage() {
  return (
    <>
      <span className="block h-[24rem] w-full bg-about bg-center bg-cover"></span>
      <h2
        className={`relative text-center font-bold text-4xl top-[-3rem] text-white`}
      >
        About us
      </h2>
      <section className="w-[70%] m-auto shadow-2xl">
        <div className="grid grid-cols-2 grid-rows-3 w-[80&] h-[70rem] mb-[3rem] max-xl:grid-cols-1 max-xl:grid-rows-6 max-sm:h-[75rem]">
          <AboutCard icon={faMap} title="The Birth of a Dream">
            Years ago, three fitness enthusiasts dreamed of creating a welcoming
            gym. They pooled savings, dedicated hours, and opened a thriving
            fitness center for the community's health and wellness.
          </AboutCard>
          <span className="bg-aboutImg1 w-full h-full  bg-center bg-cover bg-no-repeat" />

          <AboutCard icon={faUsers} title="A Haven of Strength and Community">
            In a modest gym, community goals and bonds thrived. Friends invested
            in quality equipment, hired trainers, and grew popular among all
            ages. Three friends' vision became an inspiring legacy of
            well-being.
          </AboutCard>
          <span className="bg-aboutImg2 w-full h-full  bg-center bg-cover bg-no-repeat" />

          <AboutCard
            icon={faChartLine}
            title="From Small Gym to Lasting Success"
          >
            Expanding gym became fitness hub with diverse classes. Friend's
            dream turned into community health beacon. Dedication transformed
            small gym into respected institution, impacting many.
          </AboutCard>

          <span className="bg-aboutImg3 w-full h-full  bg-center bg-cover bg-no-repeat" />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
