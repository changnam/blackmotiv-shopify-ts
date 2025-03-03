import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";

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

      <Popover className="relative">
        <PopoverButton>Solutions</PopoverButton>
        <PopoverPanel
          anchor={{ to: "bottom start", gap: "4px" }}
          className="flex flex-col"
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
