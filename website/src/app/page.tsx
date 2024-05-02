import { PostCard } from "~/components/post";
import { getPosts } from "~/lib/posts";
import { NavBar } from "./(base)/client";
import { base_url } from "~/lib/utils";

export default async function Home() {
	const posts = await getPosts();

	return (
		<>
			<div className="flex justify-center py-2">
				<NavBar />
			</div>
			<header className="flex items-center py-8 flex-col gap-4">
				<h1 className="text-4xl font-bold w-max">Burning Blends</h1>
				<p className="text-neutral-700 text-center" style={{ maxWidth: "min(23.5rem, 80vw)" }}>I&apos;m on a mission to find the best cafés in Adelaide. I also review music from time-to-time (and paint some of the album covers)</p>
				<br />
			</header>
			<main className="flex flex-col items-center gap-4">
				{posts.map((post: any) => <PostCard key={post.slug} post={post} />)}
			</main>
		</>
	);
}

export const metadata = {
	title: "Burning Blends",
	description: "I'm on a mission to find the best cafés in Adelaide. I also review music from time-to-time (and paint some of the album covers)",
	keywords: ["cafe", "music", "adelaide", "reviews", "trendy", "hipster", "niche", "indie", "glenelg", "brighton", "adelaide music", "adelaide music scene"],
	authors: [{ name: "forbit", url: "https://forbit.dev" }],
	creator: "forbit",
	robots: "index, follow",
	publisher: "forbit",
	openGraph: {
		title: "Burning Blends",
		description: "I'm on a mission to find the best cafés in Adelaide. I also review music from time-to-time (and paint some of the album covers)",
		type: "website",
		siteName: "Burning Blends",
	},
	metadataBase: new URL(`${base_url}`),
	alternates: {
		canonical: '/'
	}
}
