import { cva } from "class-variance-authority";
import {cn} from '../../lib/utils'
import { InputHTMLAttributes, ComponentType } from "react";

const inputWrapperStyles = cva(
  "flex items-center h-12 border border-gray-200 rounded-xl px-3 transition-all",
  {
    variants: {
      focus: {
        true: "ring-2 ring-blue-500 border-blue-500",
      },
    },
  }
);

const inputStyles = cva(
  "w-full h-full bg-transparent outline-none ml-2 text-gray-700",
  {
    variants: {
      focus: {
        true: "ring-2 ring-blue-500 border-blue-500",
      },
    },
  }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

export function Input({ icon: Icon, className, ...props }: InputProps) {
  return (
    <div className={cn(inputWrapperStyles(), className)}>
      {Icon && <Icon size={18} className='text-gray-500' />}
      <input className={inputStyles()} {...props} />
    </div>
  );
}
