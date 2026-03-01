import "./index.css";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "./components/ThemeToggle";
import { TypoP, TypoH4, TypoInline, LinkInline } from "./components/ui/typography";
import SplitText from "./components/SplitText";
import BackgroundDots from './components/BackgroundDots';
import env from "./env";
import { Carousel } from "./components/Carousel";

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
            <div className="relative">

                {/* fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background/80 to-transparent" />

                <div className="flex flex-col text-center items-center px-6">
                    <div className="w-160 max-w-full text-left pt-10">
                        <Card className="border-2 border-dashed bg-background shadow-none p-5 text-justify leading-relaxed">
                            Ingénieur logiciel, passionné par la conception et l'architecture de
                            systèmes scalables, sécurisés et évolutifs.
                            Je cherche à concevoir des solutions cohérentes, maintenables et avant tout alignées avec le produit.
                            <div className="flex flex-row gap-4 justify-center">
                                <a className="text-md font-semibold cursor-pointer hover:text-accent" href="mailto:edgar.pfennig@gmail.com" aria-label="email" target="_blank">mail</a>•
                                <a className="text-md font-semibold cursor-pointer hover:text-accent" href="https://www.linkedin.com/in/edgar-pfennig-02a291236" aria-label="linkedIn" target="_blank">linkedin</a>•
                                <a className="text-md font-semibold cursor-pointer hover:text-accent" href="https://github.com/Edracoon" aria-label="github" target="_blank">github</a>•
                                <a className="text-md font-semibold cursor-pointer hover:text-accent" href="/public/edgar-pfennig-cv.pdf" aria-label="pdf-cv" target="_blank" >pdf</a>
                            </div>
                        </Card>
                    </div>
                    <div className="pt-10 grid w-full place-items-center">
                        <TypoH4 id="projects" className="pb-2"># Personnal projects</TypoH4>
                        <Carousel />
                    </div>
                </div>
            </div >
            <div className="m-8 absolute top-0 right-0 ">
                <ThemeToggle />
            </div>
        </>
    );
}

export default App;