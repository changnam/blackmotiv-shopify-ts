"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxSelectedOption,
} from "@headlessui/react";
import { Fragment, useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn blablabla" },
];

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <MyListbox
      value={selectedPerson}
      onChange={setSelectedPerson}
      placeholder="Select a person&hellip;"
    >
      {people.map((person) => (
        <MyListboxOption key={person.id} value={person}>
          {person.name}
        </MyListboxOption>
      ))}
    </MyListbox>
  );
}

function MyListbox({ placeholder, children, ...props }) {
  return (
    <Listbox {...props}>
      <ListboxButton>
        <ListboxSelectedOption
          options={children}
          placeholder={<span className="opacity-50">{placeholder}</span>}
        />
      </ListboxButton>
      <ListboxOptions anchor="bottom">{children}</ListboxOptions>
    </Listbox>
  );
}

function MyListboxOption({ children, ...props }) {
  return (
    <ListboxOption as={Fragment} {...props}>
      {({ selectedOption }) => {
        return selectedOption ? (
          children
        ) : (
          <div className="data-[focus]:bg-blue-100">{children}</div>
        );
      }}
    </ListboxOption>
  );
}