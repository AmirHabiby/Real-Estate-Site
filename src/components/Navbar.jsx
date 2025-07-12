import { assets } from "../assets/assets";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden"; // when in mobile menu, disable scrolling
    } else {
      document.body.style.overflow = "auto"; ///otherwise enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-32 lg:px-40 bg-transparent ">
        <img className="w-20 h-16 md:h-23 " src={assets.logo} alt="" />

        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-grey-400">
            Home
          </a>

          <a href="#About" className="cursor-pointer hover:text-grey-400">
            About
          </a>

          <a
            href="#Projects"
            className="cursor-pointer
                hover:text-grey-400"
          >
            Projects
          </a>

          <a
            href="#Testimonials"
            className="cursor-pointer
                hover:text-grey-400"
          >
            Testimonials
          </a>
        </ul>

        <button className="hidden md:block px-10 py-2 rounded font-medium transition-colors btn-effect-19">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          className=" md:hidden w-7 cursor-pointer"
          alt=""
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* ---------Mobile-Screen----------- */}

      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-gray-500 transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-white">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-8 py-2 rounded inline-block hover:border hover:border-white"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-8 py-2 rounded inline-block hover:border hover:border-white"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-8 py-2 rounded inline-block hover:border hover:border-white"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-8 py-2 rounded inline-block hover:border hover:border-white"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
