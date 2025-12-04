import { cva } from "class-variance-authority";
import {cn} from '../../lib/utils'

const formContainerStyles = cva(
  "flex flex-col gap-3 bg-white p-8 w-[450px] rounded-2xl"
);

export function FormContainer({ children, className }:any) {
  return <div className={cn(formContainerStyles(), className)}>{children}</div>;
}