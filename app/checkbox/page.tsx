"use client";

import { Checkbox, Description, Field, Label } from "@headlessui/react";
import { useState } from "react";

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Field disabled>
      <Label className="data-[disabled]:opacity-50">Enable beta features</Label>
      <Description className="data-[disabled]:opacity-50">
        This will give you early access to new features we're developing.
      </Description>
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
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
      </Checkbox>
    </Field>
  );
}