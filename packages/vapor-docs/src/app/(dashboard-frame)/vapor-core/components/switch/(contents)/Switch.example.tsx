import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Switch.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Switch>
    <Switch.Indicator />
    <Switch.Label>switch</Switch.Label>
</Switch>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
