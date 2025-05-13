import Button from "../../../components/Button/Button";
import CTAImage from "../../../assets/images/cta.svg";

const CTA = () => {
  return (
    <section className="py-12 flex-col flex md:flex-row items-center justify-between gap-8">
      <div className="">
        <h2 className="mb-4">Ready to Work with Clarity?</h2>

        <p className="sub-text mb-2">
          Take the first step toward a more mindful and focused workflow.
        </p>
        <p className="sub-text mb-6">
          Join Zendo and bring calm to your productivity.
        </p>

        <Button text="Get Started – It’s Free" />
      </div>

      <div className="">
        <a
          href="https://storyset.com/people"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={CTAImage} alt="CTA" className="w-full md:w-[80%]" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
