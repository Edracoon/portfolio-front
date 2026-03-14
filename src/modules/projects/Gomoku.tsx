import { ProjectCard } from "@/components/ProjectCard";
import { LinkInline, TypoInline, TypoP } from "@/components/ui/typography";
import { CPlusPlus, React, TailwindCSS, WebAssembly, TypeScript, GitHubLight, GitHubDark } from "developer-icons";
import env from "@/env";
import { useTheme } from "@/providers/ThemeProvider";
import { ExternalLink } from "lucide-react";

export function GomokuCard(props: React.HTMLAttributes<HTMLDivElement>) {

    const { theme } = useTheme();

    const GithubIcon = theme === "light" ? GitHubDark : GitHubLight

    return (
        <ProjectCard
            {...props}
            className="w-full"
            title="GomokuV2"
            links={[{ label: "github", href: "https://github.com/Edracoon/GomokuV2", icon: GithubIcon }, { label: "play", href: env.GOMOKU_URL!, icon: ExternalLink }]}
            body={
                <TypoP className="text-sm">
                    High-performance <LinkInline href={"https://wikipedia.org/wiki/Gomoku"} label={"gomoku"} className="font-semibold" /> game
                    engine and a <TypoInline className="text-accent font-medium">AI player</TypoInline> using a <TypoInline className="text-accent font-medium">minimax algorithm</TypoInline> optimized
                    with <LinkInline href={"https://wikipedia.org/wiki/Alpha%e2%80%93beta_pruning"} label={"α-β prunning"} className="font-semibold" /> and
                    iterative deepening on zero-window searches (<LinkInline href={"https://wikipedia.org/wiki/MTD(f)"} label={"MTD(f)"} className="font-semibold" />)
                    with a custom <LinkInline href={"https://wikipedia.org/wiki/Zobrist_hashing"} label={"zobrist hash table"} className="font-semibold" />.
                </TypoP>
            }
            techStack={[CPlusPlus, WebAssembly, TypeScript, React, TailwindCSS]}
            infoList={[
                <>
                    Computing time constraint of less than{" "}
                    <TypoInline className="text-accent font-medium">500ms</TypoInline>{" "}
                    on average
                </>,
                <>
                    Dashboard showing{" "}
                    <TypoInline className="text-accent font-medium">code performances</TypoInline>
                    , search depth, ...
                </>,
                <>
                    Multiple {" "}
                    <TypoInline className="text-accent font-medium">games modes</TypoInline>
                    : PvP, PvP (+ hints), Player vs AI
                </>,
                "Game rules and tutorial viewer integrated in the UI",
                <>
                    Game engine built with {" "}
                    <TypoInline className="text-accent font-medium">C++ </TypoInline>
                    and compiled in <TypoInline className="text-accent font-medium">WebASM</TypoInline>
                </>,
                <>
                    Clean and responsive UI built with  {" "}
                    <TypoInline className="text-accent font-medium">React </TypoInline>
                    and <TypoInline className="text-accent font-medium">Tailwind</TypoInline>
                </>
            ]}
            imageUrl={undefined}
        />
    );
}