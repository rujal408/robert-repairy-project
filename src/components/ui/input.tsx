import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Ensure your cn utility is imported

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const inputId =
      props.id || `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className="relative w-full">
        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "peer block w-full rounded-md border bg-background px-2 pt-3 pb-1 text-sm text-foreground placeholder-transparent",
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== "")} // Keep label up if input has value
          {...props}
        />

        <label
          htmlFor={inputId}
          className={cn(
            "absolute cursor-text left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
            focused && "top-2 text-xs text-primary"
          )}
          onClick={() => setFocused(true)}
        >
          {label}
        </label>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
