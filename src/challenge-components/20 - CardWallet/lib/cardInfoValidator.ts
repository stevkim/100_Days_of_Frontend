import { z } from "zod";
import { detectCard } from "./detectCard";
import { TCard } from "../data";

const CardSchema = z.object({
  id: z.number(),
  cardNumber: z.custom((val) => {
    if (val.length < 15 || val.length > 16) {
      return false;
    }

    return detectCard(val) !== "unknown";
  }, "Invalid card number"),
  expireDate: z.custom((val) => {
    const [month, year] = val.split("/");

    const today = Date.now();
    const thisMonth = new Date(today).getMonth();
    const thisYear = new Date(today).getFullYear();

    if (!year || thisYear > +year) {
      return false;
    }
    if (!month || (thisYear === +year && thisMonth > +month - 1)) {
      return false;
    }

    return true;
  }, "Invalid expiration date"),
  cvc: z.string().length(3, "Invalid cvc code"),
  cardholderName: z
    .string()
    .min(4, "Name must contain at least 4 character(s)")
    .includes(" ", { message: "Please the name as it shows on the card" }),
});

export const cardInfoValidator = (input: TCard) => {
  const result = CardSchema.safeParse(input);

  return {
    success: result.success,
    errors: result.error?.issues.map((issue) => {
      return issue.message;
    }),
  };
};
