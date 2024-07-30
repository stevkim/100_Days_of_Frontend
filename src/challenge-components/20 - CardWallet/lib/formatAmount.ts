export const formatAmount = (value: number, minus: boolean) => {
  return `${minus ? "-" : ""}$ ${value.toFixed(2)}`;
};
