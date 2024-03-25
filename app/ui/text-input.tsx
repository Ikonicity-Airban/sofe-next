import React, { HTMLAttributes, InputHTMLAttributes } from "react";

import { UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: HTMLAttributes<HTMLInputElement>["className"];
  icon?: React.ReactNode;
}

export default function TextInput({
  name,
  className,
  icon,
  ...rest
}: InputProps) {
  return (
    <div className="btn-outline px-4 rounded-full flex items-center relative">
      <div className="h-6 w-6 text-muted">{icon}</div>
      <input
        id={name}
        type="text"
        className={clsx(
          "p-3 bg-transparent hover:border-0 outline-none border-0 w-full focus:ring-0 text-sm font-light",
          className
        )}
        placeholder={name}
        {...rest}
      />
    </div>
  );
}
