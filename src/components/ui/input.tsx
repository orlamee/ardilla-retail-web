import * as React from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    // const disabled =
    // 	props.value === "" || props.value === undefined || props.disabled;
    return (
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-10 w-full outline-none ring-0 ring-offset-0 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          className="outline-none absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparen"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <Eye className="h-4 w-4 text-[#868788]" aria-hidden="true" />
          ) : (
            <EyeOff
              className="h-4 w-4 text-[#868788]"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
