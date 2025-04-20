import TestimonialIcon from "../../../assets/icons/testimonial.svg";

const testimonials = [
  {
    name: "Lena M.",
    profession: "Freelance Designer",
    text: "Zendo feels like a breath of fresh air. Everything’s clear, and I finally enjoy planning my day.",
    icon: "🌸",
  },
  {
    name: "Jordan T.",
    profession: "Developer & Writer",
    text: "I’ve tried a dozen productivity tools. Zendo is the only one that doesn’t overwhelm me.",
    icon: "🪴",
  },
  {
    name: "Nico A.",
    profession: "Startup Founder",
    text: "Clean, quiet, and just enough features to stay focused. It’s exactly what I needed.",
    icon: "🌿",
  },
  {
    name: "Maya R.",
    profession: "Creative Director",
    text: "The simplicity of Zendo helps me focus without distractions. It’s everything I’ve been looking for.",
    icon: "🌙",
  },
];
const Testimonials = () => {
  return (
    <div>
      <h2>Voices of Calm and Clarity</h2>

      <p className="sub-text">
        Zendo is helping people find clarity and flow in their everyday work —
        without the stress.
      </p>

      <ul>
        {testimonials.map((testimonial, index) => {
          return (
            <li key={index}>
              <img src={TestimonialIcon} alt="Testimonial Icon" />
              <p>{testimonial.text}</p>

              <p>
                - <span>{testimonial.name},</span>{" "}
                <span>{testimonial.profession}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Testimonials;
