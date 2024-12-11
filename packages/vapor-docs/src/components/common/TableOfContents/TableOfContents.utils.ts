import type { Navigation } from '@vapor-docs/src/types/navigation';
import type { MdxHeadings } from '@vapor-docs/src/types/toc';
import { getPostDetailData } from '@vapor-docs/src/utils/markdownToHtml';
import { getMdxHeadings } from '@vapor-docs/src/utils/mdx';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export const getNavData = () => {
    const navPath = path.join('./', 'nav.yml');
    const fileContents = readFileSync(navPath, 'utf8');
    const sidebarItems = yaml.load(fileContents) as Navigation[];

    return sidebarItems;
};

export const getComponentHeadings = (mdxDirectory: string): MdxHeadings => {
    const usageDir = `${mdxDirectory}.usage.mdx`;
    const historyDir = `${mdxDirectory}.history.mdx`;
    const { markdownContent: usageConext } = getPostDetailData(usageDir);
    const { markdownContent: historyConext } = getPostDetailData(historyDir);

    return {
        Usage: getMdxHeadings(usageConext),
        History: getMdxHeadings(historyConext),
    };
};

/**
 * 프로젝트 루트를 기준으로 상대 경로를 계산하는 예시 호출
 * @returns {string} - 계산된 상대 경로
 */
export function getRelativePath(
    rootDir: string,
    contentsPath: string,
    componentName: string,
): string {
    const relativeDir = path.relative(rootDir, contentsPath);
    return path.join(relativeDir, `(contents)/${componentName}`);
}
