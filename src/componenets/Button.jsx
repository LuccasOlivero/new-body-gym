function Button({ children }) {
  return (
    <div className="relative w-[10.5rem] h-[3rem]">
      <button
        className="w-full h-full mt-9 bg-yellow-50 text-black uppercase font-bold text-sm  relative 
      after:absolute after:transform after:translate-x-[-6.5rem] after:translate-y-[-1.8rem] after:transition-transform after:duration-500 after:ease-in-out after:hover:translate-x-[-7.85rem] after:hover:translate-y-[-.89rem] after:border after:border-gray-400 after:w-[10.5rem] after:h-[3rem] after:z-[-10] hover:text-[#c92142] transition-all duration-300 ease-linear"
      ></button>
    </div>
  );
}

export default Button;
