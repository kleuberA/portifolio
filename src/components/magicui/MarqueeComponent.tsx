import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

import Css from '../../../public/css3.svg';
import Docker from '../../../public/docker.svg';
import FramerMotion from '../../../public/framerMotion.svg';
import Html from '../../../public/html5.svg';
import Jwt from '../../../public/jwt.svg';
import Mysql from '../../../public/mysql.svg';
import Nest from '../../../public/nest.svg';
import Next from '../../../public/nextjs.svg';
import Node from '../../../public/nodejs.png';
import Postgresql from '../../../public/postgresql.svg';
import Prisma from '../../../public/prisma.svg';
import ReactHookForm from '../../../public/reacthookform.svg';
import React from '../../../public/reactjs.svg';
import ReactQuery from '../../../public/reactquery.svg';
import Sqlite from '../../../public/sqlite.svg';
import Styled from '../../../public/styled.svg';
import Supabase from '../../../public/supabase.svg';
import Tailwind from '../../../public/tailwindcss.svg';
import Typescript from '../../../public/typescript.svg';
import Vercel from "../../../public/vercel.svg";
import Image from "next/image";

const reviews = [
    {
        name: "Css",
        username: "",
        body: "",
        img: Css,
    },
    {
        name: "Docker",
        username: "",
        body: "",
        img: Docker,
    },
    {
        name: "Framer Motion",
        username: "",
        body: "",
        img: FramerMotion,
    },
    {
        name: "Html",
        username: "",
        body: "",
        img: Html,
    },
    {
        name: "Jwt",
        username: "",
        body: "",
        img: Jwt,
    },
    {
        name: "Mysql",
        username: "",
        body: "",
        img: Mysql,
    },
    {
        name: "Nest",
        username: "",
        body: "",
        img: Nest,
    },
    {
        name: "Next",
        username: "",
        body: "",
        img: Next,
    },
    {
        name: "Node",
        username: "",
        body: "",
        img: Node,
    },
    {
        name: "PostgreSQL",
        username: "",
        body: "",
        img: Postgresql,
    },
    {
        name: "Prisma",
        username: "",
        body: "",
        img: Prisma,
    },
    {
        name: "React Hook Form",
        username: "",
        body: "",
        img: ReactHookForm,
    },
    {
        name: "React",
        username: "",
        body: "",
        img: React,
    },
    {
        name: "React Query",
        username: "",
        body: "",
        img: ReactQuery,
    },
    {
        name: "SQLite",
        username: "",
        body: "",
        img: Sqlite,
    },
    {
        name: "Styled Components",
        username: "",
        body: "",
        img: Styled,
    },
    {
        name: "Supabase",
        username: "",
        body: "",
        img: Supabase,
    },
    {
        name: "Tailwind CSS",
        username: "",
        body: "",
        img: Tailwind,
    },
    {
        name: "Typescript",
        username: "",
        body: "",
        img: Typescript,
    },
    {
        name: "Vercel",
        username: "",
        body: "",
        img: Vercel,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-52 cursor-pointer overflow-hidden rounded-xl border p-2",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
        </figure>
    );
};

const MarqueeDemo = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-10 md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
};

export default MarqueeDemo;
