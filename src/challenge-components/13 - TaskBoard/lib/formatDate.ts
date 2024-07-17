export const formatDate = (input: number) => {
  const date = new Date(input);
  return date.toLocaleDateString("en-US");
};
