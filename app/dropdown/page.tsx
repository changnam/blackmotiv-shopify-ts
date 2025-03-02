"use client";

import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";

export default function Example() {
  function showSettingsDialog() {
    alert("Open settings dialog!");
  }

  return (
    <Menu>
      <MenuButton>My account</MenuButton>
      <MenuItems anchor="bottom">
        <MenuSection>
          <MenuHeading className="text-sm opacity-50">Settings</MenuHeading>
          <MenuItem>
            <button
              onClick={showSettingsDialog}
              className="block w-full text-left data-[focus]:bg-blue-100"
            >
              Settings
            </button>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuSection>
          <MenuHeading className="text-sm opacity-50">License</MenuHeading>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuSection>
          <MenuHeading className="text-sm opacity-50"></MenuHeading>
          <form action="/logout" method="post">
            <MenuItem>
              <button
                type="submit"
                className="block w-full text-left data-[focus]:bg-blue-100"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}
