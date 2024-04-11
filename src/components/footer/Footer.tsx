import Link from "next/link";

interface FooterProps {

}
export default function Footer(props: FooterProps) {
    return (
        <footer className="w-full h-[40dvh] bg-secondary">
            <div className="w-[80dvw] h-full py-5 mx-auto flex flex-row justify-between">
                <div className="flex flex-col gap-2 h-full justify-around">
                    <h1 className="text-2xl">Kleuber Silva</h1>
                    <span className="text-xs">Made © 2024 Kleuber Silva </span>
                </div>
                <div className="h-full flex flex-col gap-3 justify-around">
                    <div>
                        <span className="text-xs">kleuber20@hotmail.com</span>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Link className="hover:opacity-50 transition-all duration-300" href="mailto:kleuber20@hotmail.com">Email</Link>
                        <Link className="hover:opacity-50 transition-all duration-300" href="https://www.linkedin.com/in/kleuber-aguiar-8b89041bb/" target="_blank">Linkedin</Link>
                        <Link className="hover:opacity-50 transition-all duration-300" href="https://github.com/kleuberA" target="_blank">Github</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}