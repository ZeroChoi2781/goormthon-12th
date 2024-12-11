import type { ReactNode } from 'react';
import { Children, useMemo } from 'react';

import { getChildrenIndex } from './useSortedComponents.utils';

/**
 * useSortedComponents - 전달 받은 자식 요소의 displayName을 기준으로 순서를 보장하는 커스텀 훅입니다.
 */
const useSortedComponents = (children: ReactNode, names: string[]) => {
    const childrenList = Children.toArray(children);
    const sortedChildren = useMemo(
        () =>
            names.map(
                (name) => childrenList[getChildrenIndex(childrenList, name)],
            ),
        [childrenList, names],
    );

    return sortedChildren;
};

export default useSortedComponents;
