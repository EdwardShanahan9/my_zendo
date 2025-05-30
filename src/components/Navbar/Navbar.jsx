import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="py-4 flex items-center justify-between mb-4">
      <img
        className="w-[28px] md:w-[32px] lg:w-[40px]"
        src={Logo}
        alt="Zendo Logo"
      />

      <ul className="hidden md:flex space-x-4 lg:space-x-8 text-sm">
        <li>
          <Link to="auth/signup" className="hover:text-primary transition">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="auth/login" className="hover:text-primary transition">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
