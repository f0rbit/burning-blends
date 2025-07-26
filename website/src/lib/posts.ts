import path from "path"
import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { compileMDX } from "next-mdx-remote/rsc";
import { post_groups } from "./types";


let memo = null as any;

// read from filesystem the posts from the posts folder at ../../../content/posts
export async function getPosts() {
	if (memo != null) return memo;
	const posts = [] as any[];
	for (const group of post_groups) {
		const postsDirectory = path.join(process.cwd(), `../content/posts/${group}`)
		const filenames = await readdir(postsDirectory)

		for (const filename of filenames) {
			if (filename.startsWith('.')) continue;
			const filePath = path.join(postsDirectory, filename)
			const contents = await readFile(filePath, 'utf8')

			const { frontmatter, content } = await parse(contents)

			posts.push({
				value: content,
				data: { frontmatter },
				slug: filename.replace('.mdx', ''),
				group
			});
		}
	}
	const sorted_posts = posts.sort((a, b) => {
		const a_date = new Date(a.data.frontmatter.date);
		const b_date = new Date(b.data.frontmatter.date);
		if (a_date.getTime() === b_date.getTime()) return 0;
		return a_date.getTime() > b_date.getTime() ? -1 : 1;
	});

	memo = sorted_posts;
	return sorted_posts;
}

async function parse(contents: string) {
	return await compileMDX({
		source: contents,
		options: {
			parseFrontmatter: true,
		},
	});
}

export async function getPostURLs() {
	const posts = await getPosts();
	return posts.map((p: any) => {
		const { group, slug } = p;
		return `/${group}/${slug}`;
	});
}

export async function getPostURLsByGroup(group: string) {
	const posts = await getPosts();
	return posts.filter((p: any) => p.group === group).map((p: any) => {
		const { slug } = p;
		return `/${slug}`;
	});
}

export async function getPostBySlug(slug: string) {
	const posts = await getPosts();
	return posts.find((p: any) => p.slug === slug);
}

export async function getPostsByGroup(group: string) {
	const posts = await getPosts();
	return posts.filter((p: any) => p.group === group);
}
