import AllComponentsContainer from '@vapor-docs/src/components/all-components/AllComponentsContainer';
import AllComponentsList from '@vapor-docs/src/components/all-components/AllComponentsList';

const Page = () => {
    return (
        <AllComponentsContainer
            library="core"
            libraryDescription={
                <>
                    최소한의 기능 제약, 최대한의 형태 커스텀 가능성을 원칙으로
                    한 컴포넌트입니다.
                    <br />
                    제약 없이 자유롭게 설계할 수 있도록 높은 자유도를
                    제공합니다.
                </>
            }
        >
            <AllComponentsList library="core" />
        </AllComponentsContainer>
    );
};

export default Page;
