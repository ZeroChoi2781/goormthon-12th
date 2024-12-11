import AboutComponentsContents from '../GuidesDialog/GuidesDialogContents/components/AboutComponentsContents';
import AboutCoreContents from '../GuidesDialog/GuidesDialogContents/core/AboutCoreContents';
import DevelopmentCoreCharacteristicsContents from '../GuidesDialog/GuidesDialogContents/core/DevelopmentCoreCharacteristicsContents';
import MinimalismCoreContents from '../GuidesDialog/GuidesDialogContents/core/MinimalismCoreContents';
import FoundationColorPrinciplesContents from '../GuidesDialog/GuidesDialogContents/foundation/FoundationColorPrinciplesContents';
import FoundationColorSystemContent from '../GuidesDialog/GuidesDialogContents/foundation/FoundationColorSystemContent';

export const PACKAGES_LIST = {
    core: 'core',
    components: 'components',
    foundation: 'foundation',
} as const;

export const CORE_PACKAGE_ITEM_LIST = {
    about: 'about',
    minimalism: 'minimalism',
    characteristics: 'characteristics',
} as const;

export const COMPONENTS_PACKAGE_ITEM_LIST = {
    about: 'about',
} as const;

export const FOUNDATION_PACKAGE_ITEM_LIST = {
    about: 'about',
} as const;
export const HOOKS_PACKAGE_ITEM_LIST = {
    about: 'about',
} as const;

export const GUIDES_DIALOG_CONTENTS_STEP = {
    core: {
        about: {
            title: 'Vapor Core란?',
            contents: <AboutCoreContents />,
            footer: {
                prev: null,
                next: 'minimalism',
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/core.svg',
            imageAlt: 'core',
            reference: {
                notion: {
                    title: 'Component [Core]',
                    url: 'https://www.notion.so/goorm/Vapor-Principle-Vapor-Core-10c4e6997fb08021a4b8e58b58d5551a?pvs=4',
                },
                figma: {
                    title: 'Component [Core]',
                    url: 'https://www.figma.com/design/lEU9aqzv6l9E4XM3SST9op/Component-%5Bcore%5D?node-id=0-1&t=kqSG8V2DeJVnEjqY-0',
                },
            },
        },
        minimalism: {
            title: '최소한의 기능과 형태',
            contents: <MinimalismCoreContents />,
            footer: {
                prev: 'about',
                next: 'characteristics',
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/minimum-functionality-and-form.svg',
            imageAlt: 'minimalism',
        },
        characteristics: {
            title: '개발 특징',
            contents: <DevelopmentCoreCharacteristicsContents />,
            footer: {
                prev: 'minimalism',
                next: null,
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/development-characteristics.svg',
            imageAlt: 'characteristics',
            reference: {
                notion: {
                    title: 'Vapor Core - 개발',
                    url: 'https://www.notion.so/goorm/Vapor-Principle-Vapor-Core-10c4e6997fb0801d8601c8056b558748?pvs=4',
                },
            },
        },
    },
    components: {
        about: {
            title: 'Vapor Components란?',
            contents: <AboutComponentsContents />,
            footer: {
                prev: null,
                next: null,
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/development-characteristics.svg',
            imageAlt: 'characteristics',
            reference: {
                figma: {
                    title: 'Component [Components]',
                    url: 'https://www.figma.com/files/1379846782323966496/project/256012411?fuid=1004257534696201759',
                },
                notion: {
                    title: 'Component [Components]',
                    url: 'https://www.notion.so/goorm/Vapor-Principle-Vapor-Component-10c4e6997fb080978e02c009a905adde?pvs=4',
                },
            },
        },
    },
    foundation: {
        about: {
            title: 'Vapor Foundation Color',
            contents: <FoundationColorPrinciplesContents />,
            footer: {
                prev: null,
                next: 'system',
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/development-characteristics.svg',
            imageAlt: 'characteristics',
            reference: {
                figma: {
                    title: 'Component [Foundation]',
                    url: 'https://www.figma.com/design/hBtJQQNTICx64dUK8VsU3Z/Foundation-%5Bgoorm%5D?m=auto&node-id=861-6581',
                },
                notion: {
                    title: 'Component [Foundation]',
                    url: 'https://www.notion.so/goorm/Vapor-Principle-Vapor-Foundation-10c4e6997fb0802f8f60de36912103e6?pvs=4',
                },
            },
        },
        system: {
            title: 'Vapor Foundation Color System',
            contents: <FoundationColorSystemContent />,
            footer: {
                prev: 'about',
                next: null,
            },
            imageUrl:
                'https://statics.goorm.io/gds/docs/guides/introduction/development-characteristics.svg',
            imageAlt: 'characteristics',
            reference: {
                figma: {
                    title: 'Component [Foundation]',
                    url: 'https://www.figma.com/design/hBtJQQNTICx64dUK8VsU3Z/Foundation-%5Bgoorm%5D?m=auto&node-id=861-6581',
                },
                notion: {
                    title: 'Component [Foundation]',
                    url: 'https://www.notion.so/goorm/Vapor-Principle-Vapor-Foundation-10c4e6997fb0802f8f60de36912103e6?pvs=4',
                },
            },
        },
    },
} as const;
