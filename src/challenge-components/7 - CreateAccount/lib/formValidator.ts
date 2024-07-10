import { z } from "zod";
import type { TForm } from "./formType";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, "Password must be at at least 8 characters"),
});

export const validateForm = (data: TForm) => {
  const result = formSchema.safeParse(data);

  return {
    success: result.success,
    errors: result.error?.issues.map((issue) => issue.message) || [],
  };
};
