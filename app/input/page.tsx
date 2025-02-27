import { Description, Field, Input, Label } from "@headlessui/react";

export default function Example() {
  return (
    <Field disabled>
      <Label className="data-[disabled]:opacity-50">Name</Label>
      <Description className="data-[disabled]:opacity-50">
        Use your real name so people will recognize you.
      </Description>
      <Input name="full_name" className="data-[disabled]:bg-gray-100" />
    </Field>
  );
}
