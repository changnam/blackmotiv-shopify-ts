"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const departments = [
  { name: "Marketing", contact: "Durward Reynolds" },
  { name: "HR", contact: "Kenton Towne" },
  { name: "Sales", contact: "Therese Wunsch" },
  { name: "Finance", contact: "Benedict Kessler" },
  { name: "Customer service", contact: "Katelyn Rohan" },
];

export default function DepartmentPicker({ selectedDepartment }) {
  const [query, setQuery] = useState("");

  function onChange(department) {
    console.log("Selected department:", department);
  }
  
  const filteredDepartments =
    query === ""
      ? departments
      : departments.filter((department) => {
          return department.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selectedDepartment}
      by="name"
      onChange={onChange}
      onClose={() => setQuery("")}
    >
      <ComboboxInput
        aria-label="Department"
        displayValue={(department) => department?.name}
        onChange={(event) => setQuery(event.target.value)}
        className="border"
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {filteredDepartments.map((department) => (
          <ComboboxOption
            key={department.name}
            value={department}
            className="data-[focus]:bg-blue-100"
          >
            {department.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}