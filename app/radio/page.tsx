"use client";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

type planType = {
  id: number;
  name: string;
  available: boolean;}

const plans = [
  { id: 1, name: "Startup", available: true },
  { id: 2, name: "Business", available: true },
  { id: 3, name: "Enterprise", available: false },
];

 function comparePlans(a: planType, b: planType) {
  return a.name.toLowerCase() === b.name.toLowerCase();
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup
      value={selected}
      by={comparePlans}
      onChange={setSelected}
      aria-label="Server size"
    >
      {plans.map((plan) => (
        <Field key={plan.id}>
          <Radio value={plan} disabled={!plan.available} />
          <Label>{plan.name}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
}