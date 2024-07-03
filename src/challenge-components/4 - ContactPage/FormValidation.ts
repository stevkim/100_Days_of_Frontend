import { z } from "zod";
import type { TFormData } from "./formTypes";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const contactEnum = ["email", "phone"] as const;

const formDataSchema = z.object({
  name: z.string().min(4, "Name must be longer than 4 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  "contact-method": z.enum(contactEnum, {
    errorMap: () => ({ message: "Please select a method of communication" }),
  }),
  message: z
    .string()
    .min(20, "Message must be longer than 20 characters")
    .max(100, "Message must not be longer than 100 characters"),
});

export const validateFormData = (
  data: TFormData,
): { success: boolean; errors: string[] } => {
  const result = formDataSchema.safeParse(data);

  return {
    success: result.success,
    errors: result.error?.issues.map((issue) => issue.message) || [],
  };
};
