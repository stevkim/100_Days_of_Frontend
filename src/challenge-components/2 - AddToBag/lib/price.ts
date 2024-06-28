export const salePrice = (price: number, sale: number | null) => {
  if (!sale) {
    return;
  }

  const percentageOff = sale / 100;
  const discount = price * percentageOff;

  return price - discount;
};

export const convertToDollars = (price: number): string => {
  const dollars = "$";
  return dollars + price.toFixed(2);
};
