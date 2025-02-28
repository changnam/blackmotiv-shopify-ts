"use client";
import { useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Mango" },
];

export default function MultiSelectListbox() {
  const [selectedFruits, setSelectedFruits] = useState<
    { id: number; name: string }[]
  >([]);

  const toggleSelection = (fruit: { id: number; name: string }) => {
    console.log("toggleSelection", fruit);
    const isSelected = selectedFruits.some((f) => f.id === fruit.id);
    if (isSelected) {
      // Unselect if already selected
      setSelectedFruits(selectedFruits.filter((f) => f.id !== fruit.id));
    } else {
      // Select if not selected
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  return (
    <div className="w-64">
      <Listbox value={selectedFruits} onChange={setSelectedFruits} multiple>
        <ListboxButton className="border p-2 rounded w-full text-left">
          {selectedFruits.length > 0
            ? selectedFruits.map((f) => f.name).join(", ")
            : "Select fruits"}
        </ListboxButton>
        <ListboxOptions className="border rounded mt-1 bg-white">
          {fruits.map((fruit) => (
            <ListboxOption
              key={fruit.id}
              value={fruit}
              onClick={() => toggleSelection(fruit)}
              className={`p-2 cursor-pointer flex justify-between ${
                selectedFruits.some((f) => f.id === fruit.id)
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {fruit.name}
              {selectedFruits.some((f) => f.id === fruit.id) && <span>✅</span>}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
