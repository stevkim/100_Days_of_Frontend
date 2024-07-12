import { tw } from "@/utils/twMerge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  className?: string;
  children: React.ReactNode;
}

interface buttonVariants {
  [variant: string]: string;
  default: string;
}

interface buttonSizes {
  [variant: string]: string;
  default: string;
}

const Button = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonVariant: buttonVariants = {
    default: "bg-secondary-blue text-white hover:bg-primary-blue",
    outline: "border hover:bg-muted/80",
  };

  const buttonSize: buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={tw(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        buttonVariant[variant],
        buttonSize[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
