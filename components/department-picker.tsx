"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const departments = [
  { id: 1, name: "Marketing", contact: "Durward Reynolds" },
  { id: 2, name: "HR", contact: "Kenton Towne" },
  { id: 3, name: "Sales", contact: "Therese Wunsch" },
  { id: 4, name: "Finance", contact: "Benedict Kessler" },
  { id: 5, name: "Customer service", contact: "Katelyn Rohan" },
];

function compareDepartments(a, b) {
  return a.name.toLowerCase() === b.name.toLowerCase();
}

export default function DepartmentPicker({ selectedDepartment }) {
  const [query, setQuery] = useState("");

  function onChange(department) {
    selectedDepartment = department;
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
      by={compareDepartments}
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
            key={department.id}
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