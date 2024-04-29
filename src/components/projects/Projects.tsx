"use client"

import { ListProjects } from "./ListProjects";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {

    const listProject = ListProjects;

    return (
        <section className="w-full min-h-screen" id="project">
            <div className="flex flex-col w-[80dvw] gap-5 p-5 mx-auto">
                <h1 className="text-center text-2xl tracking-wider font-bold pb-5 lg:pb-0">Projetos</h1>
                <div className="flex flex-col lg:flex-row gap-5 w-full flex-wrap justify-center">
                    {listProject.map((project, index) => (
                        <div key={index} className="lg:w-[30dvw]">
                            <div className="lg:h-[50dvh] bg-secondary p-2 group relative">
                                <Link href={project.repo} target='_blank'>
                                    <img src={project.image} alt={""} className="w-full h-full" />
                                </Link>
                                <div className="absolute bottom-5 right-5 hidden group-hover:flex bg-secondary p-2 rounded-sm">
                                    <Link href={project.repo} target='_blank'>
                                        <GitHubLogoIcon width={20} height={20} />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl">{project.title}</h1>
                                <div className="flex flex-row flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="text-xs bg-secondary/50 rounded-sm p-1">{tech}</span>
                                    ))}
                                </div>
                                <span className="text-xs text-justify">{project.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}