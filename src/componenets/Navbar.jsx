export default function NavBar() {
  return (
    <nav className="bg-black w-screen flex justify-center">
      <div className="flex items-center gap-x-20 h-16  justify-between ">
        <picture className="h-full ml-10 ">
          <img
            src="/logo.png"
            alt="logo.png"
            className="w-31 h-full inline-block"
          />
        </picture>

        <div className="flex items-center mx-52">
          <ul className="flex gap-6 text-base">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Blog</li>
            <li className="text-white">Pricing</li>
            <li className="text-white">Classes</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-10 border border-gray-300">
          <button className="bg-slate-50">+</button>
          <h3 className="text-white">Find a gym</h3>
        </div>
      </div>
    </nav>
  );
}
