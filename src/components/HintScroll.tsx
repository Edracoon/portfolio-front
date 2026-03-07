import { useEffect, useRef, useState } from "react";

type ScrollHintContainerProps = {
    scroll: "vertical" | "horizontal";
    duration?: number;
    distance?: number;
    repeat?: boolean;
    interval?: number;
} & React.PropsWithChildren;

export function ScrollHintContainer({
    scroll = "vertical",
    duration = 500,
    distance = 15,
    repeat = false,
    interval = 5000,
    children
}: ScrollHintContainerProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const verticalScroll = () => {
        const el = ref.current;
        if (!el) return;

        // only if actually scrollable || not already scrolled
        if (el.scrollHeight <= el.clientHeight) return;

        const animate = async () => {
            el.scrollTo({
                top: distance,
                behavior: "smooth"
            });
            await new Promise(r => setTimeout(r, duration));
            el.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        const timeout = setTimeout(animate, 5000);
        return () => clearTimeout(timeout);
    }

    const horizontalScroll = () => {
        const el = ref.current;
        if (!el) return;

        console.log(el.scrollWidth, el.clientWidth);

        // only if actually scrollable || not already scrolled
        if (el.scrollWidth <= el.clientWidth) return;

        const animate = async () => {
            el.scrollTo({
                left: distance,
                behavior: "smooth"
            });
            await new Promise(r => setTimeout(r, duration));
            el.scrollTo({ left: 0, behavior: "smooth" });
        };
        const timeout = setTimeout(animate, 100);
        return () => clearTimeout(timeout);
    }

    const onScroll = () => {
        // console.log(ref.current?.scrollTop, ref.current?.scrollLeft);
    }

    useEffect(() => {
        const cleanup = scroll === "vertical" ? verticalScroll() : horizontalScroll();
        return cleanup;
    }, []);

    return (
        <div ref={ref} className="overflow-y-auto" onScroll={() => onScroll()}>
            {children}
        </div>
    );
}