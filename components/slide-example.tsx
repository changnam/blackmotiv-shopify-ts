"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export function SlideExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>toggle</button>
      <div className="relative">
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          transition
          className="transition-[transform] duration-500 ease-in-out
                     data-[enter]:-translate-x-full 
                     data-[leave]:-translate-x-full"
        >
          <DialogBackdrop></DialogBackdrop>
          <DialogPanel>
            <div className="w-1/2 h-32 bg-green-300 border-gray-300 boorder">
              blabla
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  );
}
