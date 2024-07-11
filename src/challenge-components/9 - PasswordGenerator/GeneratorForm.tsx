import { useState, createContext } from "react";
import Settings from "./Inputs/Settings";
import CharacterLength from "./Inputs/CharacterLength";
import { GeneratePassword } from "./lib/GeneratePassword";

const initState = {
  charLength: 12,
  uppercase: false,
  lowercase: false,
  numbers: false,
  specialCharacters: false,
};

export const FormInputContext = createContext<{
  formInputs: typeof initState;
  setValues: (type: string, value: number | boolean) => void;
}>({ formInputs: initState, setValues: () => {} });

interface GeneratorFormProps {
  displayPassword: (value: string) => void;
}

const GeneratorForm = ({ displayPassword }: GeneratorFormProps) => {
  const [formInputs, setFormInputs] = useState(initState);

  const setValues = (type: string, value: number | boolean) => {
    setFormInputs({ ...formInputs, [type]: value });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newPassword = GeneratePassword(formInputs);
    displayPassword(newPassword);
  };

  return (
    <form>
      <FormInputContext.Provider value={{ formInputs, setValues }}>
        <CharacterLength />
        <Settings />
        <button
          onClick={(e) => handleClick(e)}
          className="mt-8 w-full rounded-lg bg-blue-800 px-4 py-2 text-center hover:bg-blue-600"
        >
          Generate Password
        </button>
      </FormInputContext.Provider>
    </form>
  );
};

export default GeneratorForm;
