"use client";

import { useEffect } from "react";

export function OnClick() {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e;
        console.log(
          "mouse click occurs on rootElement",
          isTrusted,
          target,
          bubbles
        );
      };

      rootElement.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e;
        console.log(
          "moduse click also occurs on rootElement",
          isTrusted,
          target,
          bubbles
        );
      };
    } else {
      console.log("rootElement is null");
    }
  }, []);

  return <div id="root">OnClick</div>;
}
