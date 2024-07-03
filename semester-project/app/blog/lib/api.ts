import { Post } from "@/app/blog/page";
import { extractPageAndLimit } from "@/app/blog/lib/utils";
import { BASE_URL, DEFAULT_PAGE, DEFAULT_LIMIT } from "@/app/blog/lib/constants";


/* export const getPosts = async ({
    page = DEFAULT_PAGE,
    limit = DEFAULT_LIMIT }: PageProps = { page: DEFAULT_PAGE }): Promise<{
        posts: Post[];
        pagination: PaginationProps;
    }> => {
    const response = await fetch(`${BASE_URL}/?_page=${page}&_limit=${limit}`);
    const posts = await response.json();

    const linkHeader = response.headers.get("Link") || "";
    const firstPagination = extractPageAndLimit(linkHeader, "first");
    const prevPagination = extractPageAndLimit(linkHeader, "prev");
    const nextPagination = extractPageAndLimit(linkHeader, "next");
    const lastPagination = extractPageAndLimit(linkHeader, "last");

    return {
        posts,
        pagination: {
            first: firstPagination,
            prev: prevPagination,
            next: nextPagination,
            last: lastPagination,
        },
    };
};

export const getPost = async (id: string): Promise<Post> => {
    const data = await fetch(`${BASE_URL}/${id}`);
    return data.json();
}; */


const gqlAllPostsQuery = `query gqlAllPostsQuery {
    blogPostCollection {
        items {
            id,
            title,
            date,
            content2,
            picture
            {url},
            author
        }
    }
}`;

interface gqlAllPostsQuery_response{
  blogPostCollection :
  {items: Post[]};
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

console.log(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_ACCESS_TOKEN)

/* const getPosts = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllPostsQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
 export {getPosts}; */

 export const getPosts = async() : Promise<Post[]> => 
  {
    try{
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: gqlAllPostsQuery }),
      }); 
      const body = (await response.json()) as {data: gqlAllPostsQuery_response;};
      const allPosts : Post[]= body.data.blogPostCollection.items.map((item)=> ({
        id : item.id,
        title : item.title, 
        date : item.date,
        content2 : item.content2,
        picture : item.picture,
        author : item.author
      }));
      return allPosts;
    }

    catch(error){
      console.log(error)
      return[];
    }
  }

 export const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`${baseUrl}/${id}`);
  return data.json();
};