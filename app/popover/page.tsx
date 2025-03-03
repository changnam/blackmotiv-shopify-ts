import { Popover, PopoverBackdrop, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";

export default function Example() {
  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton>Product</PopoverButton>
        <PopoverPanel>
          <div>상품품</div>
          {/* ... */}
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel>
          <div>솔루션션</div>
          {/* ... */}
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel
          anchor="bottom"
          transition
          className="flex origin-top flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
