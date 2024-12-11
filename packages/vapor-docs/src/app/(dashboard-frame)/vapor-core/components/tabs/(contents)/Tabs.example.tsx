import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Tabs.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Tabs size="md" defaultValue="Pineapple">
    <Tabs.List>
        <Tabs.Button value="Apple">Apple</Tabs.Button>
        <Tabs.Button value="Grape">Grape</Tabs.Button>
        <Tabs.Button value="Kiwi">Kiwi</Tabs.Button>
        <Tabs.Button value="Pineapple">Pineapple</Tabs.Button>
        <Tabs.Button value="Watermelon">Watermelon</Tabs.Button>
        <Tabs.Button value="onion" disabled>
            onion
        </Tabs.Button>
    </Tabs.List>
    <Tabs.Panel value="Apple">Apple</Tabs.Panel>
    <Tabs.Panel value="Grape">Grape</Tabs.Panel>
    <Tabs.Panel value="Kiwi">Kiwi</Tabs.Panel>
    <Tabs.Panel value="Pineapple">Pineapple</Tabs.Panel>
    <Tabs.Panel value="Watermelon">Watermelon</Tabs.Panel>
    <Tabs.Panel value="onion">onion</Tabs.Panel>
</Tabs>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
