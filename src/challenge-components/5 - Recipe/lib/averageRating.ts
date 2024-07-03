import type { TRatings } from "../recipeData";

export const averageRating = (ratings: TRatings): number => {
  const ratingsList = Object.entries(ratings);

  const totals = ratingsList.reduce(
    (acc, curr) => {
      acc.count += curr[1];
      acc.total += curr[1] * parseInt(curr[0]);
      return acc;
    },
    { count: 0, total: 0 },
  );

  return parseInt((totals.total / totals.count).toFixed(2));
};
