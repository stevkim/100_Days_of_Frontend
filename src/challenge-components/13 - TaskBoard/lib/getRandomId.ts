export const getRandomId = () => {
  const id = "" + Math.random();
  return id.substring(2, 10);
};
