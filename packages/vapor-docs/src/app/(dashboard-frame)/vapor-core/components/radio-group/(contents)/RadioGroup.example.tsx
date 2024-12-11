import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './RadioGroup.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<RadioGroup defaultSelectedValue="option1">
    <RadioGroup.Item >
        <RadioGroup.Indicator value="option1"/>
        <RadioGroup.Label>Option1</RadioGroup.Label>    
    </RadioGroup.Item>
    <RadioGroup.Item >
        <RadioGroup.Indicator value="option2"/>
        <RadioGroup.Label>Option2</RadioGroup.Label>    
    </RadioGroup.Item>
    <RadioGroup.Item disabled={true}>
        <RadioGroup.Indicator value="option3" />
        <RadioGroup.Label>Option3</RadioGroup.Label>    
    </RadioGroup.Item>
</RadioGroup>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
