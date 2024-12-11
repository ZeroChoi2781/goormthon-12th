import type {
    Navigation,
    NavigationItem,
} from '@vapor-docs/src/types/navigation';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import path from 'path';

/**
 * 컴포넌트 이름을 받아 해당 컴포넌트의 경로를 가져온다.
 * @param componentName 경로를 가져올 컴포넌트 이름
 * @returns 컴포넌트의 경로
 */
export const getComponentRoute = (componentName: string, library: string) => {
    const navPath = path.join('./', 'nav.yml');
    const fileContents = readFileSync(navPath, 'utf8');
    const sidebarItems = yaml.load(fileContents) as Navigation[];
    // NOTE: Components가 포함된 카테고리(Components, Deprecated Components)만 필터링
    const componentsItems = sidebarItems.filter((item) =>
        item.category.toLowerCase().includes(library),
    );

    // NOTE: Components 카테고리의 모든 아이템을 펼쳐서 배열로 만든다.
    const mergedItems = componentsItems.reduce(
        (acc: NavigationItem[], item) => {
            const spreadItems = item.items.map((subItem) => {
                if (subItem.children) {
                    return [...subItem.children];
                }
                return subItem;
            });
            return acc.concat(...spreadItems);
        },
        [],
    );
    // NOTE: 컴포넌트 이름으로 해당 컴포넌트의 아이템을 찾는다.
    const componentItem = mergedItems.find(
        (item) => item.title === componentName,
    );

    return componentItem?.href;
};
