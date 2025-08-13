import { Construction } from "lucide-react";
import { PostCard } from "~/components/post";
import { getPostsByGroup } from "~/lib/posts";
import { base_url } from "~/lib/utils";
import CafeMap from "~/components/ui/CafeMap";

export default async function CafePage() {
  const posts = await getPostsByGroup("cafe");

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-center">Cafe Reviews</h1>
      <CafeMap posts={posts} />
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
  title: "Burning Blends - Cafe Reviews",
  description: "Have a read of some of my reviews of the top cafés in Adelaide",
  keywords: ["cafe", "adelaide", "coffee", "reviews"],
  authors: [{ name: "forbit", url: "https://forbit.dev" }],
  creator: "forbit",
  robots: "index, follow",
  publisher: "forbit",
  openGraph: {
    title: "Cafe Reviews",
    description:
      "Have a read of some of my reviews of the top cafés in Adelaide",
    type: "website",
    siteName: "Burning Blends",
  },
  metadataBase: new URL(`${base_url}`),
  alternates: {
    canonical: "/cafe",
  },
};
