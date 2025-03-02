"use client";

import {
  Field,
  Fieldset,
  Label,
  Legend,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { useState } from "react";

const plans = ["Startup", "Business", "Enterprise"];

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <form action="http://localhost:8080/api/posts/1/like" method="post">
      <Fieldset>
        <Legend>Server size</Legend>
        <RadioGroup name="plan" defaultValue={plans[0]} onChange={setSelected}>
          {plans.map((plan) => (
            <Field key={plan} className="flex items-baseline gap-2">
              <Radio value={plan} className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400">
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
              </Radio>
              <Label>{plan}</Label>
            </Field>
          ))}
        </RadioGroup>
      </Fieldset>
      <button>Submit</button>
    </form>
  );
}
