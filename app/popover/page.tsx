"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { forwardRef } from "react";

let MyCustomButton = forwardRef(function (props, ref) {
  return <button className="..." ref={ref} {...props} />;
});

export default function Example() {
  return (
    <Popover as="nav">
      <PopoverButton as={MyCustomButton}>Solutions</PopoverButton>
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
