import { Construction } from "lucide-react";
import { PostCard } from "~/components/post";
import { getPostURLsByGroup } from "~/lib/posts";

export default async function MusicPage() {
	const posts = await getPostURLsByGroup("music");

	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-3xl font-bold text-center">Music Reviews</h1>
			<br />
			<div className="flex flex-col items-center gap-4 justify-center">
				{posts.length === 0 ? <p className="flex flex-col justify-center gap-2 items-center mb-24"><Construction /> No posts yet! Check back soon.</p> : posts.map((post: any) => <PostCard key={post.slug} post={post} />)}
			</div>
		</div>
	);
}
