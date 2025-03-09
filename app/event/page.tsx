import { DispatchEvent } from "@/components/events/dispatch-event";
import { OnClick } from "@/components/events/on-click";
import { ReactOnClick } from "@/components/events/react-on-click";

export default function EventPage() {
  return (
    <div id="root">
      <OnClick />
      <ReactOnClick />
      <DispatchEvent />
    </div>
  );
}
