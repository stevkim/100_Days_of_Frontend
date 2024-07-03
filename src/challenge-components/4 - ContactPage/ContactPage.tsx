import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page flex w-[100vw] flex-col p-20 md:flex-row">
      <ContactHeader />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
