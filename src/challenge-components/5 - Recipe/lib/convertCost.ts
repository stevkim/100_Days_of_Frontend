export const convertCost = (cost: number): string => {
  if (cost <= 10) {
    return "Under $" + Math.ceil(cost);
  }
  return "Approx. $" + Math.ceil(cost / 5) * 5;
};
