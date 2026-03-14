import "./index.css";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "./components/ThemeToggle";
import { TypoH4 } from "./components/ui/typography";
import SplitText from "./components/SplitText";
import BackgroundDots from './components/BackgroundDots';
import { setFavicon } from "./components/CustomFavicon";
import { GomokuCard } from "@/modules/projects/Gomoku";
import { Chess42Card } from "@/modules/projects/Chess42";
import { SudokuSolverCard } from "@/modules/projects/SudokuSolver";

export function App() {

    setFavicon("--accent");

    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'fixed', zIndex: -100 }}>
                <BackgroundDots />
            </div>
            <div className="relative">
                <div className="flex flex-col text-center items-center px-6 sm:px-0">
                    <section className="w-156 max-w-full text-left pt-10">
                        {/* sticky bg-background/20 */}
                        <div className="top-0 z-20  pb-2">
                            <TypoH4 id="hi"># Hi</TypoH4>
                        </div>

                        <Card className="p-5 text-justify leading-relaxed text-sm sm:text-md">
                            <SplitText
                                text="I'm Edgar Pfennig 👋 "
                                className="text-xl font-semibold text-center"
                                delay={50}
                                duration={1}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            />
                            This is the place where I share some of my personal projects and experiments.
                            If you want to know more about me, professionally, you can check the links below.
                            {/* Ingénieur logiciel, passionné par la conception et l'architecture de
                            systèmes scalables, sécurisés et évolutifs.
                            Je cherche à concevoir des solutions cohérentes, maintenables et avant tout alignées avec le produit. */}
                            <div className="flex flex-row gap-4 justify-center text-sm sm:text-md font-semibold">
                                <a className="cursor-pointer hover:text-accent" href="mailto:edgar.pfennig@gmail.com" aria-label="email" target="_blank">mail</a>•
                                <a className="cursor-pointer hover:text-accent" href="https://www.linkedin.com/in/edgar-pfennig-02a291236" aria-label="linkedIn" target="_blank">linkedin</a>•
                                <a className="cursor-pointer hover:text-accent" href="https://github.com/Edracoon" aria-label="github" target="_blank">github</a>•
                                <a className="cursor-pointer hover:text-accent" href="/public/edgar-pfennig-cv.pdf" aria-label="pdf-cv" target="_blank" >pdf</a>
                            </div>
                        </Card>
                    </section>
                    <section className="w-156 max-w-full text-left py-10">
                        {/* sticky  bg-background/60 backdrop-blur-sm */}
                        <div className="top-0 z-20 pb-2">
                            <TypoH4 id="projects"># Projects</TypoH4>
                        </div>
                        <div className="flex flex-col">
                            <GomokuCard className="w-full max-w-2xl" />
                            <SudokuSolverCard className="w-full max-w-2xl" />
                            <Chess42Card className="w-full max-w-2xl" />
                        </div>
                    </section>
                </div>
            </div >
            <div className="m-8 absolute top-0 right-0 ">
                <ThemeToggle />
            </div>
        </>
    );
}

export default App;