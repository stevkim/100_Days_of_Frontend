import type { TItem } from "../types/itemType";

const TAX_RATE = 0.09;

export const getCost = (
  inputs: TItem[],
  shippingCost: number = 0,
  discountPercentage: number = 0,
) => {
  const subtotal = inputs.reduce((acc, curr) => {
    const itemTotal = curr.price * curr.quantity;
    return acc + itemTotal;
  }, 0);

  const discount = subtotal * (discountPercentage / 100);

  const tax = (subtotal - discount) * TAX_RATE;

  return {
    subtotal,
    tax,
    discount,
    total: subtotal + tax + shippingCost,
  };
};

// return { subtotal, tax, total };
