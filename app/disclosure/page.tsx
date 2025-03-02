"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const Example: React.FC = () => {
  return (
    <Disclosure as="div" className="border rounded-md p-2">
      {({ open }: { open: boolean }) => (
        <>
          <DisclosureButton className="flex items-center justify-between w-full p-2 text-left text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200">
            <span>Do you offer technical support?</span>
            <ChevronDownIcon
              className={clsx("w-5 transition-transform", open && "rotate-180")}
            />
          </DisclosureButton>
          <DisclosurePanel className="p-2 text-gray-700">
            No, we currently do not offer technical support.
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Example;
