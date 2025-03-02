"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
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
    <Disclosure>
      <DisclosureButton >Filters</DisclosureButton>
      <DisclosurePanel>
        <MySearchForm />
        {/* ... */}
      </DisclosurePanel>
    </Disclosure>
  );
}
