import { MyContextProvider } from "@/components/my-context";
import MyNameRenderOne from "@/components/my-name-render-one";
import MyNameRenderTwo from "@/components/my-name-render-two";

export default function RenderPage() {
  return (
    <div>
      <MyContextProvider>
        <MyNameRenderOne />
        <MyNameRenderTwo />
      </MyContextProvider>
    </div>
  );
}
