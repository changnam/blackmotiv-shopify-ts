"use client";
import { useFormState } from "react-dom";

async function submitForm(prevState: any, formData: FormData) {
  const name = formData.get("name");
  if (!name) return { error: "Name is required!" };
  return { message: `Hello, ${name}` };
}

export default function FormComponent() {
  const [state, formAction] = useFormState(submitForm, {
    message: "",
    error: "",
  });

  return (
    <form action={formAction}>
      <input name="name" placeholder="Your name" />
      <button type="submit">Submit</button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
