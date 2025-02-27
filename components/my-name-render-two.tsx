"use client";

import { useMyContext } from "./my-context"

export default function MyNameRenderTwo() {
  const {time, setTime} = useMyContext();

  return (
      <p>my name two: {time}</p>
  );
}