"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      value={selectedPerson}
      onChange={setSelectedPerson}
      onClose={() => setQuery("")}
    >
      <ComboboxInput
        aria-label="Assignee"
        onChange={(event) => setQuery(event.target.value)}
        className="border"
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person}
            value={person}
            className="data-[focus]:bg-blue-100"
          >
            {person}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
