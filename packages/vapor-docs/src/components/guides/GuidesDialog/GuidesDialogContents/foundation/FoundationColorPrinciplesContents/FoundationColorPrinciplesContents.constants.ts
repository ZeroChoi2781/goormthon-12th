import type { GuidesContentsItem } from '../../GuidesDialogContents.types';

export const COLOR_PRINCIPLES: GuidesContentsItem[] = [
    {
        title: 'Raw value -> primitive color -> semantic color 체계 준수',
        description: [
            'semantic color(primary-hover)는 또 다른 semantic color(primary)를 참조할 수 없습니다.',
        ],
    },
    {
        title: 'Semantic color의 용도에 맞는 사용',
        description: [
            '현재 link는 특정 용도가 없어 심미적 효과만을 위해 존재하므로 사용할 수 없습니다.',
        ],
    },
    {
        title: 'Color variants를 가진 컴포넌트의 색상 사용',
        description: [
            'color variants를 가진 컴포넌트는 semantic color 내의 색상만 사용해야 합니다.',
            '<Button color=“hint” />',
            '<Button color=“secondary” />',
            '<Button color=“quiet” /> - 사용하지 말 것',
        ],
    },
    {
        title: 'Color variants를 가진 컴포넌트에 무조건 모든 semantic color를 정의하지 않기',
        description: [
            '모든 색상을 선언할 필요 없습니다. 용도에 맞는 색상만 선언합니다.',
            'Toastify color = “primary, danger”',
            'Toastify color = “primary, secondary, … , hint” - 사용하지 말 것',
        ],
    },
];
