interface ProfileMetricsProps {
  age: number;
  height: number;
  weight: number;
}

const ProfileMetrics = ({ age, height, weight }: ProfileMetricsProps) => {
  return (
    <div className="flex justify-evenly px-4 text-center text-xs">
      <div className="h-fit w-fit rounded-md bg-gray-200 px-2 py-1 leading-3">
        <span className="block font-semibold">Age</span>
        {age}
      </div>
      <div className="h-fit w-fit rounded-md bg-gray-200 px-2 py-1 leading-3">
        <span className="block font-semibold">Height</span>
        {height} inches
      </div>
      <div className="h-fit w-fit rounded-md bg-gray-200 px-2 py-1 leading-3">
        <span className="block font-semibold">Weight</span>
        {weight} lbs
      </div>
    </div>
  );
};

export default ProfileMetrics;
