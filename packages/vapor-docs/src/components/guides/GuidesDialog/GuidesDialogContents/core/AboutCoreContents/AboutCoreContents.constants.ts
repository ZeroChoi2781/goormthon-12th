import type { GuidesContentsItem } from '../../GuidesDialogContents.types';

export const ABOUT_CORE_CONTENTS: GuidesContentsItem[] = [
    {
        title: '높은 자유도',
        description: [
            '최소한의 기능 제약과 최대한의 형태 커스텀 가능성을 제공합니다.',
            '디자이너들이 제약 없이 설계할 수 있도록 높은 자유도를 제공합니다.',
        ],
    },
    {
        title: '컴포넌트 사용',
        description: [
            'Atom 단위의 컴포넌트를 정의하여 사용할 수 있습니다.',
            '예시) Button, Input',
            '단, 모든 Vapor Core 컴포넌트가 Vapor Components가 되는 것은 아닙니다. 예) DatePicker, Calendar',
        ],
    },
    {
        title: '조합형 컴포넌트 지향',
        description: [
            '개별 컴포넌트는 여러 서브 컴포넌트로 구성될 수 있도록 설계합니다.',
        ],
    },
];
