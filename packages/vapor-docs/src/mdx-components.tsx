import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

import CodeBlock from './components/custom-mdx/CodeBlock';
import ContentHeader from './components/custom-mdx/ContentHeader';
import ContentHeaderDescription from './components/custom-mdx/ContentHeaderDescription';
import Heading from './components/custom-mdx/Heading';
import MdxAlert from './components/custom-mdx/MdxAlert';
import MdxContent from './components/custom-mdx/MdxContent';
import MdxImage from './components/custom-mdx/MdxImage';
import MdxLayout from './components/custom-mdx/MdxLayout';
import OverviewImage from './components/custom-mdx/OverviewImage';
import Pre from './components/custom-mdx/Pre';
import RulesOfUseContent from './components/custom-mdx/RulesOfUse/RulesOfUseContent';
import RulesOfUseContentList from './components/custom-mdx/RulesOfUse/RulesOfUseContentList';
import RulesOfUseDescription from './components/custom-mdx/RulesOfUse/RulesOfUseDescription';
import RulesOfUseDescriptionContent from './components/custom-mdx/RulesOfUse/RulesOfUseDescriptionContent';
import RulesOfUseDescriptionTitle from './components/custom-mdx/RulesOfUse/RulesOfUseDescriptionTitle';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
    return {
        h1: ({ id, children }) => (
            <Heading
                id={id}
                as="h1"
                typography="heading1"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        h2: ({ id, children }) => (
            <Heading
                id={id}
                as="h2"
                typography="heading2"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        h3: ({ id, children }) => (
            <Heading
                id={id}
                as="h3"
                typography="heading3"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        h4: ({ id, children }) => (
            <Heading
                id={id}
                as="h4"
                typography="heading4"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        h5: ({ id, children }) => (
            <Heading
                id={id}
                as="h5"
                typography="heading5"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        h6: ({ id, children }) => (
            <Heading
                id={id}
                as="h6"
                typography="heading6"
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        p: ({ children }) => (
            <Heading
                as="p"
                typography="subtitle1"
                isInheritColor
                isResetMargin={false}
            >
                {children}
            </Heading>
        ),
        img: MdxImage,
        a: Link,
        ContentHeaderDescription: ({
            description,
        }: {
            description: string;
        }) => <ContentHeaderDescription description={description} />,
        OverviewImage: ({ src, alt }: { src?: string; alt?: string }) => (
            <OverviewImage src={src} alt={alt} />
        ),
        RulesOfUseDescriptionContent: ({ content }) => (
            <RulesOfUseDescriptionContent>
                {content}
            </RulesOfUseDescriptionContent>
        ),
        pre: Pre,
        CodeBlock,
        MdxLayout,
        MdxContent,
        MdxAlert,
        ContentHeader,
        RulesOfUseContent,
        RulesOfUseContentList,
        RulesOfUseDescription,
        RulesOfUseDescriptionTitle,
        ...components,
    } as MDXComponents;
};
