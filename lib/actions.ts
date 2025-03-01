"use server";
import { PrismaClient, Prisma } from "@prisma/client";
import { prisma } from "./prisma"; // Example using Prisma

export async function addPost(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content") ?? "";

  if (!title) {
    return { error: "Title is required" };
  }

  try {
    const post = await prisma.post.create({
      data: { title: title.toString() ,content: content.toString() },
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