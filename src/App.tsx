import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import { useTheme } from "./providers/ThemeProvider";
import { Moon, SparklesIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/ThemeToggle";
import SplitText from "./components/SplitText";
import BackgroundDots from './components/BackgroundDots';

export function App() {

    const handleAnimationComplete = () => {
        console.log('done');
    };

    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </Card>
            </div>
            <div className="m-8 absolute top-0 right-0 ">
                <ThemeToggle />
            </div>
        </>
    );
}

export default App;