import { useEffect, useRef } from "react";

const useKineticScroll = (
    isEnabled: boolean,
    callback: (scrollLeft: number, scrollTop: number) => void,
    {
        scrollerX,
        scrollerY,
    }: {
        scrollerY: React.MutableRefObject<HTMLDivElement | null>;
        scrollerX: React.MutableRefObject<HTMLDivElement | null>;
    }
) => {
    const rafId = useRef<number | null>(null);
    const isTouching = useRef<boolean | null>(null);
    const lastScrollPosition = useRef<readonly [number, number] | null>(null);
    const sameCount = useRef(0);

    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    const scrollXEl = scrollerX.current;
    const scrollYEl = scrollerY.current;

    useEffect(() => {
        const handleScroll = () => {
            if (isTouching.current === false && scrollXEl !== null && scrollYEl !== null) {
                const currentScrollPosition = [scrollXEl.scrollLeft, scrollYEl.scrollTop] as const;
                if (
                    lastScrollPosition.current?.[0] === currentScrollPosition[0] &&
                    lastScrollPosition.current?.[1] === currentScrollPosition[1]
                ) {
                    if (sameCount.current > 10) {
                        // Scroll position hasn't changed, stop the animation frame
                        lastScrollPosition.current = null;
                        isTouching.current = null;
                        return;
                    } else {
                        sameCount.current++;
                    }
                } else {
                    sameCount.current = 0;
                    callbackRef.current(currentScrollPosition[0], currentScrollPosition[1]);
                    lastScrollPosition.current = currentScrollPosition;
                }

                rafId.current = window.setTimeout(handleScroll, 1000 / 120);
            }
        };

        const startTouch = () => {
            isTouching.current = true;
            lastScrollPosition.current = null; // Reset last scroll position on touch start
            if (rafId.current !== null) {
                window.clearTimeout(rafId.current);
                rafId.current = null;
            }
        };

        const endTouch = (event: TouchEvent) => {
            if (event.touches.length === 0) {
                // All touches have ended
                isTouching.current = false;
                sameCount.current = 0;
                rafId.current = window.setTimeout(handleScroll, 1000 / 120);
            }
        };

        if (isEnabled && scrollXEl !== null && scrollYEl !== null) {
            const elementX = scrollXEl;
            const elementY = scrollYEl;
            elementX.addEventListener("touchstart", startTouch);
            elementX.addEventListener("touchend", endTouch);
            elementY.addEventListener("touchstart", startTouch);
            elementY.addEventListener("touchend", endTouch);

            return () => {
                elementX.removeEventListener("touchstart", startTouch);
                elementX.removeEventListener("touchend", endTouch);
                elementY.removeEventListener("touchstart", startTouch);
                elementY.removeEventListener("touchend", endTouch);
                if (rafId.current !== null) {
                    window.clearTimeout(rafId.current);
                }
            };
        }
    }, [isEnabled, scrollXEl, scrollYEl]);
};

export default useKineticScroll;
