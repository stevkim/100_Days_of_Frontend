import Button from "./Buttons/Button";

const ButtonWrapper = () => {
  return (
    <div className="mt-auto flex w-full flex-row justify-evenly">
      <Button className="bg-[#008CFF] text-white hover:bg-[#0066FF]">
        Follow
      </Button>
      <Button className="border-2 hover:bg-gray-100">Message</Button>
    </div>
  );
};

export default ButtonWrapper;
