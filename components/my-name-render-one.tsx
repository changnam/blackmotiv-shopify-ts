"use client";

import { useMyContext } from "./my-context"

export default function MyNameRenderOne() {
  const {time, setTime} = useMyContext();

  return (
    <>
        <p>my name one : {time}</p>
    </>
  );
}