import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonStyles = cva(
  "w-full h-12 rounded-xl font-medium flex items-center justify-center gap-2 transition border cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white border-transparent hover:opacity-80 rounded-sm", //bg -black is temporary we will add our app primary color here
        outline: "bg-white text-gray-700 border-gray-200 hover:border-blue-500",
        ghost:
          "bg-transparent border-transparent rounded-sm hover:bg-gray-300 flex items-center justify-start p-2 font-normal",
      },
      size: {
        default: "",
        sm: "h-10 text-sm",
        md: "h-10 w-50",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export function Button({
  variant,
  size,
  className,
  children,
  icon: Icon,
  ...props // includes onClick, type, disabled, etc.
}: any) {
  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
      type={props.type ?? "button"}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
}
