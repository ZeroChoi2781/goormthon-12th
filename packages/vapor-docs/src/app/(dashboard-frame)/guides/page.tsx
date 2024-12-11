import PackageTabsAccordion from '@vapor-docs/src/components/guides/PackageTabsAccordion';
import IntroductionHeader from '@vapor-docs/src/components/guides/introduction/IntroductionHeader';
import Layout from '@vapor-docs/src/components/guides/introduction/Layout';
import PackageDescriptionList from '@vapor-docs/src/components/guides/introduction/PackageDescriptionList';
import Image from 'next/image';

const page = () => {
    return (
        <Layout>
            <IntroductionHeader />
            <PackageTabsAccordion />
            <Image
                src="https://statics.goorm.io/gds/docs/guides/introduction/packageLayer.svg"
                alt="vapor structure"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                }}
            />
            <section className="vapor-markdown">
                <PackageDescriptionList />
            </section>
        </Layout>
    );
};

export default page;
