"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds", available: true },
  { id: 2, name: "Kenton Towne", available: true },
  { id: 3, name: "Therese Wunsch", available: true },
  { id: 4, name: "Benedict Kessler", available: false },
  { id: 5, name: "Katelyn Rohan", available: true },
];

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton>{selectedPerson.name}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            disabled={!person.available}
            className="data-[focus]:bg-blue-100 data-[disabled]:opacity-50"
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}