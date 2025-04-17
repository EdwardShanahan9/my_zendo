import HeroImage from "../../../assets/images/hero.svg";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
      <div className="order-2 md:order-1 md:w-[45%]">
        <a href="https://storyset.com/office">
          <img className="w-auto" src={HeroImage} alt="Hero Image" />
        </a>
      </div>

      <div className="mb-6 md:order-2 md:w-[45%]">
        <h1>A Calm Space for Clear Thinking.</h1>

        <p className="sub-text mb-4 lg:mb-6 lg:w-[80%]">
          Zendo is a mindful space to build, plan, and breathe — designed for
          clarity, powered by calm.
        </p>

        <Button text="SIGN UP" />
      </div>
    </div>
  );
};

export default Hero;
