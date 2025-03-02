"use client";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { FC } from "react";

// Define the props for MyCustomLink using TypeScript
interface MyCustomLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

// Custom Link Component
const MyCustomLink: FC<MyCustomLinkProps> = ({ href, onClick, children }) => {
  return (
    <Link href={href} className="text-blue-500" onClick={() => onClick()}>
      {children}
    </Link>
  );
};

const Example: FC = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="p-2 bg-blue-500 text-white rounded-md">
        Terms
      </MenuButton>
      <MenuItems
        as="div"
        className="absolute mt-2 w-48 bg-white border shadow-lg rounded-md"
      >
        <MenuItem>
          {({ close }) => (
            <MyCustomLink href="/" onClick={() => close()}>
              Read and accept
            </MyCustomLink>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default Example;
