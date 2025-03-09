import { DispatchEvent } from "@/components/events/dispatch-event";
import { DragDrop } from "@/components/events/drag-drop";
import { EventBubbling } from "@/components/events/event-bubbling";
import { OnClick } from "@/components/events/on-click";
import { ReactOnClick } from "@/components/events/react-on-click";
import { VariousInputs } from "@/components/events/various-inputs";

export default function EventPage() {
  return (
    <div id="root">
      {/* <OnClick />
      <ReactOnClick />
      <DispatchEvent /> */}
      <EventBubbling/>
      <VariousInputs/>
      <DragDrop/>
    </div>
  );
}
