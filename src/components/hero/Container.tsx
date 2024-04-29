"use client"
import Image from "next/image";
import Computer from '../../../public/computer.png';
import { motion } from "framer-motion";

export default function ContainerHero() {
    return (
        <section className="w-[80dvw] min-h-[80dvh] flex flex-row mx-auto items-center">
            <div className="flex flex-col gap-2">
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-3xl lg:w-[35dvw]">
                    Olá, sou o Kleuber Silva, um desenvolvedor full stack.
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.7 }}
                    className="text-sm">Formado em Ciência da Computação pela UNIP.</motion.span>
            </div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full hidden lg:flex items-center justify-center">
                <Image src={Computer} alt={""} />
            </motion.div>
        </section>
    )
}