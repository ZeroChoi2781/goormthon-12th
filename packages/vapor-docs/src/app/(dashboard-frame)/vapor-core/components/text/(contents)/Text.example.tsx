import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Text.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Text as="h2" style={{width: '100%'}}>저는 Vapor Core의 Text 컴포넌트입니다.</Text>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
