import { z } from "zod";

export type TFormInput = {
  name: string;
  email: string;
  password: string;
};

const FormInputSchema = z.object({
  name: z.string().min(4, "Name must be longer than 4 characters"),
  email: z.string().email({ message: "Please provide a valid email address" }),
  password: z.string().min(8, "Password must at least 8 characters"),
});

export const formValidator = (inputs: TFormInput) => {
  const results = FormInputSchema.safeParse(inputs);

  return {
    success: results.success,
    errors: results.error?.issues.map((issue) => issue.message),
  };
};
