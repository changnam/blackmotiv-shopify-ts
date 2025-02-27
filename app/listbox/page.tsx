"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

const fruits = ["Apple", "Banana", "Cherry", "Grapes", "Mango"];

export default function MultiSelectListbox() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const toggleSelection = (fruit: string) => {
    if (selectedFruits.includes(fruit)) {
      // If already selected, remove it (unselect)
      setSelectedFruits(selectedFruits.filter((item) => item !== fruit));
    } else {
      // Otherwise, add it (select)
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  return (
    <div>
      <Listbox value={selectedFruits} onChange={setSelectedFruits} multiple>
        <Listbox.Button className="border p-2 rounded">
          {selectedFruits.length > 0
            ? selectedFruits.join(", ")
            : "Select fruits"}
        </Listbox.Button>
        <Listbox.Options className="border rounded mt-1 p-1 bg-white">
          {fruits.map((fruit) => (
            <Listbox.Option
              key={fruit}
              value={fruit}
              onClick={() => toggleSelection(fruit)}
              className={`p-2 cursor-pointer ${
                selectedFruits.includes(fruit)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {fruit}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
