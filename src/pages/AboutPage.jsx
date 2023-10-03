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
        <div className="grid grid-cols-2 grid-rows-3 w-[80&] h-[60rem] mb-[3rem]">
          <AboutCard icon={faMap} title="The Birth of a Dream">
            Years ago, in a small corner of the city, three friends with a
            shared passion for fitness dreamed of a place where people could
            transform their lives through exercise. They pooled their savings
            and dedicated countless hours to bring their vision to life: a
            welcoming and motivating gym. They equipped the space with
            top-quality weights and machines, hired passionate trainers, and
            finally opened the doors to their gym. Since then, their small
            project has grown into a thriving fitness center where the community
            finds health and wellness.
          </AboutCard>
          <span className="bg-aboutImg1 w-full h-full  bg-center bg-cover" />

          <span className="bg-aboutImg2 w-full h-full  bg-center bg-cover" />
          <AboutCard icon={faUsers} title="A Haven of Strength and Community">
            Within the walls of that modest gym, the community found a place
            where their goals became attainable, and their bonds grew stronger.
            The friends invested in high-quality equipment and hired committed
            trainers to guide their members toward a healthier lifestyle. Over
            time, the gym gained popularity, attracting people of all ages and
            fitness levels. The vision of three friends became an inspiring
            story of perseverance and success, turning their passion into a
            lasting legacy of well-being.
          </AboutCard>
          <AboutCard
            icon={faChartLine}
            title="From Small Gym to Lasting Success"
          >
            As the gym expanded, it became a hub for fitness enthusiasts,
            offering a wide range of classes and programs to cater to diverse
            interests and abilities. What started as a dream among friends
            blossomed into a beacon of health and vitality for the entire
            community. Their dedication and hard work transformed their gym from
            a small, humble space into a respected institution, leaving a
            lasting impact on the lives of many.
          </AboutCard>

          <span className="bg-aboutImg3 w-full h-full  bg-center bg-cover" />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
