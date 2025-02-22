import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [generatedId, setGeneratedId] = useState<string | null>(null);

    useEffect(() => {
      if (!props.id && inputRef.current) {
        setGeneratedId(`input-${crypto.randomUUID()}`);
      }
    }, [props.id]);

    const inputId = props.id || generatedId || "";

    return (
      <div className="relative w-full">
        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          ref={ref || inputRef}
          placeholder={placeholder || " "}
          className={cn(
            "peer block w-full rounded-md border bg-white px-2 pt-3 pb-1 text-sm text-foreground",
            className
          )}
          {...props}
        />

        <label
          htmlFor={inputId}
          className={cn(
            `absolute text-primary cursor-text left-[18px] ${
              placeholder ? "text-xs top-2" : "top-1/2 text-base"
            } -translate-y-1/2 transition-all peer-focus:top-2 peer-focus:text-xs`
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
