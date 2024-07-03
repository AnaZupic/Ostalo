import BlogPostCard from "@/app/blog/components/BlogPostCard";
/* import Link from "next/link";
import Pagination from "@/app/blog/components/Pagination";
import BlogPostCard from "@/app/blog/components/BlogPostCard";
import { getPosts } from "@/app/blog/lib/api";
import { parseSearchParams } from "@/app/blog/lib/utils";

export const metadata = {
  title: "Blog",
};

// export type SearchParams = {
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   };
// };

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PageProps = {
  page: number;
  limit?: number;
};

export type PaginationProps = {
  first?: PageProps;
  prev?: PageProps;
  next?: PageProps;
  last?: PageProps;
};

export default async function Blog({ searchParams }: SearchParams) {
  const { page, limit } = parseSearchParams({ searchParams });
  const { posts, pagination } = await getPosts({ page, limit });

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Blog Index Page</h1>

      <Pagination pagination={pagination} page={page} />

      <ul className="grid md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>
              <BlogPostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
 */
import {getPosts} from "./lib/api";
import Link from "next/link";


export type Post = {
  id : number;
  title: string;
  date : string;
  content2 : string;
  picture :  {
    url : string;
  };
  author : string;
};

const BlogPosts = async ({ post }: { post: Post }) => {

  const posts= await getPosts();
  
 
  
  return (
    <main className="flex flex-col items-center min-h-screen max-w-7xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-8 text-brand-blue-50 font-playfair">Blog Page</h1> 
      <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8"> 
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>
              <BlogPostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPosts;