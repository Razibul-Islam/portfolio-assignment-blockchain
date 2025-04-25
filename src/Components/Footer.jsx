import Contact from "./Contact";

export default function Footer() {
  const navItems = [
    "Home",
    "About",
    "Process",
    "Projects",
    "Service",
    "Contact",
  ];
  return (
    <footer className="bg-[#132238] text-white px-6 md:px-20 pt-32 pb-16 relative z-0">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2 cursor-pointer">
            <span className="p-2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
              R
            </span>
            <span>Razibul</span>
          </h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 items-center text-sm">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-400 text-sm">
          © 2025 Razibul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
