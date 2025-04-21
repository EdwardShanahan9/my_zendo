import Button from "../../../components/Button/Button";
import CTAImage from "../../../assets/images/cta.svg";

const CTA = () => {
  return (
    <div>
      <div>
        <h2>Ready to Work with Clarity?</h2>

        <p>Take the first step toward a more mindful and focused workflow.</p>

        <p>Join Zendo and bring calm to your productivity.</p>

        <Button text="Get Started – It’s Free " />
      </div>

      <div>
        <a href="https://storyset.com/people">
          <img src={CTAImage} alt="CTA Image" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
