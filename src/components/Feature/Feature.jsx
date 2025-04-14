const Feature = ({ img, heading, text, index }) => {
  return (
    <li className="mb-6">
      <img
        className="mb-4"
        width={25}
        height={25}
        src={img}
        alt={`Feature ${index}`}
      />

      <h3 className="mb-4">{heading}</h3>

      <p className="">{text}</p>
    </li>
  );
};

export default Feature;
