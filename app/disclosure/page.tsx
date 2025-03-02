import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-black/5 rounded-xl bg-black/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
            No.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
