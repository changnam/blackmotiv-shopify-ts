"use client";

import {
  Description,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useState } from "react";

const plans = [
  { name: "Startup", description: "12GB, 6 CPUs, 256GB SSD disk" },
  { name: "Business", description: "16GB, 8 CPUs, 512GB SSD disk" },
  { name: "Enterprise", description: "32GB, 12 CPUs, 1TB SSD disk" },
];

export default function Example() {
  let [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
    >
      {plans.map((plan) => (
        <Field key={plan.name} className="flex items-baseline gap-2">
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <div>
            <Label>{plan.name}</Label>
            <Description className="opacity-50">{plan.description}</Description>
          </div>
        </Field>
      ))}
    </RadioGroup>
  );
}