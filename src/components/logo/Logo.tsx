"use client"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex flex-row items-center justify-center text-accent-foreground transition-all duration-200 cursor-pointer p-2 rounded-sm border border-transparent hover:text-accent-foreground/50">
            <h1 className="font-bold text-base tracking-wider">Kleuber Silva</h1>
        </Link>
    )
}