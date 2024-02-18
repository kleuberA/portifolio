import { ChevronLeftIcon, ChevronRightIcon, SlashIcon } from "@radix-ui/react-icons"

export default function Logo() {
    return (
        <section className="flex flex-row items-center justify-center hover:bg-secondary/50 hover:text-primary text-accent-foreground transition-all duration-200 cursor-pointer p-2 rounded-sm border border-transparent hover:border-border">
            <ChevronLeftIcon width={30} height={30} />
            <h1 className="font-bold text-xl">KS</h1>
            <SlashIcon width={15} height={15} />
            <ChevronRightIcon width={30} height={30} />
        </section>
    )
}