export default function Navbar() {
  const navItems = [
    "Home",
    "About",
    "Process",
    "Projects",
    "Service",
    "Contact",
  ];
  const classBtn =
    "hover:cursor-pointer px-8 py-3 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors duration-300";
  return (
    <nav className="w-full flex justify-between items-center pt-5">
      <div>
        <h1 className="text-xl font-semibold gap-1.5 flex items-center cursor-pointer">
          <span className="p-5 w-5 h-5 flex items-center justify-center bg-blue-600 text-white rounded-full">
            R
          </span>
          Razibul
        </h1>
      </div>
      <ul className="flex gap-8 items-center">
        {navItems.map((items, i) => (
          <li
            key={i}
            className={i === navItems.length - 1 ? classBtn : "cursor-pointer"}
          >
            {items}
          </li>
        ))}
      </ul>
    </nav>
  );
}
