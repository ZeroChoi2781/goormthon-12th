import type { GuidesContentsItem } from '../../GuidesDialogContents.types';

export const DEVELOPMENT_CORE_CHARACTERISTICS_CONTENTS: GuidesContentsItem[] = [
    {
        title: 'Accessible',
        description: [
            '모든 컴포넌트는 WAI-ARIA 디자인 패턴을 준수합니다.',
            'Radix-UI를 기반으로 개발하여 접근성을 보장합니다.',
        ],
    },
    {
        title: 'Compound Pattern',
        description: [
            '여러 요소를 조합 가능한 컴파운드 패턴으로 유연한 커스터마이징을 지원합니다.',
            '사용자는 컴포넌트를 쉽게 조합하여 자신만의 UI를 구성할 수 있습니다.',
        ],
    },
    {
        title: 'Uncontrolled Pattern 기본 적용',
        description: [
            '기본적으로 Uncontrolled 형태로 만들어 사용 편의성을 극대화합니다.',
            'Controlled 패턴이 필요한 경우, 상태 제어를 위한 Props를 제공합니다.',
        ],
    },
    {
        title: 'Trigger 패턴',
        description: [
            'Overlay형 컴포넌트는 `{Component}.Trigger`와 `{Component}.Contents`를 포함합니다.',
        ],
    },
    {
        title: 'Props 최소화',
        description: [
            'HTML 요소의 기본 속성을 지원하며, ComponentPropsWithoutRef를 통해 타입을 정의합니다.',
            '외부 라이브러리의 Props는 검증된 경우에만 제한적으로 제공합니다.',
        ],
    },
    {
        title: 'Ref 지원',
        description: [
            'HTML Form Elements에만 ref를 지원합니다.',
            'ComponentPropsWithoutRef, Radix의 Primitive, forwardRef 등을 사용해 ref 타입을 정의합니다.',
        ],
    },
    {
        title: 'Slot',
        description: [
            'Compound Pattern에서 서브 컴포넌트끼리의 순서를 보장합니다.',
        ],
    },
    {
        title: 'Dev only property',
        description: [
            '개발자 전용 속성들은 피그마에서 설명란에 표기합니다.',
            '예시: 버튼의 stretch 속성은 버튼 크기를 상위 요소에 맞게 확장시켜주는 속성입니다.',
        ],
    },
];
