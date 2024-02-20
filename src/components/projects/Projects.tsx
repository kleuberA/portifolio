"use client"
import { Icon } from "../evervalt-card";

export default function Projects() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex flex-col h-full w-[80dvw] p-5 mx-auto">
                <h1 className="text-center text-2xl tracking-wider font-bold">Projects</h1>
                <div className="flex flex-row gap-3">
                    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-56 w-56">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1>Titulo Do Projeto</h1>
                        <span>Descrição</span>
                        <div className="">Tecnologias</div>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3">
                        <div className="w-56 h-56 border border-border rounded-sm">
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1>Titulo Do Projeto</h1>
                            <span>Descrição</span>
                            <div className="">Tecnologias</div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse gap-3">
                        <div className="w-56 h-56 border border-border rounded-sm">
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1>Titulo Do Projeto</h1>
                            <span>Descrição</span>
                            <div className="">Tecnologias</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}