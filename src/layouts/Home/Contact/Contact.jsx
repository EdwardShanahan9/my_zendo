import Button from "../../../components/Button/Button";

const Contact = () => {
  return (
    <section className="py-12">
      <div className="md:flex md:gap-10 md:items-start">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="mb-2">Get in Touch</h2>
          <p className="sub-text">
            We’re always happy to hear from you. Whether it’s feedback, a
            feature idea, or just a quick hello — send us a message and we’ll
            get back to you soon.
          </p>
        </div>

        <form className="space-y-6 md:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          <Button text="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
