import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Checkbox.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Checkbox id = "core-checkbox">
    <Checkbox.Indicator />
    <Checkbox.Label htmlFor = "core-checkbox">Checkbox</Checkbox.Label>   
</Checkbox>
                `}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
