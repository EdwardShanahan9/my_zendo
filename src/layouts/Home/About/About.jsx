import AboutImage from "../../../assets/images/about.svg";

const About = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="">Designed for Peaceful Productivity</h2>

        <p className="sub-text mb-4">
          Zendo is more than just a productivity tool — it’s a quiet digital
          space designed for clarity, calm, and intentional work.
        </p>

        <p className="sub-text">
          By combining minimal design with mindful features, Zendo helps you
          organize your thoughts, track your progress, and stay in tune with
          your goals. No distractions. No clutter. Just flow.
        </p>
      </div>

      <div>
        <a href="https://storyset.com/happy">
          <img src={AboutImage} alt="About Image" />
        </a>
      </div>
    </div>
  );
};

export default About;
