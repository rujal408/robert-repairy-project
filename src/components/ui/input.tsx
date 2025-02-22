import { cn } from "@/lib/utils"; // Ensure your cn utility is imported
import React, { useEffect, useRef, useState } from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    const [generatedId, setGeneratedId] = useState<string | null>(null);
    const stableIdRef = useRef(props.id || `input-${crypto.randomUUID()}`);

    useEffect(() => {
      if (!props.id) setGeneratedId(stableIdRef.current);
    }, [props.id]);

    const inputId = props.id || generatedId || "";

    return (
      <div className="relative w-full">
        {/* Input Field */}
        <input
          id={inputId}
          type={type}
          ref={ref}
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
