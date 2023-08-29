"use client";

import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  Icon: React.ReactElement;
  className?: string;
}

const Icons = ({ onClick, Icon, className }: IconProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center justify-center bg-slate-100 shadow-md p-2 hover:scale-110 transition",
          className
        )}
      >
        {Icon}
      </button>
    </div>
  );
};

export default Icons;
