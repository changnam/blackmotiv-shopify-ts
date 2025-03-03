import { Suspense } from "react";
import PostList from "./post-list";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function PostsPage( props: {params: Params,
  searchParams: SearchParams}) {
      const params = await props.params;
      const searchParams = await props.searchParams;
      const slug = params.slug;
      const query = searchParams.query;


  const currentPage = Number(searchParams.page) || 0; // ✅ Get page from URL

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
