import FoundationContentsTemplate from '@vapor-docs/src/components/foundations/FoundationContentsTemplate';
import FoundationList from '@vapor-docs/src/components/foundations/FoundationList';
import { FOUNDATION_ELEMENTS } from '@vapor-docs/src/constants/foundationElements';

const Page = () => {
    return (
        <FoundationContentsTemplate
            header="Foundation"
            description={
                <>
                    시스템의 기본적인 요소들을 정의하는 구성 요소입니다. 이는
                    컴포넌트의 기초가 되며 일관성과 재사용성을 제공하는 데
                    중요한 역할을 합니다. <br />
                    파운데이션은 Color,Size,Typhography와 같은 요소들로 구성되어
                    있습니다.
                </>
            }
        >
            <FoundationList elements={FOUNDATION_ELEMENTS} />
        </FoundationContentsTemplate>
    );
};

export default Page;
