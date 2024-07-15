export const convertRating = (rating: number) => {
  return Math.floor((rating / 5) * 100);
};
