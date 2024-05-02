import { getPostBySlug, getPostsByGroup } from '~/lib/posts';

export default async function CafeSubPage({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);

	return <article className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: post.value }} />
}

export async function generateStaticParams() {
	const posts = await getPostsByGroup('cafe');
	return posts.map((post: any) => ({ slug: post.slug }));
}

export const dynamicParams = false;
export const dynamic = "force-static";
