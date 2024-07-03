import { Post } from "@/app/blog/page";
import Link from "next/link";

const BlogPostCard = ({ post }: { post: Post }) => {
  const excerpt = post.content2.split(' ').slice(0, 20).join(' ') + '...'; // Prikaži prvih 20 riječi

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-64 md:h-80"> 
          <img
            src={post.picture.url}
            className="object-cover w-full h-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
            alt={post.title}
          />
        </div>
        <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
          <h2 className="font-bold text-2xl mb-2 capitalize text-blue-500">{post.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{post.author}</p>
          <p className="text-gray-700 mb-4">{excerpt}</p>
          <Link href={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-700">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
