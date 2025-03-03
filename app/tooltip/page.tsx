"use client";

import React, { useRef, useState } from "react";
import Tooltip from "@/components/tooltip";

export default function TooltipPage() {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <div id="tooltip-root" 
        ref={buttonRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="inline-block bg-blue-500 text-white p-2 rounded cursor-pointer"
      >
        Hover me
      </div>
      {showTooltip && <Tooltip text="I'm a tooltip!" targetRef={buttonRef} />}
    </div>
  );
}
