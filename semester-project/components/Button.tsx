import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

// ChatGPT
type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  grey?: boolean;
  blue?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  grey,
  blue,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-md font-roboto font-medium",
    {
      "bg-brand-blue-50 hover:bg-brand-blue-200 text-white": blue,
      "bg-brand-grey-200 hover:bg-brand-grey-300 text-brand-grey-800 border-2 border-brand-grey-400": grey,
    },
    className
  );
  

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>{" "}
      <ChevronRightIcon
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;
