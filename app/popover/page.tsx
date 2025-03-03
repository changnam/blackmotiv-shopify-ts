
"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function Example() {
  return (
    <Popover as="div">
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center gap-2">
            Solutions
            <ChevronDownIcon className={clsx("size-5", open && "rotate-180")} />
          </PopoverButton>
          <PopoverPanel anchor="bottom" className="flex flex-col">
            <a href="/insights">Insights</a>
            <a href="/automations">Automations</a>
            <a href="/reports">Reports</a>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
