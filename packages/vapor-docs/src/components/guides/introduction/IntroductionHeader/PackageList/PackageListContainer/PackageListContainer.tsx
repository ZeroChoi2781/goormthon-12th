import React, { useEffect } from 'react';

import {
    Item as RadixAccordionItem,
    Root as RadixAccordionRoot,
} from '@radix-ui/react-accordion';
import cn from 'classnames';

import style from './PackageListContainer.module.scss';

const PackageListContainer = ({ children }: { children: React.ReactNode }) => {
    const itemRef = React.useRef<HTMLDivElement>(null);
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    useEffect(() => {
        const handleStateChange = () => {
            const state = itemRef.current?.dataset.state;
            if (state === 'closed') {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
        };

        // 초기 상태 설정
        handleStateChange();

        // MutationObserver를 사용하여 dataset.state 변경 감지
        const observer = new MutationObserver(handleStateChange);
        if (itemRef.current) {
            observer.observe(itemRef.current, {
                attributes: true,
                attributeFilter: ['data-state'], // dataset.state 속성만 감지
            });
        }

        // 컴포넌트 언마운트 시 observer 해제
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={style.layout}>
            <RadixAccordionRoot
                type="single"
                collapsible
                className={cn(style.container, {
                    [style.collapsed]: isCollapsed,
                })}
                defaultValue="packageList"
            >
                <RadixAccordionItem
                    value="packageList"
                    className={style.item}
                    ref={itemRef}
                >
                    {children}
                </RadixAccordionItem>
            </RadixAccordionRoot>
        </section>
    );
};

export default PackageListContainer;
