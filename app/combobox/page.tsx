"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function Example() {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <form action="http:/localhost:8080/api/posts/1/like" method="post">
      <Combobox
        name="assignee"
        defaultValue={people[0]}
        onClose={() => setQuery("")}
      >
        <ComboboxInput
          aria-label="Assignee"
          displayValue={(person) => person?.name}
          onChange={(event) => setQuery(event.target.value)}
          className="border border-gray-300"
        />
        <ComboboxOptions anchor="bottom" className="border empty:invisible">
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="data-[focus]:bg-blue-100"
            >
              {person.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
      <button>Submit</button>
    </form>
  );
}