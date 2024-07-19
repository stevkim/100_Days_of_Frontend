import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface ProfileDescriptionProps {
  description: string;
}

const ProfileDescription = ({ description }: ProfileDescriptionProps) => {
  const [textLength, setTextLength] = useState(false);

  const seeMore = () => {
    setTextLength(true);
  };

  const seeLess = () => {
    setTextLength(false);
  };

  return (
    <div className="w-full px-4 text-sm">
      {textLength ? description : description.slice(0, 120) + "..."}
      {textLength ? (
        <button onClick={seeLess} className="ml-2 text-red-300">
          <ChevronUp size={"1em"} strokeWidth={5} />
        </button>
      ) : (
        <button onClick={seeMore} className="text-red-300">
          SEE MORE
        </button>
      )}
    </div>
  );
};

export default ProfileDescription;
