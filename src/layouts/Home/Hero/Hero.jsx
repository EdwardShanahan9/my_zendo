import HeroImage from "../../../assets/images/hero.svg";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between  md:px-8 lg:px-16 py-12 md:py-20 gap-8">
      <div className="w-full md:w-1/2">
        <h1>A Calm Space for Clear Thinking.</h1>
        <p className="sub-text mb-6 lg:w-[80%]">
          Zendo is a mindful space to build, plan, and breathe — designed for
          clarity, powered by calm.
        </p>
        <Button text="SIGN UP" />
      </div>

      <div className="w-full md:w-1/2">
        <a
          href="https://storyset.com/office"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={HeroImage} alt="Hero" className="w-full h-auto" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
