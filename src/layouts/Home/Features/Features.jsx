import Feature1 from "../../../assets/icons/feature-1.svg";
import Feature2 from "../../../assets/icons/feature-2.svg";
import Feature3 from "../../../assets/icons/feature-3.svg";
import Feature4 from "../../../assets/icons/feature-4.svg";
import Feature from "../../../components/Feature/Feature";

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
    <section>
      <div className="mb-6">
        <h2 className="">Find Clarity in Every Task</h2>

        <p className="text-sm">
          Zendo brings focus and balance to your work, helping you stay
          organized and on track.
        </p>
      </div>

      <ul>
        {featureList.map((feature, index) => {
          return (
            <Feature
              index={index}
              img={feature.img}
              heading={feature.heading}
              text={feature.text}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
