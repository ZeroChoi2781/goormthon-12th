import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Breadcrumbs.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Breadcrumbs>
        <Breadcrumbs.Item href="https://gds.goorm.io">
            Home
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://gds.goorm.io">
            Library
        </Breadcrumbs.Item>
        <Breadcrumbs.Item active href="https://gds.goorm.io">
            Data
        </Breadcrumbs.Item>
    </Breadcrumbs>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
