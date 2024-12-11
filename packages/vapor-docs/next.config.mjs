import nextMdx from '@next/mdx';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'url';

const preProcess = () => (tree) => {
    visit(tree, (node) => {
        if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') return;

            // eslint-disable-next-line no-param-reassign
            node.raw = codeEl.children?.[0].value;
        }
    });
};

const postProcess = () => (tree) => {
    visit(tree, 'element', (node) => {
        if (
            node?.type === 'element' &&
            node?.tagName === 'figure' &&
            node?.raw
        ) {
            const [preEl] = node.children;

            preEl.properties.raw = node.raw;
        }
    });
};

const rehypeOpts = {
    theme: 'catppuccin-latte',
};

const withMDX = nextMdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            preProcess,
            rehypeSlug,
            [rehypePrettyCode, rehypeOpts],
            postProcess,
        ],
    },
});

// 현재 모듈의 경로 가져오기
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        // NOTE: 랜딩 페이지 제작되기 전까지 임시로 /guides/introduction으로 리다이렉트
        return [
            {
                destination: '/guides',
                source: '/',
                permanent: true,
            },
        ];
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    sassOptions: {
        includePaths: [path.join(dirName, 'styles')],
    },
    typescript: {
        ignoreBuildErrors: true,
    },

    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'statics.goorm.io',
                port: '',
                pathname: '/gds/docs/**',
            },
            {
                protocol: 'https',
                hostname: 'statics.goorm.io',
                port: '',
                pathname: '/gds/resources/**',
            },
        ],
    },
};

export default withMDX(nextConfig);
