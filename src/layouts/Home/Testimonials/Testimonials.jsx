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
    <section className=" py-12">
      <div className="mb-10 text-left md:text-center">
        <h2 className="mb-2">Voices of Calm and Clarity</h2>
        <p className="sub-text max-w-xl mx-auto">
          Zendo is helping people find clarity and flow in their everyday work —
          without the stress.
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <li key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <img
              src={TestimonialIcon}
              alt="Testimonial Icon"
              width={24}
              height={24}
              className="mb-4"
            />
            <p className="sub-text mb-3">"{testimonial.text}"</p>
            <p className="text-sm font-medium">
              – {testimonial.name},{" "}
              <span className="text-gray-500">{testimonial.profession}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
