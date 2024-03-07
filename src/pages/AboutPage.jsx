import { faMap, faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";
import AboutCard from "../componenets/AboutCard";
import NavBar from "../componenets/NavBar";

function AboutPage() {
  return (
    <>
      <NavBar />
      <span
        rel="preload"
        className="h-[24rem] w-full bg-about bg-center bg-cover text-center text-white font-bold text-4xl flex justify-center items-end pb-3"
      >
        About us
      </span>

      <div className="w-full flex justify-center items-center my-10 relative">
        <section className="w-full h-[75rem] max-w-[1900px] max-sm:h-[50rem]">
          <div className="grid grid-cols-2 grid-rows-3 w-[80&] h-full max-xl:grid-cols-1 max-xl:grid-rows-4 max-sm:h-[50rem] mx-[10rem] shadow-2xl max-md:grid-cols-2 max-md:mx-[2rem] max-md:grid-rows-2">
            <AboutCard icon={faMap} title="The Birth of a Dream">
              Years ago, three fitness enthusiasts dreamed of creating a
              welcoming gym. They pooled savings, dedicated hours, and opened a
              thriving fitness center for the community's health and wellness.
            </AboutCard>
            <span className="bg-aboutImg1 w-full h-full bg-center bg-cover bg-no-repeat" />

            <span className="bg-aboutImg2 w-full h-full bg-center bg-cover bg-no-repeat max-xl:hidden" />
            <AboutCard
              icon={faUsers}
              title="A Haven of Strength and Community"
              hidden="max-xl:hidden"
            >
              In a modest gym, community goals and bonds thrived. Friends
              invested in quality equipment, hired trainers, and grew popular
              among all ages. Three friends' vision became an inspiring legacy
              of well-being.
            </AboutCard>

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
      </div>
    </>
  );
}

export default AboutPage;
