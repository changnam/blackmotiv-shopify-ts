"use client";

import { useActionState } from "react";
// import { addPost, addPostApi } from "@/lib/actions";
const initialState = { success: null, error: null };

export default function AddPostForm({addPostApi}:{addPostApi: any}) {
  console.log("AddPostForm started. ");
  const [state, formAction, isPending] = useActionState(
    addPostApi,
    initialState
  );

  
    console.log("AddPostForm started. isPending: ", isPending);
    console.log("AddPostForm started. state: ", state);

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
