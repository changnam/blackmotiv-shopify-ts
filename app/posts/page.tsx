import AddPostForm from "@/components/add-post-form";
import ListPosts from "@/components/list-posts";
import { addPostApi, deletePostApi } from "@/lib/actions";
import { Suspense } from "react";

export default async function postsPage() {
  console.log("@@@@@@@@@@@@@@@ postsPage started.");
  const res = await fetch("http://localhost:8080/api/posts");
  const posts = await res.json();
  console.log("@@@@@@@@@@@@@@@ postsPage ended.");
  return (
    <div>
      <h1 className="text-3xl font-bold">Posts</h1>
      <Suspense fallback={<div>Loading form ...</div>}>
        <AddPostForm addPostApi={addPostApi} />
      </Suspense>
      <Suspense fallback={<div>Loading list posts ...</div>}>
        <ListPosts posts={posts.data} deletePostApi={deletePostApi} />
      </Suspense>
    </div>
  );
}
