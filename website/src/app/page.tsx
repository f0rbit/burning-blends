import { getPosts } from "~/lib/posts";

export default async function Home() {
	const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}
