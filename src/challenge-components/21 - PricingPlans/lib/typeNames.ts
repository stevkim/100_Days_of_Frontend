export enum TypeNames {
  aio = "All in one",
  basic = "Basic",
  best = "Best results",
}

export type TypeName = keyof typeof TypeNames;
