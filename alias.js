const path = require('path');
const fs = require('fs');

const tsconfig = fs.readFileSync(path.resolve(__dirname, './tsconfig.json'), {
    encoding: 'utf-8',
});

/** tsconfig를 기반으로 alias 생성하는 로직 */
const makeAlias = () => {
    try {
        const alias = {};
        const PATTERN = {
            ANNOTATION: /(^\/\/)|(^\/\*\*?)/,
            TAB: /[\t]/g,
            TRAILINGCOMMA: /^(}|},)$|^(]|],)$/,
        };

        /** JSON.parse에 사용할 수 있는 문자열로 변환하기 위한 로직 */
        const TSCONFIG_STRING = tsconfig
            .split('\n')
            // 주석과 빈칸 제거 로직(/** */ <- 이 주석까지 완벽히 제거하지는 않습니다. === 한줄짜리 주석만 필터링 가능)
            .filter((text) => {
                const tempText = text.trim().replace(PATTERN.TAB, '');
                return !PATTERN.ANNOTATION.test(tempText) && tempText.length;
            })
            // trailing comma 제거 로직
            .map((text, index, array) => {
                const tempText = text.trim().replace(PATTERN.TAB, '');
                const nextText = array[index + 1]
                    ?.trim()
                    .replace(PATTERN.TAB, '');

                return nextText && PATTERN.TRAILINGCOMMA.test(nextText)
                    ? tempText.replace(/,$/, '')
                    : tempText;
            })
            .join('');

        const TSCONFIG_PATHS =
            JSON.parse(TSCONFIG_STRING).compilerOptions?.paths;

        /** parsing된 paths를 기반으로 alias 생성 */
        Object.entries(TSCONFIG_PATHS).forEach(([pathKey, [pathValue]]) => {
            const aliasKey = `${pathKey.replace('/*', '')}`;
            const aliasValue = path.resolve(
                __dirname,
                `./${pathValue.replace('/*', '')}`,
            );
            alias[aliasKey] = aliasValue;
        });
        return alias;
    } catch (e) {
        console.error(e);
    }
};
// tsconfig.json 도 함께 수정 할것

module.exports = makeAlias();
