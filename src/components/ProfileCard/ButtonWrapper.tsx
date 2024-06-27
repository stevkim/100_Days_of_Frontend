import FollowBtn from "./Buttons/FollowBtn";
import MessageBtn from "./Buttons/MessageBtn";

const ButtonWrapper = () => {
  return (
    <div className="mt-auto flex w-full flex-row justify-evenly">
      <FollowBtn />
      <MessageBtn />
    </div>
  );
};

export default ButtonWrapper;
