import Input from "./Input";
import { SquareUser, Mail } from "lucide-react";
import { useState } from "react";
import { validateForm } from "./lib/formValidator";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const CreateForm = () => {
  const [formValues, setFormValues] = useState(initState);

  const handleChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validate = validateForm(formValues);

    if (!validate.success) {
      alert(validate.errors.join(", \n"));
    } else {
      alert("Account created! \n ...not really");
      setFormValues(initState);
    }
  };

  return (
    <form
      className="flex w-full max-w-[450px] flex-col gap-4 rounded-lg bg-white p-8"
      onSubmit={handleSubmit}
    >
      <div>
        <span className="text-xs font-semibold text-muted">START FOR FREE</span>
        <h1 className="text-3xl font-bold">Create a New Account</h1>
      </div>
      <div className="mt-4 flex w-full flex-row justify-between gap-4">
        <Input
          field="firstName"
          name="First name"
          type="text"
          Icon={SquareUser}
          placeholder="John"
          handleChange={handleChange}
        />
        <Input
          field="lastName"
          name="Last name"
          type="text"
          Icon={SquareUser}
          placeholder="Doe"
          handleChange={handleChange}
        />
      </div>
      <Input
        field="email"
        name="Email"
        type="email"
        Icon={Mail}
        placeholder="john.doe@gmail.com"
        handleChange={handleChange}
      />
      <Input
        field="password"
        name="Password"
        type="password"
        handleChange={handleChange}
      />
      <p className="my-3 text-xs font-semibold text-muted">
        Already have an account?{" "}
        <a className="cursor-pointer text-blue-400" href="/">
          Sign in
        </a>
      </p>
      <button
        type="submit"
        className="w-full rounded-full bg-secondary-blue py-2 text-sm text-white hover:bg-primary-blue"
      >
        Create Account
      </button>
    </form>
  );
};

export default CreateForm;
