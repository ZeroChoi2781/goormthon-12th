import { existsSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default async function markdownToHtml(
    markdown: string,
): Promise<string> {
    const res = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(markdown);

    return res.toString();
}

export const getPostDetailData = (dir: string) => {
    if (existsSync(dir)) {
        const post = readFileSync(dir, 'utf-8');
        const { content } = matter(post);

        return {
            content,
            markdownContent: content,
        };
    }
    return {
        meta: {},
        content: '',
        markdownContent: '',
    };
};
