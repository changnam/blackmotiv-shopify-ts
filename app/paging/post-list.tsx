"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import clsx from "clsx";

export default function PostList({ currentPage }: { currentPage: number }) {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`http://localhost:8080/api/posts?page=${currentPage}&limit=5`);
      const data = await res.json();
      console.log(data)
      setPosts(data.data.content);
      setTotalPages(data.data.totalPages);
    }

    fetchPosts();
  }, [currentPage]); // ✅ Re-fetch data when page changes

  // ✅ Handle Pagination Clicks
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/paging?${params.toString()}`);
  };

  return (
    <div>
      <ul className="list-disc">
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}-{post.content}-{post.published}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-4 flex gap-2">
        <button
          disabled={currentPage <= 1}
          onClick={() => goToPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => goToPage(currentPage + 1)}
          className={clsx("px-4 py-2 bg-blue-500 text-white rounded",
                currentPage >= totalPages ? "bg-gray-300 text-gray" : "")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
