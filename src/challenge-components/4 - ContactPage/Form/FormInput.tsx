interface Props {
  name: string;
  type: string;
  handleChange: (name: string, value: string) => void;
}

const FormInput = ({ name, type, handleChange }: Props) => {
  return (
    <label htmlFor={name} className="relative">
      <span aria-readonly className="invisible absolute">
        {name}
      </span>
      <input
        name={name}
        className="w-full rounded-lg border-2 p-1"
        type={type}
        placeholder={name}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </label>
  );
};

export default FormInput;
