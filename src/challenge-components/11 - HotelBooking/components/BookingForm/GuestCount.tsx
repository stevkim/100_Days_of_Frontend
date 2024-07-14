interface GuestCountProps {
  updateGuestCount: (type: string, value: number) => void;
}

const GuestCount = ({ updateGuestCount }: GuestCountProps) => {
  const COUNT = new Array(5).fill("");

  return (
    <div className="mt-8 flex w-full flex-row justify-between">
      <div className="flex w-[45%] flex-col">
        <label htmlFor="adultCount" className="text-lg font-semibold">
          Adults
        </label>
        <select
          name="adultCount"
          defaultValue={1}
          className="w-full rounded-md bg-gray-200 px-2 py-1"
          onChange={(e) => updateGuestCount("adult", parseInt(e.target.value))}
        >
          {COUNT.map((_, index) => {
            return (
              <option key={"adult" + index} value={index}>
                {index}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex w-[45%] flex-col">
        <label htmlFor="childrenCount" className="text-lg font-semibold">
          Children
        </label>
        <select
          name="childrenCount"
          defaultValue={0}
          className="w-full rounded-md bg-gray-200 px-2 py-1"
          onChange={(e) =>
            updateGuestCount("children", parseInt(e.target.value))
          }
        >
          {COUNT.map((_, index) => {
            return (
              <option key={"child" + index} value={index}>
                {index}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GuestCount;
