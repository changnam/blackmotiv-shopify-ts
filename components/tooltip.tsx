import React from "react";
import ReactDOM from "react-dom";

interface TooltipProps {
  text: string;
  targetRef: React.RefObject<HTMLDivElement> ;
}

const Tooltip: React.FC<TooltipProps> = ({ text, targetRef }) => {
  if (!targetRef.current) return null;

  const { top, left, width } = targetRef.current.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        bottom: "auto",
        left: left + width / 2,
        transform: "translateX(-50%)",
        background: "white",
        color: "black",
        padding: "5px 10px",
        borderRadius: "4px",
      }}
    >
      {text}
    </div>,
    document.getElementById("tooltip-root") as HTMLElement
  );
};

export default Tooltip;
