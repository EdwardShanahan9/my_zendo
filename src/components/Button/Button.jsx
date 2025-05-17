import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="bg-primary hover:bg-secondary font-bold text-light px-10 py-4 lg:px-10 lg:py-3 rounded-md"
    >
      {text}
    </Link>
  );
};

export default Button;
