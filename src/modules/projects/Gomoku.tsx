import { ProjectCard } from "@/components/ProjectCart";
import { LinkInline, TypoInline, TypoP } from "@/components/ui/typography";
import { CPlusPlus, React, TailwindCSS, WebAssembly } from "developer-icons";

export function GomokuCard(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <ProjectCard
            {...props}
            className="w-full"
            title="GomokuV2"
            links={[{ label: "github", href: "https://github.com/Edracoon/GomokuV2" }, { label: "play", href: "GOMOKU_URL" }]}
            body={
                <TypoP className="text-sm">
                    High-performance <LinkInline href={"https://wikipedia.org/wiki/Gomoku"} label={"gomoku"} className="font-semibold" /> game
                    engine and a <TypoInline className="text-accent">AI player</TypoInline> using a <TypoInline className="text-accent">minimax algorithm</TypoInline> optimized
                    with <LinkInline href={"https://wikipedia.org/wiki/Alpha%e2%80%93beta_pruning"} label={"α-β prunning"} className="font-semibold" /> and
                    iterative deepening on zero-window searches (<LinkInline href={"https://wikipedia.org/wiki/MTD(f)"} label={"MTD(f)"} className="font-semibold" />)
                    with a custom <LinkInline href={"https://wikipedia.org/wiki/Zobrist_hashing"} label={"zobrist hash table"} className="font-semibold" />.
                </TypoP>
            }
            techStack={[CPlusPlus, WebAssembly, React, TailwindCSS]}
            infoList={[
                "Computing time constraint of less than 500ms on average.",
                "Dashboard showing code performances, search depth, and moves scores.",
                "Multiple games modes: PvP, PvP (+ hints), Player vs AI.",
                "Game rules and tutorial viewer integrated in the UI.",
                "Game engine built with C++ and compiled in WebAssembly.",
                "UI built with React and TailwindCSS",

            ]}
            imageUrl={undefined}
        />
    );
}