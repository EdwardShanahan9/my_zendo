import HeroImage from "../../../assets/images/hero.svg";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full ">
        <h1>A Calm Space for Clear Thinking.</h1>

        <p className="sub-text mb-6 lg:w-[80%]">
          Zendo is a mindful space to build, plan, and breathe — designed for
          clarity, powered by calm.
        </p>

        <Button link="/auth/signup" text="SIGN UP" />
      </div>

      <div className="w-full justify-self-end">
        <a
          href="https://storyset.com/office"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={HeroImage} alt="Hero" className="w-full" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
