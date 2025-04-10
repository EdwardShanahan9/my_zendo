const Button = ({ text }) => {
  return (
    <button className="bg-primary hover:bg-secondary font-bold text-light px-8 py-2 lg:px-10 lg:py-3 rounded-md">
      {text}
    </button>
  );
};

export default Button;
