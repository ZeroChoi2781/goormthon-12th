import type { HeadingItem, MdxHeading } from '../types/toc';

export const getMdxHeadings = (source: string): HeadingItem[] => {
    const headingRegex = /^#+\s+(.*)$/gm;
    return source
        .split('\n')
        .map((line) => {
            const match = headingRegex.exec(line.trim());
            if (match) {
                const title = match[1];
                if (title.includes('.')) return;
                const level = (match[0].match(/#/g) || []).length;
                return { title, tag: `H${level}` as MdxHeading };
            }
            return null;
        })
        .filter(Boolean) as HeadingItem[];
};
