import TestimonialIcon from "../../../assets/icons/testimonial.svg";

const testimonials = [
  {
    name: "Lena M",
    profession: "Freelance Designer",
    text: "Zendo feels like a breath of fresh air. Everything’s clear, and I finally enjoy planning my day.",
  },
  {
    name: "Jordan T",
    profession: "Developer & Writer",
    text: "I’ve tried a dozen productivity tools. Zendo is the only one that doesn’t overwhelm me.",
  },
  {
    name: "Nico A",
    profession: "Startup Founder",
    text: "Clean, quiet, and just enough features to stay focused. It’s exactly what I needed.",
  },
  {
    name: "Maya R",
    profession: "Creative Director",
    text: "The simplicity of Zendo helps me focus without distractions. It’s everything I’ve been looking for.",
  },
];
const Testimonials = () => {
  return (
    <section>
      <div className="mb-6">
        <h2>Voices of Calm and Clarity</h2>

        <p className="sub-text">
          Zendo is helping people find clarity and flow in their everyday work —
          without the stress.
        </p>
      </div>

      <ul>
        {testimonials.map((testimonial, index) => {
          return (
            <li className="mb-6" key={index}>
              <img
                className="mb-4"
                src={TestimonialIcon}
                alt="Testimonial Icon"
                width={25}
                height={25}
              />
              <p className="sub-text mb-2">{testimonial.text}</p>

              <p>
                - <span className="sub-text">{testimonial.name},</span>{" "}
                <span className="sub-text">{testimonial.profession}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
