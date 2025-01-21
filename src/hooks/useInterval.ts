import { useRef, useEffect } from 'react';

/**
 * 특정 callback을 반복시키는 custom hook, Component가 재구성될 때 interval을 삭제하고, callback의 변경에 대응함
 * @param callback {function} 반복실행할 기능
 * @param delay {number} 반복주기 - 1/1000sec
 * */
export const useInterval = (callback: Function, delay: number) => {
    // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
    const savedCallback = useRef<Function>();

    // callback이 바뀔 때마다 ref를 업데이트 해준다.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            // tick이 실행되면 callback 함수를 실행시킨다.
            if (!!savedCallback.current) savedCallback.current();
        }
        if (delay !== null) { // 만약 delay가 null이 아니라면
            let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
            return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
        }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

export default useInterval;