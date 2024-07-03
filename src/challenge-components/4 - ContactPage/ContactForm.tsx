import FormInput from "./Form/FormInput";
import PreferredContact from "./Form/PreferredContact";
import FormTextBox from "./Form/FormTextBox";
import { useState } from "react";
import { validateFormData } from "./FormValidation";
import type { TFormData } from "./formTypes";

const initFormData: TFormData = {
  name: "",
  email: "",
  phone: "",
  "contact-method": "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<TFormData>(initFormData);

  const handleChange = (name: string, input: string) => {
    setFormData({
      ...formData,
      [name.toLowerCase()]: input,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const validate = validateFormData(formData);

    if (validate.success) {
      console.log("Successful validation... submit");
    } else {
      console.log(validate.errors);
    }
  };

  return (
    <form className="mx-auto mt-[4rem] flex h-[90%] w-full flex-col gap-4 rounded-lg bg-white p-8 md:w-[40%]">
      <h2 className="font-semibold">Send us a Message</h2>
      <FormInput name="Name" type="text" handleChange={handleChange} />
      <FormInput name="Email" type="email" handleChange={handleChange} />
      <FormInput name="Phone" type="tel" handleChange={handleChange} />
      <PreferredContact handleChange={handleChange} />
      <FormTextBox handleChange={handleChange} />
      <button
        onClick={(e) => handleSubmit(e)}
        className="mt-auto rounded-2xl bg-primary-blue py-2 text-white hover:bg-secondary-blue"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
