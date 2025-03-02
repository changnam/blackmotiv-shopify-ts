"use client";
import { useRef, useEffect } from "react";
export default function FocusInput() {
  console.log("FocusInput started.");
  const inputRef = useRef<HTMLInputElement>(null);
  const clickCounter = useRef(0);

  const increamentCounter = () => {
    clickCounter.current += 1;
    inputRef.current.value = String(clickCounter.current);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div onClick={increamentCounter} className="border p-4 h-120px bg-green-300">
      <input ref={inputRef} type="text" placeholder="Focus me!" />
    </div>
  );
}
