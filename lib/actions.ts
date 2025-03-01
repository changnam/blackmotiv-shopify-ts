"use server";
import { PrismaClient, Prisma } from "@prisma/client";
import { prisma } from "./prisma"; // Example using Prisma
import { revalidatePath } from "next/cache";

export async function addPostApi(prevState: any, formData: FormData) {
  console.log("addPostApi started.");
  const jsonObj = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:8080/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  });

  const data = await res.json();

  console.log("revalidatePath started.");
  // Promise.resolve("Successful").then((result) => {
  //   console.log("promise callback started");
  //   revalidatePath("/posts");
  // });

  // new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
  //   console.log("promise callback started");
  //   revalidatePath("/posts");
  // }); // ✅ Works properly

  revalidatePath("/posts"); // ✅ Works properly
  console.log("revalidatePath finished.");

  return data;
}

export async function addPost(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content") ?? "";

  if (!title) {
    return { error: "Title is required" };
  }

  try {
    const post = await prisma.post.create({
      data: { title: title.toString(), content: content.toString() },
    });
    return { success: "Post created successfully", post };
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    throw e;
  }
}

export async function deletePostApi(postId: number) {
  console.log("deletePostApi started.");
  const res = await fetch(`http://localhost:8080/api/posts/${postId}`, {
    method: "DELETE",
  });

  const data = await res.json();

  revalidatePath("/posts"); // ✅ Works properly
  console.log("deletePostApi finished.");

  return data;
}
