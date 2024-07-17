import { tw } from "@/utils/twMerge";

type buttonVariantType = {
  [prop: string]: string;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

const Button = ({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonVariants: buttonVariantType = {
    icon: "h-5 aspect-square rounded-sm disabled:text-muted",
    default: "bg-black text-white py-2 rounded-md hover:bg-black/75",
  };

  return (
    <button
      className={tw(
        `flex items-center justify-center ${buttonVariants[variant]}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
