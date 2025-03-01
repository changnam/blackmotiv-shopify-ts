"use client";

export default function ListPosts({ posts }: { posts: any[] }) {
    console.log("ListPosts started.");
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}