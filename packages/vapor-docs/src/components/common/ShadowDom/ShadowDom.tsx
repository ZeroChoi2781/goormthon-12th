import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import type { ShadowDomProps } from './ShadowDom.types';

/**
 * 리액트 루트를 shadow DOM에 렌더링하는 컴포넌트
 * 원본 루트의 리액트 스타일 시트가 shadowDOM에서도 적용되도록 원본 루트의 head를 복사하여 shadow DOM에 붙임
 */
const ShadowDom = forwardRef<HTMLDivElement, ShadowDomProps>(
    ({ children, id }, forwardedRef) => {
        const ref = useRef<HTMLDivElement>(null);

        useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

        useEffect(() => {
            if (ref.current && !ref.current.shadowRoot) {
                const head = document.querySelector('head');
                const renderIn = document.createElement('div');
                const shadowRoot = ref.current.attachShadow({
                    mode: 'open',
                });
                if (ref.current && !ref.current.querySelector('head')) {
                    shadowRoot.appendChild(head?.cloneNode(true) as Node);
                }
                shadowRoot.appendChild(renderIn);
                const reactRoot = createRoot(renderIn);
                reactRoot.render(children);
            }
        }, [children]);

        return (
            <div id={id} ref={ref} style={{ width: '100%', height: '100%' }} />
        );
    },
);

ShadowDom.displayName = 'ShadowDom';

export default ShadowDom;
