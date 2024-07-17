export const Coupons = [
  { id: "EARLYBIRDSAVE40", discount: 40 },
  { id: "SAVE10", discount: 10 },
  {
    id: "STEVENSTHEBEST",
    discount: 100,
  },
];

export const getCoupon = (input: string) => {
  return Coupons.find((coupon) => coupon.id === input.toUpperCase());
};
