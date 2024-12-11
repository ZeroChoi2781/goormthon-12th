import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Avatar.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Avatar label="Goorm" size="md" square={false}>
        <Avatar.Image src="https://avatars.githubusercontent.com/u/0" />
</Avatar>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
