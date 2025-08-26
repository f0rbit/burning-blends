import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByGroup } from "~/lib/posts";
import { base_url } from "~/lib/utils";
import MapComponent from "~/components/ui/MapComponent";

export default async function CafeSubPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const { location = null } = post.data.frontmatter;

  return (
    <article className="prose prose-neutral">
      {location && <MapComponent mode="single" location={location} />}
      {post.value}
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPostsByGroup("cafe");
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

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
      canonical: `/cafe/${params.slug}`,
    },
  };
}