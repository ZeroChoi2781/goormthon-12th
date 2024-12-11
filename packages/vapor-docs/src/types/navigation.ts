/**
 * nav.yml 양식에 맞는 타입 정의
 */

export type NavigationSubItem = {
    title: string;
    href: string;
};

export type NavigationItem = {
    title: string;
    href?: string;
    children?: NavigationSubItem[];
};

export type Navigation = {
    category: string;
    items: NavigationItem[];
};
