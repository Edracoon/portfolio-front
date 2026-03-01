import React, { useRef, useState } from "react";
import { GomokuCard } from "@/modules/projects/gomoku";


export function Carousel() {

    const [active, setActive] = useState(0);

    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const rafRef = useRef<number | null>(null);

    const [lockProgrScroll, setLockProgrScroll] = useState<boolean>(false);

    const goTo = (i: number) => {
        cardRefs.current[i]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
        setActive(i);
    };

    const lockWhenProgrammaticScroll = () => {
        setLockProgrScroll(true);
        // fn();
        setTimeout(() => setLockProgrScroll(false), 300);
    }

    const updateActiveFromScroll = () => {
        if (lockProgrScroll) return;
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const centerX = scroller.scrollLeft + scroller.clientWidth / 2;

        let bestIndex = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        for (let i = 0; i < cardRefs.current.length; i += 1) {
            const el = cardRefs.current[i];
            if (!el) continue;

            const elCenter = el.offsetLeft + el.clientWidth / 2;
            const dist = Math.abs(centerX - elCenter);

            if (dist < bestDist) {
                bestDist = dist;
                bestIndex = i;
            }
        }

        setActive(bestIndex);
    };

    const onScroll = () => {
        // throttle via rAF (évite setState 200 fois/sec)
        if (rafRef.current !== null) return;

        rafRef.current = window.requestAnimationFrame(() => {
            rafRef.current = null;
            updateActiveFromScroll();
        });
    };

    const projects = [GomokuCard, GomokuCard, GomokuCard, GomokuCard]

    return (
        <>
            {/* viewport */}
            <div className="relative w-full overflow-hidden">

                {/* scroll */}
                <div onScroll={onScroll} ref={scrollerRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth justify-start gap-6 
                    [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-[calc(50%-min(640px,100%)/2)]">
                    {projects.map((Project, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el }}
                            className="snap-center shrink-0 w-full max-w-160"
                        >
                            <Project />
                        </div>
                    ))}
                </div>
            </div>

            {/* dots */}
            <div className="my-4 flex justify-center gap-2">
                {projects.map((_, i) => (
                    <button key={i} type="button" onClick={() => { lockWhenProgrammaticScroll(); goTo(i) }} className={`h-2.5 rounded-full transition-all cursor-pointer
                        ${i === active ? "w-8 bg-accent" : "w-2.5 bg-foreground/25 hover:bg-foreground/40"}`}
                    />
                ))}
            </div>
        </>)
}