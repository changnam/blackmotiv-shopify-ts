"use client";
import { useRef, useState, useEffect } from "react";
export default function PreviousStateExample() {
    console.log("PreviousStateExample started.");
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count; // mount 된 이후에 실행되므로 화면에 표시된 값은 count: 0, prevCount: N/A 이고, 이후에 여기 값이 0으로 바뀜. 즉, mount 이후에 값을 조작하지만 화면에는 영향을 미치지 않음
  }, [count]);

  return (
    <div>
      <p>Current Count: {count} </p>
      <p>Previous Count: {prevCountRef.current ?? "N/A"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
