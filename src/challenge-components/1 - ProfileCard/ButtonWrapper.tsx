import Button from "./Buttons/Button";

const ButtonWrapper = () => {
  return (
    <div className="mt-auto flex w-full flex-row justify-evenly">
      <Button className="text-white bg-primary-blue hover:bg-secondary-blue">
        Follow
      </Button>
      <Button className="hover:bg-gray-100 border-2">Message</Button>
    </div>
  );
};

export default ButtonWrapper;
