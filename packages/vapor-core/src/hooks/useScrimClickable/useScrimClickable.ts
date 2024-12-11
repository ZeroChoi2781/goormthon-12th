import type { PointerDownOutsideEvent } from './useScrimClickable.types';

/**
 * useScrimClickable - @radix-ui에서 제공하는 오버레이 컴포넌트들의 Scrim 영역을 클릭했을 때 열림 상태 제어 여부를 결정하는 커스텀 훅입니다.
 * scrimClickable이 false일 경우, Scrim 영역을 클릭해도 아무런 이벤트가 발생하지 않습니다.
 */
const useScrimClickable = (scrimClickable = false) => {
    const onPointerDownOutside = (e: PointerDownOutsideEvent) => {
        if (scrimClickable) return;

        e.preventDefault();
    };

    return { onPointerDownOutside };
};

export default useScrimClickable;
