"use client";

import { Checkbox } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

export default function Example() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Checkbox checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked, disabled }) => (
        <span
          className={clsx(
            "block size-4 rounded border",
            !checked && "bg-white",
            checked && !disabled && "bg-blue-500",
            checked && disabled && "bg-gray-500",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <svg
            className={clsx(
              "stroke-white",
              checked ? "opacity-100" : "opacity-0"
            )}
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </Checkbox>
  );
}