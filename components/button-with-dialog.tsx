"use client";
import { useState, useRef } from "react";
import clsx from "clsx";

export default function ButtonWithDialog({pos}:{pos: string}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDialog = () => setOpen(!open);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDialog}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click me
      </button>

      {open && (
        <div 
        className={clsx(
                      pos == "top" ? "absolute p-4 bg-gray-800 text-white rounded shadow-lg" :
                      "absolute left-1/2 -translate-x-1/2 p-4 bg-gray-800 text-white rounded shadow-lg",
                       )}>
          I’m a dialog!
        </div>
      )}
    </div>
  );
}
