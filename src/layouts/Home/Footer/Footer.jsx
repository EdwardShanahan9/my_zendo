import Logo from "../../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="w-[30px] lg:w-[40px]" src={Logo} alt="Zendo Logo" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zendo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
