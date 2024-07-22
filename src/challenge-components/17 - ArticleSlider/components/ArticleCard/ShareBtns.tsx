import facebook from "@/assets/SocialMediaIcons/facebook.svg";
import x from "@/assets/SocialMediaIcons/x.svg";
import dribbble from "@/assets/SocialMediaIcons/dribbble.svg";

const ShareBtns = () => {
  return (
    <div className="absolute left-[-120%] top-[-180%] z-[10] flex gap-2 rounded-md bg-gray-700 p-[.5rem]">
      <button className="aspect-square w-[1rem]">
        <img src={facebook} className="object-cover invert" />
      </button>
      <button className="aspect-square w-[1rem]">
        <img src={x} className="object-cover invert" />
      </button>
      <button className="aspect-square w-[1rem]">
        <img src={dribbble} className="object-cover invert" />
      </button>
      <div className="absolute bottom-[-8px] left-0 flex w-full justify-center">
        <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[8px] border-gray-700 border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  );
};

export default ShareBtns;
