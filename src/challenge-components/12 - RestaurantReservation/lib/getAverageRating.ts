export const getAverageRating = (
  values: { name: string; rating: number; review: string }[],
) => {
  const totalRating = values.reduce((acc, curr) => acc + curr.rating, 0);

  return totalRating / values.length;
};
