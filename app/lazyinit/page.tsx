"use client";

import { useState } from "react";

function untangle(){
  console.log("untangle called");
  return 1;
}
export default function LazyInitPage(){
  const [shiny, setShiny] = useState(() => untangle());

  async function increment(){
    const delayPromise = new Promise((resolve,reject) => setTimeout(() => resolve("blabla"),5000));
    await delayPromise.then(() => console.log("resolved"));

    setShiny((prev) => prev + 1);
  }
  return (
    <div>
      <p>{shiny}</p>
      <button onClick={() => increment()}>increment</button>
    </div>
  );
}