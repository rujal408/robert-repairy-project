import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <div className="relative w-full">
        {/* Input Field */}
        <input
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            inputRef.current = node; // Store in local ref as well
          }}
          type={type}
          className={cn(
            "block peer w-full rounded-md border bg-white px-2 pt-3 pb-1 text-sm text-foreground",
            className
          )}
          {...props}
        />

        <span
          onClick={() => inputRef?.current?.focus()}
          className={cn(
            `absolute z-40 text-primary cursor-text left-[18px] ${
              props.placeholder ? "text-xs top-2" : "top-1/2 text-base"
            } -translate-y-1/2 transition-all peer-focus:top-2 peer-focus:text-xs`
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
