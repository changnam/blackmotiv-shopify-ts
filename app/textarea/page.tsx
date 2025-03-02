import { Description, Field, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";

export default function Example() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Description</Label>
        <Description className="text-sm/6 text-black/50">
          This will be shown under the product title.
        </Description>
        <Textarea
          className={clsx(
            "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
          )}
          rows={3}
        />
      </Field>
    </div>
  );
}
