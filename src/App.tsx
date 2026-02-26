import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import { useTheme } from "./providers/ThemeProvider";
import { Moon, SparklesIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/ThemeToggle";
import SplitText from "./components/SplitText";
import BackgroundDots from './components/BackgroundDots';
import styled from "styled-components";
import { TypoH2, TypoBlockquote, TypoH3, TypoP, TypoInline, TypoH4 } from "./components/ui/typography";

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: var(--text-secondary);
    font-weight: 400;
`;

export function App() {

    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -100 }}>
                <BackgroundDots />
            </div>
            <div className="flex flex-col gap-4 text-center p-8 items-center">
                <Card className="border-none bg-background shadow-none p-0">
                    <SplitText
                        text="Bonjour ! 👋"
                        className="text-3xl font-semibold text-center"
                        delay={50}
                        duration={1.5}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </Card>
            </div>
            <div className="flex flex-col text-center items-center px-6">
                <div className="w-160 max-w-full text-left pt-10">
                    <Card className="border-2 border-dashed bg-background shadow-none p-5 text-justify leading-relaxed">
                        Ingénieur logiciel, passionné par la conception et l'architecture de
                        systèmes scalables, sécurisés et évolutifs.
                        Je cherche à concevoir des solutions cohérentes, maintenables et avant tout alignées avec le produit.
                        <div className="flex flex-row gap-4 z-10 bg-background justify-center">
                            <a className="text-md font-semibold cursor-pointer" href="mailto:edgar.pfennig@gmail.com" aria-label="email" target="_blank">mail</a>•
                            <a className="text-md font-semibold cursor-pointer" href="https://www.linkedin.com/in/edgar-pfennig-02a291236" aria-label="linkedIn" target="_blank">linkedin</a>•
                            <a className="text-md font-semibold cursor-pointer" href="https://github.com/Edracoon" aria-label="github" target="_blank">github</a>•
                            <a className="text-md font-semibold cursor-pointer" href="/public/edgar-pfennig-cv.pdf" aria-label="pdf-cv" target="_blank" >pdf</a>
                        </div>
                    </Card>
                </div>
                <div className="w-160 max-w-full text-left pt-10">
                    <TypoH3 className="pb-2">• Personnal projects</TypoH3>
                    <Card className="border-2 border-dashed bg-background shadow-none p-5 text-justify leading-relaxed">
                        <TypoH4>Gomoku</TypoH4>
                        <TypoBlockquote>Hello <TypoInline className="text-pink-500">gentlemen</TypoInline>.</TypoBlockquote>
                    </Card>
                </div>
            </div>
            <div className="m-8 absolute top-0 right-0 ">
                <ThemeToggle />
            </div>
        </>
    );
}

export default App;