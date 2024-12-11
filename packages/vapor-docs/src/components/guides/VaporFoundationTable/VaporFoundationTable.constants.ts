export type CDNUrl = {
    context: string;
    theme: string;
    fileName: string;
    link: string;
};

export const CDN_URLS: Record<string, CDNUrl[]> = {
    '0.19.0': [
        {
            context: 'goorm',
            theme: 'Light',
            fileName: 'vapor-foundation-goorm.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.19.0/vapor-foundation.min.css',
        },
        {
            context: 'goorm',
            theme: 'Dark',
            fileName: 'vapor-foundation-goorm.dark.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.19.0/vapor-foundation.dark.min.css',
        },
        {
            context: 'kid',
            theme: 'Light',
            fileName: 'vapor-foundation-goorm.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.19.0/vapor-foundation-kid.min.css',
        },
    ],
    '0.18.1': [
        {
            context: 'goorm',
            theme: 'Light',
            fileName: 'vapor-foundation-goorm.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.18.1/vapor-foundation.min.css',
        },
        {
            context: 'goorm',
            theme: 'Dark',
            fileName: 'vapor-foundation-goorm.dark.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.18.1/vapor-foundation.dark.min.css',
        },
        {
            context: 'kid',
            theme: 'Light',
            fileName: 'vapor-foundation-goorm.min.css',
            link: 'https://statics.goorm.io/gds/foundation/v0.18.1/vapor-foundation-kid.min.css',
        },
    ],
};
