import React from "react";
import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="py-4 flex items-center justify-between">
      <img
        className="w-[28px] md:w-[32px] lg:w-[40px]"
        src={Logo}
        alt="Zendo Logo"
      />

      <ul className="hidden md:flex space-x-4 lg:space-x-8 text-sm">
        <li>
          <a href="#" className="hover:text-primary transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#" className="hover:hover:text-primary transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
