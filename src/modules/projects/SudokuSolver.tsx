import { ProjectCard } from "@/components/ProjectCard";
import { LinkInline, TypoInline, TypoP } from "@/components/ui/typography";
import { C, WebAssembly, JavaScript, NPM, GitHubLight, GitHubDark, TypeScript } from "developer-icons";
import { useTheme } from "@/providers/ThemeProvider";
import { ExternalLink } from "lucide-react";

export function SudokuSolverCard(props: React.HTMLAttributes<HTMLDivElement>) {

    const { theme } = useTheme();

    const GithubIcon = theme === "light" ? GitHubDark : GitHubLight;

    return (
        <ProjectCard
            {...props}
            className="w-full"
            title="Sudoku Solver"
            links={[
                { label: "github", href: "https://github.com/Edracoon/sudoku-solver-wasm", icon: GithubIcon },
                { label: "npm", href: "https://www.npmjs.com/package/@edracoon/sudoku-solver-wasm", icon: ExternalLink },
            ]}
            body={
                <TypoP className="text-sm">
                    A fast <LinkInline href={"https://wikipedia.org/wiki/Sudoku"} label={"Sudoku"} className="font-semibold" /> solver
                    written in <TypoInline className="text-accent font-medium">C</TypoInline> and compiled
                    to <TypoInline className="text-accent font-medium">WebAssembly</TypoInline> via{" "}
                    <LinkInline href={"https://emscripten.org"} label={"Emscripten"} className="font-semibold" />.
                    Published as a zero-dependency <TypoInline className="text-accent font-medium">npm package</TypoInline>,
                    it uses a <LinkInline href={"https://wikipedia.org/wiki/Backtracking"} label={"backtracking algorithm"} className="font-semibold" /> to
                    solve any valid 9×9 grid.
                </TypoP>
            }
            techStack={[C, WebAssembly, JavaScript, TypeScript, NPM]}
            infoList={[
                <>
                    Solver core written in <TypoInline className="text-accent font-medium">C</TypoInline> and
                    compiled to <TypoInline className="text-accent font-medium">WebASM</TypoInline>
                </>,
                <>
                    Accepts a <TypoInline className="text-accent font-medium">2D array</TypoInline> or a
                    flat <TypoInline className="text-accent font-medium">81-character string</TypoInline> as input
                </>,
                <>
                    Thin JS wrapper - <TypoInline className="text-accent font-medium">zero runtime dependencies</TypoInline>
                </>,
                <>
                    Fully <TypoInline className="text-accent font-medium">TypeScript</TypoInline> compatible,
                    works in any environment
                </>,
                <>
                    Published on <TypoInline className="text-accent font-medium">npm</TypoInline> as{" "}
                    <TypoInline className="text-accent font-medium">@edracoon/sudoku-solver-wasm</TypoInline>
                </>,
            ]}
            imageUrl={undefined}
        />
    );
}
