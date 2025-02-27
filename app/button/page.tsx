import { Button } from "@headlessui/react";

export default function Example() {
  return (
    <Button
      disabled
      className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 data-[disabled]:bg-gray-500"
    >
      Save changes
    </Button>
  );
}
