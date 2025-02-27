"use client";

import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function Example() {
  return (
    <form action="http://localhost:8080/api/posts/1/like" method="post">
      <Field>
        <Label>Assignee:</Label>
        <Listbox name="assignee" defaultValue={people[0]}>
          <ListboxButton>{({ value }) => value.name}</ListboxButton>
          <ListboxOptions anchor="bottom">
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="data-[focus]:bg-blue-100"
              >
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </Field>
      <button>Submit</button>
    </form>
  );
}
