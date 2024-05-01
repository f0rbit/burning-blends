import path from "path"
import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import remark_parse from "remark-parse"
import remark_frontmatter from 'remark-frontmatter'
import remark_parse_frontmatter from 'remark-parse-frontmatter'
import { unified } from 'unified';
import rehype_format from 'rehype-format';
import rehype_stringify from 'rehype-stringify';
import remark_rehype from 'remark-rehype';
import rehype_document from 'rehype-document';


const processor = unified()
	.use(remark_parse)
	.use(remark_frontmatter)
	.use(remark_parse_frontmatter)
	.use(remark_rehype)
	.use(rehype_document)
	.use(rehype_format)
	.use(rehype_stringify)

const post_groups = ["cafe", "music"];

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
			const fileContents = await readFile(filePath, 'utf8')

			console.log(fileContents);

			const data = await processor.process(fileContents)

			posts.push({
				...data,
				slug: filename.replace('.mdx', ''),
				group
			});
		}
	}
	memo = posts;
	return posts;
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
