import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getPostURLs, getPosts } from "~/lib/posts";

export default async function Home() {
	const posts = await getPosts();
	const urls = await getPostURLs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			{urls.map((url: string) => 
				<Link href={url} key={url}><Button variant='link'>{url}</Button></Link>
			)}
			<div>{JSON.stringify(posts, null, 2)}</div>
    </main>
  );
}
