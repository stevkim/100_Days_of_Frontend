import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { formValidator, type TFormInput } from "../lib/formValidator";

const initState: TFormInput = {
  name: "",
  email: "",
  password: "",
};

const EmailSignupForm = () => {
  const [formInputs, setFormInputs] = useState(initState);

  const handleChange = (type: string, value: string) => {
    setFormInputs({ ...formInputs, [type]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validated = formValidator(formInputs);

    if (validated.success) {
      alert("Sign up successful \n ...sort of");
    } else {
      alert(validated.errors?.join("\n"));
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <Input
        name="Name"
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <Input
        name="Email"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Input
        name="Password"
        type="password"
        onChange={(e) => handleChange("password", e.target.value)}
      />
      <Button onClick={handleSubmit} className="mt-2 w-full shadow-md">
        Sign up
      </Button>
    </form>
  );
};

export default EmailSignupForm;
