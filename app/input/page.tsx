import { Description, Field, Input, Label } from "@headlessui/react";

export default function Example() {
  return (
    <Field>
      <Label>Name</Label>
      <Description>
        Use your real name so people will recognize you.
      </Description>
      <Input name="full_name" />
    </Field>
  );
}
