import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './TextInput.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<TextInput>
    <TextInput.Label>Label</TextInput.Label>    
    <TextInput.Field />
</TextInput>    
                `}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
