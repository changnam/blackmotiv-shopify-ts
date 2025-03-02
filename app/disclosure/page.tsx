import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <Disclosure>
      <DisclosureButton className="group flex items-center gap-2">
        Do you offer technical support?
        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel>No</DisclosurePanel>
    </Disclosure>
  );
}
