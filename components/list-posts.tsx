"use client";

export default function ListPosts({ posts, deletePostApi }: { posts: any[], deletePostApi: any }) {
    console.log("ListPosts started.");
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="flex space-x-4">
          <h2 className="w-[30px]">{post.title}</h2>
          <p className="w-[50px]">{post.content}</p>
          <button onClick={() => deletePostApi(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}