import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import readPkgUp from 'read-pkg-up';
import postcss from 'rollup-plugin-postcss';
import summary from 'rollup-plugin-summary';
import typescript from 'rollup-plugin-typescript2';

// NOTE: IE 환경에서 flexbox 버그를 수정해주는 플러그인
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const aliasConf = require('./alias');

const excludePath = 'node_modules/**';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const inputDir = 'index.ts';

// 각 packages의 pcakage.json
const { packageJson } = readPkgUp.sync({
    cwd: fs.realpathSync(process.cwd()),
});

// 각 프로젝트별 tsconfig 경로 확인
// tsconfig.build.json이 있는지 여부를 확인합니다.
const tsconfigBuild = path.resolve(process.cwd(), './tsconfig.build.json');
const tsconfigDefault = path.resolve(process.cwd(), './tsconfig.json');
const tsconfig = fs.existsSync(tsconfigBuild) ? tsconfigBuild : tsconfigDefault;

const containsPattern = (arr, pkg) => {
    return (
        arr &&
        arr.some((pattern) => {
            if (pattern instanceof RegExp) return pattern.test(pkg);
            return pkg.startsWith(pattern);
        })
    );
};

const injectGoormstrap = (cssVariableName) => {
    return [
        `import stylesInject from "${path.resolve(
            __dirname,
            'utils/inject',
        )}";`,
        `stylesInject(${cssVariableName});`,
    ].join('\n');
};

const external = (pkg) => {
    const defaultExternal = [/@babel\/runtime/];
    const pkgDependencies = Object.keys(packageJson.dependencies || {});
    const pkgPeerDependencies = Object.keys(packageJson.peerDependencies || {});
    const externals = [
        ...defaultExternal,
        ...pkgDependencies,
        ...pkgPeerDependencies,
    ];

    const isExternal = containsPattern(externals, pkg);

    return isExternal;
};

const plugins = [
    alias({
        resolve: extensions,
        entries: Object.keys(aliasConf).map((key) => ({
            find: key,
            replacement: aliasConf[key],
        })),
    }),
    json(),
    postcss({
        extensions: ['.scss', '.css'],
        plugins: [
            postcssFlexbugsFixes,
            postcssPresetEnv({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
            }),
        ],
        // goorm-storybook.css와 같이 하나 파일로 뺄건지
        extract: packageJson?.style || false,
        modules: {
            // 고유한 해시 값을 생성하기 위해 package.json의 name과 version을 포함한 구성으로 변경
            generateScopedName: (name, _, css) => {
                const packageName = packageJson.name
                    .replace('@goorm-dev/', '') // @goorm-dev/ 제거
                    .replace(/-/g, '_'); // -를 _로 변환

                const packageVersion = packageJson.version.replace(/\./g, '_'); // .을 _로 변환
                const hash = crypto
                    .createHash('md5')
                    .update(css)
                    .digest('hex')
                    .slice(0, 5);

                return `${packageName}_${packageVersion}_${name}_${hash}`;
            },
        },
        autoModules: false,
        minimize: true,
        /**
         * inject 옵션: head 태그에 style 주입하는 기능 (https://github.com/egoist/rollup-plugin-postcss#inject)
         * intertAt top: heade 태그 최상단에 주입함으로써, 사용단에서 style override가 가능하도록 함
         */
        inject: injectGoormstrap,
    }),
    typescript({
        useTsconfigDeclarationDir: true,
        tsconfig,
    }),
    nodeResolve({ extensions }),
    commonjs(),
    babel({
        babelHelpers: 'runtime',
        babelrc: false,
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
        exclude: excludePath,
    }),
    // 번들 결과물 minify
    terser(),
    summary(),
];

const buildJS = (input, output, format) => {
    const defaultOutputConfig = {
        format,
        sourcemap: true,
    };
    const esOutputConfig = {
        ...defaultOutputConfig,
        preserveModules: true,
        preserveModulesRoot: path.dirname(input),
        exports: 'auto',
        dir: output,
    };
    const cjsOutputConfig = {
        ...defaultOutputConfig,
        preserveModules: false,
        exports: 'named',
        file: output,
    };

    return {
        input,
        output: [format === 'es' ? esOutputConfig : cjsOutputConfig],
        // NOTE: es에서만 폴더 구조 유지
        external,
        plugins,
    };
};

const main = () => {
    const cjsBuild = [buildJS(inputDir, packageJson.main, 'cjs')];
    const esBuild = [buildJS(inputDir, 'dist/esm', 'es')];

    // package.json에 "main" key없는 경우 es만 빌드
    if (!packageJson?.main) return [...esBuild];
    // package.json에 "module" key가 없는 경우 cjs만 빌드
    if (!packageJson?.module) return [...cjsBuild];
    // package.json에 "main"과 "module" key가 있는 경우 둘 다 빌드
    else return [...cjsBuild, ...esBuild];
};

export default main();
