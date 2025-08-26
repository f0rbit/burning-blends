import { getPostBySlug, getPostsByGroup } from "~/lib/posts";
import { base_url } from "~/lib/utils";

export default async function ArtSubPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>No post found</div>;
  }

  return <article className="prose prose-neutral">{post.value}</article>;
}

export async function generateStaticParams() {
  const posts = await getPostsByGroup("art");
  return posts.length > 0 
    ? posts.map((post: any) => ({ slug: post.slug }))
    : [{ slug: 'no-posts' }];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Burning Blends - No Art Posts",
      description: "No art posts are currently available.",
      robots: "noindex, nofollow",
    };
  }

  const { title, description, keywords } = post.data.frontmatter;
  return {
    title: `Burning Blends - ${title}`,
    description,
    keywords,
    authors: [{ name: "forbit", url: "https://forbit.dev" }],
    creator: "forbit",
    robots: "index, follow",
    publisher: "forbit",
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Burning Blends",
    },
    metadataBase: new URL(`${base_url}`),
    alternates: {
      canonical: `/art/${params.slug}`,
    },
  };
}
