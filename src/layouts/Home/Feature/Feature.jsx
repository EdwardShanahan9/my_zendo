const Feature = ({ img, heading, text, index }) => {
  return (
    <li className="text-left">
      <div className="w-10 h-10 flex items-center justify-center mb-4">
        <img
          className="w-6 h-6 object-contain"
          src={img}
          alt={`Feature ${index}`}
        />
      </div>
      <h3 className="mb-4">{heading}</h3>
      <p className="sub-text">{text}</p>
    </li>
  );
};

export default Feature;
