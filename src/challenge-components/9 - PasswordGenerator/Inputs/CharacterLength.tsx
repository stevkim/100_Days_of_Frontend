import { useContext } from "react";
import { FormInputContext } from "../GeneratorForm";

const CharacterLength = () => {
  const { formInputs, setValues } = useContext(FormInputContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues("charLength", parseInt(e.target.value));
  };

  return (
    <label className="mb-4 flex flex-col text-xs">
      <div className="flex">
        CHARACTER LENGTH:{" "}
        <span className="ml-auto text-lg font-semibold text-blue-400">
          {formInputs.charLength}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        12
        <input
          type="range"
          className="mx-2 w-full"
          defaultValue={formInputs.charLength}
          min={12}
          max={32}
          onChange={(e) => handleChange(e)}
        />
        32
      </div>
    </label>
  );
};

export default CharacterLength;
