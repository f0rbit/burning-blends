import { getPostURLs, getPosts } from "~/lib/posts";

export default async function Home() {
	const posts = await getPosts();
	const urls = await getPostURLs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<pre>{JSON.stringify(urls, null, 2)}</pre>
			<div>{JSON.stringify(posts, null, 2)}</div>
    </main>
  );
}
