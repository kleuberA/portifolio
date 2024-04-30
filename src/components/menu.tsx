import Logo from "./logo/Logo";

export default function Menu() {

    return (
        <nav className="w-full h-16">
            <div className="w-[80dvw] h-full mx-auto flex items-center flex-row justify-between">
                <div>
                    <Logo />
                </div>
                <div className="flex flex-row gap-5">
                    <a href="/" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300">Work</a>
                    <a href="/about" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300">About</a>
                    <a href="#" className="text-accent-foreground hover:text-accent-foreground/50 transition-all duration-300">Resume</a>
                </div>
            </div>
        </nav>
    )
}
