import { getPosts } from "@/app/blog/lib/api";
import { Post } from "../page";

type Params = {
  postId: string;
};

let localPosts: Post[] = [];

export default async function BlogPost({ params }: { params: Params }) {
  if (localPosts.length === 0) {
    localPosts = await getPosts();
  }

  const postId = Number(params.postId);
  const post = localPosts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="text-neutral-400">Post {post.id}:</span> {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.content2 }} className="prose" />
    </main>
  );
}
