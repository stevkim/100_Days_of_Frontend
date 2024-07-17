export type TSeverity = "low" | "medium" | "high";

export type TUser = {
  id: number;
  name: string;
  image: string;
  selected?: boolean;
};

export type TTask = {
  id: string;
  board: string;
  taskTitle: string;
  taskContent: string;
  severity: TSeverity;
  image?: string;
  date?: number;
  users?: TUser[];
};
