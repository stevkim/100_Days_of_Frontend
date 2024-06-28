import { tw } from "@/utils/twMerge";
import { ReactNode } from "@tanstack/react-router";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={tw("w-[8rem] rounded-full py-1 text-sm", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
