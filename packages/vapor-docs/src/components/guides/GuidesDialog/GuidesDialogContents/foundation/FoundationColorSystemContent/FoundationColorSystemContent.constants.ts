import type { GuidesContentsItem } from '../../GuidesDialogContents.types';

export const COLOR_SYSTEM_EXPLANATIONS: GuidesContentsItem[] = [
    {
        title: 'primary, primary-hover, text-primary는 별개입니다.',
        description: [
            '이들은 단순히 primitive color(blue-500, blue-700, ..)를 한 번 더 감싼 토큰입니다. 따라서 서로 다른 색상을 가질 수 있습니다.',
            'ex. primary → blue-500',
            'ex. text-primary → red-500',
        ],
    },
    {
        title: 'semantic color는 primitive color를 사용해야 합니다.',
        description: [
            'primitive color는 숫자가 높아질수록 명도가 높아져야한다는 규칙이 존재합니다.',
            '반면에, Semantic color에는 이러한 규칙이 없습니다. 극단적으로, active-color가 hover-color보다 더 어두울 필요는 없습니다.',
            'ex. primary-hover : 파랑  /  danger-hover : 빨강',
            'ex. primary-active: 어두운 파랑 /  danger-active : 밝은 빨강',
        ],
    },
    {
        title: 'Semantic Color의 계층 구조에 대한 오해',
        description: [
            'theme(primary), text(text-primary), status(primary-hover)는 같은 계층에 있습니다.',
            '그러므로, theme에 hint가 선언되었다고 해서, status에 hint-hover가 있을 필요는 없습니다.',
            'ex)  theme: primary, secondary, …, hint',
            'ex)  status: primary-hover, success-hover 만 존재',
        ],
    },
];
