import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useRef, useState } from 'react';

/*
	React에서 함수 내에서 상태에 접근할 경우, 클로져로 상태가 렉시컬 스코프에 갇히는 현상을 피하기 위한 훅.
	latestState.current로 접근하면 언제든지 가장 최신 상태의 상태에 접근할 수 있다.
*/
function useLatestState<T>(initData: T): {
    setState: Dispatch<SetStateAction<T>>;
    latestState: MutableRefObject<T>;
} {
    const [state, setState] = useState<T>(initData);
    const latestState = useRef(state);
    latestState.current = state;

    return { setState, latestState };
}

export default useLatestState;
