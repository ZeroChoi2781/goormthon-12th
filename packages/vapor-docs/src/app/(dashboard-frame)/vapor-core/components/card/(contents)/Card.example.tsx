import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Card.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Card>
    <Card.Header>
        <Card.Title>Basic Template</Card.Title>
    </Card.Header>
    <Card.Body>This is a Basic Template</Card.Body>
    <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <BasicPagination pageCount={3} />
    </Card.Footer>
</Card>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
