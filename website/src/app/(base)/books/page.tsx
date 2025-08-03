import { Construction } from "lucide-react";
import { PostCard } from "~/components/post";
import { getPostURLsByGroup } from "~/lib/posts";
import { base_url } from "~/lib/utils";

export default async function BooksPage() {
  const posts = await getPostURLsByGroup("books");

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-center">Book Reviews</h1>
      <br />
      <div className="flex flex-col items-center gap-4 justify-center">
        {posts.length === 0 ? (
          <p className="flex flex-col justify-center gap-2 items-center mb-24">
            <Construction /> No posts yet! Check back soon.
          </p>
        ) : (
          posts.map((post: any) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Burning Blends - Book Reviews",
  description:
    "I'm a bit of a slow reader - but I find books have a way of speaking words that the voice can't reproduce.",
  keywords: ["books", "adelaide", "reviews"],
  authors: [{ name: "forbit", url: "https://forbit.dev" }],
  creator: "forbit",
  robots: "index, follow",
  publisher: "forbit",
  openGraph: {
    title: "Book Reviews",
    description:
      "I'm a bit of a slow reader - but I find books have a way of speaking words that the voice can't reproduce.",
    type: "website",
    siteName: "Burning Blends",
  },
  metadataBase: new URL(`${base_url}`),
  alternates: {
    canonical: "/music",
  },
};
