import React from "react";
import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-[90%] lg:w-[90%] mx-auto py-6 flex items-center justify-between">
      <img className="w-[30px] lg:w-[40px]" src={Logo} alt="Zendo Logo" />

      <ul className="hidden md:flex">
        <li>
          <a className="mr-4 lg:mr-8 text-sm" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="mr-4 lg:mr-8 text-sm" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="mr-4 lg:mr-8 text-sm" href="#">
            About
          </a>
        </li>
        <li>
          <a className="mr-4 lg:mr-8 text-sm" href="#">
            Testimonials
          </a>
        </li>
        <li>
          <a className="text-sm" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
