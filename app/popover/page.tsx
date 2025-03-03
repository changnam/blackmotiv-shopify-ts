"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { forwardRef } from "react";

export default function Example() {
  return (
    <Popover as="nav">
      <PopoverButton as="button">Solutions</PopoverButton>
      <PopoverPanel as="form">
        {({ close }) => (
          <button
            onClick={async () => {
              await fetch("/accept-terms", { method: "POST" });
              close();
            }}
          >
            Read and accept
          </button>
        )}
      </PopoverPanel>
    </Popover>
  );
}
