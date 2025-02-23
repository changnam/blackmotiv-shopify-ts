"use client";

import { useEffect, useState } from "react";

export default function Example(){
    const [count, setCount] = useState(0);

    console.log("1: Render start");

    useEffect(() => {
        console.log("4: Effect runs");
    });

    const handleClick = () => {
        console.log("2: Before state update");
        setCount((c) => c+1);
        console.log("3: After state update");
    };

    return (
        <button onClick={handleClick}>Count: {count}</button>
    )
}