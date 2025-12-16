import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export function AccountMenu({ children }:any) {
  return (
    <label className="text-gray-900 text-sm">
      {children}
    </label>
  );
}