const COLORS = [
  "#FFB6C1",
  "#FFDAB9",
  "#E6E6FA",
  "#F0E68C",
  "#D8BFD8",
  "#B0E0E6",
];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};
