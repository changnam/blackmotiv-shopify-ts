import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";

export default function Example() {
  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton>Product</PopoverButton>
        <PopoverPanel><div>상품품</div>{/* ... */}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel><div>솔루션션</div>{/* ... */}</PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Pricing</PopoverButton>
        <PopoverPanel><div>가격격</div>{/* ... */}</PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
