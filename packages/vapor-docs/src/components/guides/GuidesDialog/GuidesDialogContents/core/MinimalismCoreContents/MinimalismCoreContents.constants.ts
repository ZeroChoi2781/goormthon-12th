import type { GuidesContentsItem } from '../../GuidesDialogContents.types';

export const MINIMALISM_CORE_CONTENTS: GuidesContentsItem[] = [
    {
        title: '최소한의 기능',
        description: [
            '웹 접근성 지원: 키보드 네비게이션, 색 대비, 대체 텍스트 등을 지원하여 모든 사용자가 쉽게 접근할 수 있도록 합니다.',
            '스크롤 기능: 고정 헤더 및 푸터와 호환되는 스크롤, 커스텀 스크롤 바 등을 포함하여 다양한 스크롤 환경을 지원합니다.',
            '아이콘 변형: Alert, Avatar와 같은 상황별 아이콘을 제공합니다.',
            '이벤트 핸들링: 클릭, 호버 등 다양한 사용자 이벤트를 처리할 수 있습니다.',
            '폼 요소 기본 기능: 입력, 선택, 체크박스 등의 기본적인 폼 요소 기능을 지원합니다.',
        ],
    },
    {
        title: '최소한의 형태',
        description: [
            '애니메이션 및 트랜지션: 요소의 상태 변화 시 부드러운 이동 효과를 제공합니다.',
            'Typography: 글꼴, 크기, 줄 간격 등을 설정하여 텍스트의 가독성을 높입니다.',
            'Color: 색상 팔레트를 제공하여 디자인의 일관성을 유지합니다.',
            'Size/space: `gap`, `padding` 등 요소 간의 간격을 조절합니다.',
            'Size/dimension: `width`, `height` 등 요소의 크기를 조절합니다.',
            'Size/border-radius: 테두리의 곡률을 설정하여 디자인의 부드러움을 제공합니다.',
        ],
    },
];
