import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Process",
    "Projects",
    "Service",
    "Contact",
  ];

  const classBtn =
    "hover:cursor-pointer px-6 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300";

  return (
    <nav className="w-full flex justify-between items-center pt-5 px-4 md:px-10 relative z-20">
      <div>
        <h1 className="text-xl font-semibold gap-1.5 flex items-center cursor-pointer">
          <span className="p-5 w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full">
            R
          </span>
          Razibul
        </h1>
      </div>
      <ul className="hidden md:flex gap-8 items-center">
        {navItems.map((item, i) => (
          <li
            key={i}
            className={i === navItems.length - 1 ? classBtn : "cursor-pointer"}
          >
            {item}
          </li>
        ))}
      </ul>
      <div
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>
      {isOpen && (
        <ul className="absolute top-20 left-4 right-4 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 md:hidden">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`${
                i === navItems.length - 1 ? classBtn : "cursor-pointer"
              } text-center`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
