const Feature = ({ img, heading, text, index }) => {
  return (
    <li className="">
      <img
        width={25}
        height={25}
        className="mb-4"
        src={img}
        alt={`Feature ${index}`}
      />

      <h3 className="mb-4">{heading}</h3>

      <p className="sub-text">{text}</p>
    </li>
  );
};

export default Feature;
