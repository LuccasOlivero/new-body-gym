export default function NavBar() {
  return (
    <nav className="flex flex-row h-[5.5rem] items-center justify-between py-8 px-12 top-0 left-0 right-0 w-screen z-50 bg-black font-Montserrat">
      <picture className="h-[5rem]">
        <img src="/logo.png" alt="logo.png" className="w-full h-full block" />
      </picture>

      <div className="flex items-center">
        <ul className="flex gap-6 text-lg gap-x-11 text-[1rem]">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Blog</li>
          <li className="text-white">Schedule</li>
          <li className="text-white">Pricing</li>
          <li className="text-white">Classes</li>
          <li className="text-white">Contact</li>
        </ul>
      </div>

      <div className="relative flex items-center border-2 border-gray-600 rounded-md py-[.3rem] px-[.6rem]  cursor-pointer">
        <div className="relative bg-red-600 w-9 h-10 rounded-md text-white text-4xl">
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            +
          </span>
        </div>
        <h3 className="text-white text-sm ml-[.8rem] font-semibold">
          FIND GYM NOW
        </h3>
      </div>
    </nav>
  );
}
