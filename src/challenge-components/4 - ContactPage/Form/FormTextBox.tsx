interface Props {
  handleChange: (name: string, value: string) => void;
}

const FormTextBox = ({ handleChange }: Props) => {
  return (
    <textarea
      className="w-full rounded-lg border-2 p-1"
      placeholder="Message"
      rows={5}
      onChange={(e) => handleChange("message", e.target.value)}
    />
  );
};

export default FormTextBox;
