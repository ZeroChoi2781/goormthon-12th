import type { ComponentType } from 'react';

export type PackageName = 'vapor-core';

export type PageProps = {
    params: {
        componentName: string;
        packageName: PackageName;
    };
};

export type ExampleComponent = Record<
    string,
    () => Promise<{ default: ComponentType }>
>;
