import type { TTask } from "../types/taskType";
import { z } from "zod";

const severity = ["low", "medium", "high"] as const;
const boards = ["todo", "inprogress", "underreview", "done"] as const;

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
});

const formSchema = z.object({
  id: z.string(),
  taskTitle: z.string().min(4, "Please provide a more descriptive title"),
  taskContent: z.string().min(10, "Please provide more details for this task"),
  severity: z.enum(severity),
  image: z.string().startsWith("https://", {
    message: "Image URL must be secure and start with https://",
  }),
  users: z
    .array(userSchema)
    .nonempty({ message: "You must assign at least 1 user(s)" }),
  date: z.number(),
  board: z.enum(boards),
});

export const validateForm = (task: TTask) => {
  let result;
  if (task.image) {
    result = formSchema.safeParse(task);
  } else {
    const formSchemaWithNoImage = formSchema.omit({ image: true });
    result = formSchemaWithNoImage.safeParse(task);
  }

  return {
    success: result.success,
    errors: result.error?.issues.map((issue) => {
      return issue.message;
    }),
  };
};
