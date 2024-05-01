import { getPostBySlug } from '~/lib/posts';

export default async function CafeSubPage({ params }: { params: { slug: string } }) {

	const post = await getPostBySlug(params.slug);

	return (
		<main className="flex justify-center">
			<article className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: post.value }} />
		</main>
	);

}
