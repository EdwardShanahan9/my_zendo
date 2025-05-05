import Logo from "../../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-200 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="flex items-center gap-2">
          <img className="w-[30px] lg:w-[40px]" src={Logo} alt="Zendo Logo" />
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Zendo. All rights reserved.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Built with calm by{" "}
          <a
            className="underline hover:text-primary transition"
            href="https://github.com/EdwardShanahan9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edward Shanahan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
