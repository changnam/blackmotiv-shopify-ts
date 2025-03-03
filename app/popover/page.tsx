"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  useClose,
} from "@headlessui/react";

function MySearchForm() {
  let close = useClose();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        /* Perform search... */
        close();
      }}
    >
      <input type="search" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function Example() {
  return (
    <Popover>
      <PopoverButton>Filters</PopoverButton>
      <PopoverPanel>
        <MySearchForm />
        {/* ... */}
      </PopoverPanel>
    </Popover>
  );
}
