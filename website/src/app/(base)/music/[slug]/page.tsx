import { getPostBySlug, getPostsByGroup } from '~/lib/posts';
import { base_url } from '~/lib/utils';

export default async function MusicSubPage({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);

	return <article className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: post.value }} />
}

export async function generateStaticParams() {
	const posts = await getPostsByGroup('cafe');
	return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);
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
			canonical: `/music/${params.slug}`
		}
	};
}
