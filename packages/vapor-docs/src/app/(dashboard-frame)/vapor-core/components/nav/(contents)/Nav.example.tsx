import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Nav.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Nav size="md" type="pill">
    <Nav.List>
        <Nav.Item href="#">Default Link</Nav.Item>
        <Nav.Item href="#" active>Active Link</Nav.Item>
        <Nav.Item href="#" disabled>Disabled Active</Nav.Item>
    </Nav.List>
</Nav>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
