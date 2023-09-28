export default function NavBar() {
  return (
    <nav className="flex flex-row h-[5.5rem] items-center justify-between py-8 px-12 top-0 left-0 right-0 w-screen z-50 bg-black font-Montserrat ">
      <picture className="h-[10rem] top-[.5rem] relative ">
        <img src="/logo.png" alt="logo.png" className="w-full h-full block" />
      </picture>

      <div className="flex items-center max-xl:hidden">
        <ul className="flex gap-6 text-base gap-x-11 font-normal max-2xl:gap-5">
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Home
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            About
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Blog
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Schedule
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Pricing
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Classes
          </li>
          <li className="text-white cursor-pointer hover:text-[#ff0336] transition-all duration-300 ease-linear">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center ">
        <img
          src="./bx-menu.svg"
          className="hidden max-xl:block mr-[2rem]"
          alt="bx-menu"
        />
        <div className="relative flex items-center border-[3px] border-gray-600 rounded-md py-[.3rem] px-[.3rem] cursor-pointer ">
          <div className="relative bg-red-600 w-9 h-[2.5rem] rounded-md text-white text-4xl">
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
              +
            </span>
          </div>
          <h3 className="text-white text-sm ml-[.8rem] font-semibold">
            FIND GYM NOW
          </h3>
        </div>
      </div>
    </nav>
  );
}
