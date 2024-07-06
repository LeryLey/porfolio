import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <BrowserRouter>
      <div className="w-full flex justify-center items-center py-2 fixed z-20">
        <div>
          <button
            onClick={toggleMenu}
            className="flex md:hidden float-right pr-2 text-3xl"
          >
            {menu ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <ion-icon name="menu-outline"></ion-icon>
            )}
          </button>
          <nav
            className={
              !menu
                ? " bg-black  px-10 py-2 absolute top-0 left-0 -translate-x-40 flex flex-col gap-4 duration-300 ease-out"
                : " bg-black  px-10 py-2 absolute top-0 left-0 -translate-x-0 flex flex-col gap-4 duration-300 ease-out"
            }
          >
            {navLinks.map((link, index) => {
              return (
                <a key={index} href={link.path} className="list">
                  {link.title}
                </a>
              );
            })}
          </nav>
        </div>
        <nav className="space-x-10 bg-black rounded-full px-10 py-2 hidden md:flex">
          {navLinks.map((link, index) => {
            return (
              <a key={index} href={link.path} className="list">
                {link.title}
              </a>
            );
          })}
        </nav>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
