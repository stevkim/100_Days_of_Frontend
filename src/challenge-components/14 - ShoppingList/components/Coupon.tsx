interface CouponProps {
  coupon: string;
  handleCouponChange: (value: string) => void;
}

const Coupon = ({ coupon, handleCouponChange }: CouponProps) => {
  return (
    <div className="w-full rounded-md bg-white px-6 py-8 shadow-lg">
      <label className="flex flex-col text-2xl">
        Promo Code
        <input
          type="text"
          value={coupon}
          className="mt-2 rounded-md border-2 p-2 text-sm"
          placeholder="Enter promo code"
          onChange={(e) => handleCouponChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Coupon;
