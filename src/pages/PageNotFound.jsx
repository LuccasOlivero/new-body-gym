import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="absolute bg-notFound bg-cover bg-no-repeat w-full h-screen z-[999]">
      <div className="relative h-full w-full bg-black opacity-70 flex justify-center items-center flex-col">
        <div className="max-xl:px-10 max-sm:px-5">
          <h2
            className="text-white text-[13rem] font-extrabold 
          max-sm:text-[9rem]"
          >
            404
          </h2>
          <h2
            className="text-white text-[4rem] font-extrabold w-full
          max-sm:text-[2rem] "
          >
            UH OH! You're lost.
          </h2>

          <p className="text-white font-bold text-xl max-sm:text-sm">
            The page you are looking for does not exist. <br />
            How you got here is a mystery. <br />
            click the button below to go back to the homepage
          </p>

          <Link
            to="/"
            className="w-[8rem] h-[2rem] bg-white mt-9 text-black 
          font-bold flex items-center justify-center hover:bg-gray-400"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
