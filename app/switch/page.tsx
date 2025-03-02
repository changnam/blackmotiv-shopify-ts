"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <form action="http://localhost:8080/api/posts/1/like" method="post">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="terms-of-service"
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
      <button>Submit</button>
    </form>
  );
}