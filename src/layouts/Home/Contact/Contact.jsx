import Button from "../../../components/Button/Button";

const Contact = () => {
  return (
    <div>
      <div>
        <h2>Get in Touch</h2>

        <p>
          We’re always happy to hear from you. Whether it’s feedback, a feature
          idea, or just a quick hello — send us a message and we’ll get back to
          you soon.
        </p>
      </div>

      <form action="">
        <div>
          <label htmlFor="name">Name:</label>

          <input type="text" id="name" value="" />
        </div>

        <div>
          <label htmlFor="name">Email:</label>

          <input type="email" id="email" value="" />
        </div>

        <div>
          <label htmlFor="name">Message:</label>

          <textarea id="email"></textarea>
        </div>

        <Button text="Submit" />
      </form>
    </div>
  );
};

export default Contact;
