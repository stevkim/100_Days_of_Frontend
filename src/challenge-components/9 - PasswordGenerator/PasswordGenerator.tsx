import { useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import GeneratorForm from "./GeneratorForm";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("Create a password");

  const displayPassword = (value: string) => {
    setPassword(value);
  };

  const resetDisplay = () => {
    setPassword("Create a password");
  };

  return (
    <section className="flex h-page w-full items-center justify-center bg-gray-200">
      <div className="flex max-w-[400px] flex-col gap-4 rounded-2xl bg-[#09151c] px-4 py-6 text-gray-300">
        <PasswordDisplay value={password} resetDisplay={resetDisplay} />
        <GeneratorForm displayPassword={displayPassword} />
      </div>
    </section>
  );
};

export default PasswordGenerator;
