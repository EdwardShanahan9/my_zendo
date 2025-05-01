import Feature1 from "../../../assets/icons/feature-1.svg";
import Feature2 from "../../../assets/icons/feature-2.svg";
import Feature3 from "../../../assets/icons/feature-3.svg";
import Feature4 from "../../../assets/icons/feature-4.svg";
import Feature from "../Feature/Feature";

const featureList = [
  {
    img: Feature1,
    heading: "Mindful Design",
    text: "A clean, calming interface that helps you focus on what truly matters — minimal, intuitive, and mindful.",
  },
  {
    img: Feature2,
    heading: "Balanced Workflow",
    text: "Stay grounded and in your flow with a seamless, balanced workflow. Achieve harmony between tasks and goals.",
  },
  {
    img: Feature3,
    heading: "Progress Tracking",
    text: "Visualize your journey with a serene progress tracker. Watch your growth unfold, step by step.",
  },
  {
    img: Feature4,
    heading: "Organized Categories",
    text: "Keep your tasks organized and nurtured. Categorize with ease and find balance in your workflow.",
  },
];

const Features = () => {
  return (
    <section className=" md:px-8 lg:px-16 py-12">
      <div className="mb-6 md:mb-10 md:text-center">
        <h2>Find Clarity in Every Task</h2>
        <p className="sub-text md:w-[60%] lg:w-[40%] mx-auto">
          Zendo brings focus and balance to your work, helping you stay
          organized and on track.
        </p>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureList.map((feature, index) => (
          <Feature
            key={index}
            index={index}
            img={feature.img}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
      </ul>
    </section>
  );
};

export default Features;
