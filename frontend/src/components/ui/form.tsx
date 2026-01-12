import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const formContainerStyles = cva(
  "flex flex-col gap-3 bg-white w-[80vw] p-5 md:w-[450px] md:p-8  rounded-2xl"
);

export function FormContainer({ children, className, onsubmit, id }: any) {
  return (
    <form
      className={cn(formContainerStyles(), className)}
      onSubmit={onsubmit}
      id={id}>
      {children}
    </form>
  );
}
