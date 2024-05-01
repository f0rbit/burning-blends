import { PostCard } from "~/components/post";
import { getPosts } from "~/lib/posts";
import { NavBar } from "./(base)/client";

export default async function Home() {
	const posts = await getPosts();

	return (
		<>
			<div className="flex justify-center py-2">
				<NavBar />
			</div>
			<header className="flex items-center py-8 flex-col gap-4">
				<h1 className="text-4xl font-bold w-max">Burning Blends</h1>
				<p className="text-neutral-700 text-center" style={{ maxWidth: "min(23.5rem, 80vw)" }}>I'm on a mission to find the best cafés in Adelaide. I also review music from time-to-time (and paint some of the album covers)</p>
				<br />
			</header>
			<main className="flex flex-col items-center gap-4">
				{posts.map((post: any) => <PostCard key={post.slug} post={post} />)}
			</main>
		</>
	);
}
