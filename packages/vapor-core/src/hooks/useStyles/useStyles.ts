'use client';

import { useMemo } from 'react';

import { useIsomorphicLayoutEffect } from '@goorm-dev/vapor-hooks';
import { create } from 'nano-css';
import { addon as addonCSSOM } from 'nano-css/addon/cssom';
import { addon as addonVCSSOM } from 'nano-css/addon/vcssom';
import { cssToTree } from 'nano-css/addon/vcssom/cssToTree';

import type { CSSObject, ClassNames, Nano } from './useStyles.types';

const nano = create() as Nano;
addonCSSOM(nano);
addonVCSSOM(nano);

const useStyles = <T extends CSSObject>(
    name: string,
    css: T,
): ClassNames<T> => {
    const classNames = useMemo(() => {
        return Object.keys(css).reduce(
            (acc, classNameKey) => ({
                ...acc,
                [classNameKey]: `vapor-${name}-${classNameKey}`,
            }),
            {} as ClassNames<T>,
        );
    }, [css, name]);

    useIsomorphicLayoutEffect(() => {
        const sheet = new nano.VSheet();
        const tree = {};

        Object.entries(css).forEach(([key, styles]) => {
            cssToTree(tree, styles, `.${classNames[key]}`, '');
        });

        sheet.diff(tree);

        return () => {
            sheet.diff({});
        };
    }, [classNames, css]);

    return classNames;
};

export default useStyles;
