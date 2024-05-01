import { getPostBySlug } from '~/lib/posts';

export default async function CafeSubPage({ params }: { params: { slug: string } }) {

	const post = await getPostBySlug(params.slug);

	return <article className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: post.value }} />

}
