import path from "path"
import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import remark_frontmatter from 'remark-frontmatter'
import remark_parse_frontmatter from 'remark-parse-frontmatter'
import { remark } from 'remark';


const processor = remark()
	.use(remark_frontmatter)
	.use(remark_parse_frontmatter)

const post_groups = ["cafe", "music"];

// read from filesystem the posts from the posts folder at ../../../content/posts
export async function getPosts() {
	const posts = [] as any[];
	for (const group of post_groups) {
		const postsDirectory = path.join(process.cwd(), `../content/posts/${group}`)
		const filenames = await readdir(postsDirectory)

		for (const filename of filenames) {
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

	return posts;

}
