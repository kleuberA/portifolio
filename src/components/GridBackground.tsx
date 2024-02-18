"use client"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { TextGenerateEffect } from "./text-generate-effect";
import { ModeToggle } from "./theme/toggle-theme";
import { Spotlight } from "./SpotLigth";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Logo from "./logo/Logo";
import Link from "next/link";
import React from "react";

export function GridBackground() {

    const words = "Desenvolvedor Full Stack";
    const name = 'Kleuber Aguiar Da Silva'

    return (
        <div
            className="h-screen w-full dark:bg-black bg-white overflow-hidden dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, translateX: 1000 }}
                animate={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-5 right-5 z-20 flex flex-row gap-3">
                <ModeToggle />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: -1000 }}
                animate={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-5 left-5 z-20 flex flex-row gap-3">
                <Logo />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: 1000 }}
                animate={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 2 }}
                className="absolute bottom-5 right-5 z-20 flex flex-col gap-3">
                <div>
                    <Link href="https://www.linkedin.com/in/kleuber-aguiar-8b89041bb/" target="_blank" className="group">
                        <Button variant="outline" size="icon">
                            <LinkedInLogoIcon className="group-hover:text-blue-500" />
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href="https://github.com/kleuberA" target="_blank">
                        <Button variant="outline" size="icon">
                            <GitHubLogoIcon />
                        </Button>
                    </Link>
                </div>
            </motion.div>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col gap-1 justify-center items-center h-full">
                <motion.svg
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    width="200px" height="200px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#00CCAE" fill="#00CCAE">
                    <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z" />
                </motion.svg>
                <TextGenerateEffect words={name} className="text-xl" />
                <TextGenerateEffect words={words} className="text-5xl" />
            </div>
        </div>
    );
}
