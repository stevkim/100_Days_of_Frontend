import { useContext } from "react";
import { FormInputContext } from "../GeneratorForm";
import styles from "./settings.module.css";

interface ToggleSwitchProps {
  name: string;
  type: string;
}

const ToggleSwitch = ({ name, type }: ToggleSwitchProps) => {
  const { setValues } = useContext(FormInputContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(type, e.target.checked);
  };

  return (
    <label className="flex w-full items-center justify-between rounded-xl bg-blue-500 px-4 py-2 text-sm">
      {name}
      <div className={styles.toggleInput}>
        <input type="checkbox" onChange={(e) => handleChange(e)} />
        <span className={styles.slider}></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
