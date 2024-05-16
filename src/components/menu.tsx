import Logo from "./logo/Logo";
import { ModeToggle } from "./theme/toggle-theme";

export default function Menu() {

    return (
        <nav className="w-full h-16">
            <div className="w-[80dvw] h-full mx-auto flex items-center gap-2 flex-row justify-between">
                <div>
                    <Logo />
                </div>
                <div>
                    <ModeToggle />
                </div>
                <div className="flex flex-row gap-2 lg:gap-5">
                    <a href="/" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300">Work</a>
                    <a href="/about" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300">About</a>
                    <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300" download="curriculo.pdf">Resume</a>
                </div>
            </div>
        </nav>
    )
}
