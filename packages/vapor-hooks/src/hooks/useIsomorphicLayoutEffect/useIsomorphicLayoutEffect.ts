import { useEffect, useLayoutEffect } from 'react';

/**
 * 환경(클라이언트 사이드 또는 서버 사이드)에 따라 `useLayoutEffect` 또는 `useEffect`를 사용하는 커스텀 훅.
 * @param {Function} effect - 실행할 효과 함수.
 * @param {Array<any>} [dependencies] - 효과에 대한 의존성 배열 (선택 사항).
 * @public
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect)
 * @example
 * // 클라이언트 사이드에서 `useLayoutEffect`를, 서버 사이드에서 `useEffect`를 사용합니다.
 * useIsomorphicLayoutEffect(() => {
 *   // 효과 함수
 *   console.log('효과 실행');
 * }, [dependency1, dependency2]);
 
 * ```tsx
 * useIsomorphicLayoutEffect(() => {
 *   // Code to be executed during the layout phase on the client side
 * }, [dependency1, dependency2]);
 * ```
 */
const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
