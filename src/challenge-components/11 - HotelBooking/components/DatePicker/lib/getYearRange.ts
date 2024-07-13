export const getYearRange = () => {
  const today = Date.now();
  const currentYear = new Date(today).getFullYear();

  const yearRange: number[] = [];

  for (let i = currentYear - 1; i < currentYear + 5; i++) {
    yearRange.push(i);
  }

  return yearRange;
};
