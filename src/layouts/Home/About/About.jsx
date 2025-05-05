import AboutImage from "../../../assets/images/about.svg";

const About = () => {
  return (
    <section className="py-12 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 order-2 md:order-2">
        <h2 className="mb-4">Designed for Peaceful Productivity</h2>

        <p className="sub-text mb-3">
          Zendo is more than just a productivity tool — it’s a quiet digital
          space designed for clarity, calm, and intentional work.
        </p>

        <p className="sub-text">
          By combining minimal design with mindful features, Zendo helps you
          organize your thoughts, track your progress, and stay in tune with
          your goals. No distractions. No clutter. Just flow.
        </p>
      </div>

      <div className="w-full md:w-1/2 order-1 md:order-1">
        <a
          href="https://storyset.com/happy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AboutImage} alt="About" className="w-full h-auto" />
        </a>
      </div>
    </section>
  );
};

export default About;
