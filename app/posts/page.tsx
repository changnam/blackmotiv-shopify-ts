"use client";

import { useActionState } from "react";
import { addPost } from "@/lib/actions";

export default function AddPostForm() {
  const [state, formAction, isPending] = useActionState(addPost, null);

  return (
    <form action={formAction}>
      <input
        type="text"
        name="title"
        placeholder="Post title"
        className="border p-2"
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white p-2"
      >
        {isPending ? "Adding..." : "Add Post"}
      </button>

      {state?.success && <p className="text-green-500">{state.success}</p>}
      {state?.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
