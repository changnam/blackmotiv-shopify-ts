import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function Example() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Name</Label>
        <Description className="text-sm/6 text-black/50">
          Use your real name so people will recognize you.
        </Description>
        <Input
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
            "data-[hover]:text-green-300 data-[focus]:bg-blue-100"
          )}
        />
      </Field>
    </div>
  );
}
