import { getPostURLsByGroup } from "~/lib/posts";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function CafePage() {
	const urls = await getPostURLsByGroup("cafe");
	return (
		<div>
			<h1>Cafe</h1>
			{urls.map((url: string) =>
				<Link href={`cafe${url}`} key={url}><Button variant='link'>{url}</Button></Link>
			)}
		</div>
	);
}
