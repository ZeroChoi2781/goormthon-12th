import LiveDemo from '@vapor-docs/src/components/common/LiveDemo';

import { EXAMPLE, EXAMPLE_FIGMA, PROPS_TABLE } from './Dialog.data';

const Example = () => {
    return (
        <LiveDemo foundationLinks={EXAMPLE_FIGMA}>
            <LiveDemo.LiveDemoItem
                knobs={EXAMPLE}
                propsTable={PROPS_TABLE}
                core
            >
                {`<Dialog>
            <Dialog.Trigger>
                <Button>트리거</Button>
            </Dialog.Trigger>
            <Dialog.Contents>
                <Dialog.Header>
                    <Dialog.Title>안녕하세요</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                    <Dialog.Description>
                        푸터의 버튼은 기본적으로 우측 정렬 상태입니다.
                    </Dialog.Description>
                </Dialog.Body>
                <Dialog.Footer
                    style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Dialog.Close>
                        <Button size="lg" color="secondary">
                            취소
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button size="lg" color="primary">
                            확인
                        </Button>
                    </Dialog.Close>
                </Dialog.Footer>
            </Dialog.Contents>
        </Dialog>`}
            </LiveDemo.LiveDemoItem>
        </LiveDemo>
    );
};

export default Example;
