import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { DROPDOWN_PROPS_TABLE, EXAMPLE, EXAMPLE_FIGMA } from './Dropdown.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={DROPDOWN_PROPS_TABLE}
                core
            >
                {`<Dropdown side="bottom" align="start" modal={true}>
                <Dropdown.Trigger>
                    <button>트리거</button>
                </Dropdown.Trigger>
                <Dropdown.Contents maxHeight="40vh">
                <Dropdown.Group divider={false}>
                    <Dropdown.Item closeOnClick={true} disabled={false}>
                        아이템1
                    </Dropdown.Item>
                    <Dropdown.Item closeOnClick={true} disabled={false}>
                        아이템2
                    </Dropdown.Item>
                    <Dropdown.Item closeOnClick={true} disabled={false}>
                        아이템3
                    </Dropdown.Item>
                    </Dropdown.Group>
                    <Dropdown.Group divider={false}>
                    <Dropdown.Item closeOnClick={true} disabled={false}>
                        아이템4
                    </Dropdown.Item>
                    <Dropdown.Item closeOnClick={true} disabled={false}>
                        아이템5
                    </Dropdown.Item>
                    </Dropdown.Group>
                </Dropdown.Contents>
            </Dropdown>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
