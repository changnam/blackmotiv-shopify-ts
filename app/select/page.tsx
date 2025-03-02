import { Description, Field, Label, Select } from "@headlessui/react";

export default function Example() {
  return (
    <Field disabled>
      <Label className="data-[disabled]:opacity-50">Project status</Label>
      <Description className="data-[disabled]:opacity-50">
        This will be visible to clients on the project.
      </Description>
      <Select name="status" className="data-[disabled]:bg-gray-100">
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="delayed">Delayed</option>
        <option value="canceled">Canceled</option>
      </Select>
    </Field>
  );
}
