interface Props {
  handleChange: (name: string, value: string) => void;
}

const PreferredContact = ({ handleChange }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-500 text-sm">
        Preferred contact method of communication
      </p>
      <div className="text-gray-500 flex flex-row gap-8">
        <label htmlFor="email-radio">
          <input
            id="email-radio"
            name="contact-method"
            type="radio"
            value="email"
            className="mr-1"
            onChange={(e) => handleChange("contact-method", e.target.value)}
          />
          Email
        </label>
        <label htmlFor="phone-radio">
          <input
            id="phone-radio"
            name="contact-method"
            type="radio"
            value="phone"
            className="mr-1"
            onChange={(e) => handleChange("contact-method", e.target.value)}
          />
          Phone
        </label>
      </div>
    </div>
  );
};

export default PreferredContact;
