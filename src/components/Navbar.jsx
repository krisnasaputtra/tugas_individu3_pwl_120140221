import { NavLink } from "react-router-dom";

const menuNav = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Message",
    link: "/message",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="text-white text-2xl font-semibold">Movie App</span>
        </a>
        <div className="block w-auto">
          <ul className="font-medium flex flex-row p-0 mt-0 space-x-8">
            {menuNav.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-700"
                      : "text-white hover:text-blue-700"
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
