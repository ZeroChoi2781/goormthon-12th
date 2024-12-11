import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './SearchInput.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<SearchInput>
    <SearchInput.Label>라벨</SearchInput>
    <SearchInput.Field defaultValue="기본값" />
</SearchInput>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
