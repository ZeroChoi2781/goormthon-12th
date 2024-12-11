import type { FoundationCardProps } from '../components/foundations/FoundationCard/FoundationCard.types';

export const FOUNDATION_ELEMENTS: FoundationCardProps[] = [
    {
        title: 'Color',
        description:
            '컬러 토큰은 브랜드의 정체성과 사용자 경험을 지원하는 다양한 색상을 정의합니다.',
        imageUrl:
            'https://statics.goorm.io/gds/docs/foundation/introduction/color.svg',
        href: 'foundation/color',
    },
    {
        title: 'Size',
        description:
            '요소의 크기,여백과 관련된 값을 정의하여 일관된 디자인을 유지하는 데 도움을 줍니다.',
        imageUrl:
            'https://statics.goorm.io/gds/docs/foundation/introduction/size.svg',
        href: 'foundation/size',
    },
    {
        title: 'Typography',
        description:
            '텍스트의 스타일과 형식을 정의하여 일관된 글꼴 사용과 가독성을 보장합니다.',
        imageUrl:
            'https://statics.goorm.io/gds/docs/foundation/introduction/typography.svg',
        href: 'foundation/typography',
    },
] as const;
