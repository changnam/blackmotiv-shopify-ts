import { Checkbox } from "@headlessui/react";

export default function Example() {
  return (
    <form action="http://localhost:8080/api/posts/1/like" method="post">
      <Checkbox
        defaultChecked={true}
        name="terms-of-service"
        className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <button>Submit</button>
    </form>
  );
}