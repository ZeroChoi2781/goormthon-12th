import type { CommandPrefix, PackageInfo } from './PackageSelector.types';

export const COMMAND_PREFIX: Record<CommandPrefix, string> = {
    yarn: 'yarn add',
    npm: 'npm install',
};

export const PACKAGES: Record<string, PackageInfo> = {
    '@goorm-dev/vapor-hooks': {
        description: 'Vapor 디자인 시스템을 구성하는 React Hooks 라이브러리',
        checked: true,
    },
    '@goorm-dev/vapor-core': {
        description:
            '최소한의 기능 제약, 최대한의 형태 커스텀이 가능한 React 컴포넌트 라이브러리',
        checked: true,
    },
    '@goorm-dev/vapor-icons': {
        description: 'Vapor 디자인 시스템을 구성하는 React 아이콘 라이브러리',
        checked: false,
    },
    '@goorm-dev/vapor-components': {
        description:
            'Reactstrap 기반의 컴포넌트와 자체 제작 컴포넌트로 구성된 React 컴포넌트 라이브러리 (구 gds-components)',
        checked: false,
    },
};
