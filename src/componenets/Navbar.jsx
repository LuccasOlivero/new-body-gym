import "./test.css";

export default function NavBar() {
  return (
    <nav className="flex flex-row h-[5.5rem] items-center justify-between py-8 px-12 top-0 left-0 right-0 w-creen z-50 bg-transparent font-Montserrat fixed max-sm:p-1">
      <picture className="h-[10rem] top-[.5rem] relative cursor-pointer max-md:h-[16rem] max-md:top-8 ">
        <img
          src="/logo.png"
          alt="logo.png"
          className="w-full h-full block"
          style={{ filter: "drop-shadow(0px 0px 8px red)" }}
        />
      </picture>

      <div className="flex items-center max-xl:hidden">
        <ul className="flex gap-6 text-base gap-x-11 font-semibold max-2xl:gap-5 ">
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Home
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            About
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Blog
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Schedule
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Pricing
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Classes
          </li>
          <li className="text-yellow-50 cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center relative max-md:top-3">
        <picture className="mr-5 h-6 w-6 hidden max-xl:block max-md:h-7 max-md:w-7 max-sm:mr-2">
          <img
            src="/bars-solid.png"
            alt="bars-solid.png"
            className="w-full h-full block "
          />
        </picture>

        <picture className="mr-5 h-[1.9rem] w-[1.9rem] cursor-pointer relative top-[-5px] max-md:h-8 max-md:w-8 max-sm:mr-2">
          <img
            src="/user.png"
            alt="user.png"
            className="w-full h-full block "
          />
        </picture>

        <div className="relative flex items-center border-[3px] border-gray-600 rounded-md py-[.3rem] px-[.3rem] cursor-pointer max-md:hidden text-white text-sm font-semibold hover:text-[#ff0336] hover:border-gray-700 transition-all duration-150 ease-linear">
          <span className="relative bg-red-600 w-9 h-[2.5rem] rounded-md text-white text-3xl mr-2 after:content-['+'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:items-center after:justify-center"></span>
          FIND GYM NOW
        </div>
      </div>
    </nav>
  );
}
