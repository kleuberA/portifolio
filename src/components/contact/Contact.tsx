"use client"
import { ArrowRightIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import Background from '../../../public/snow.jpg';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {

    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [envEmail, setEnvEmail] = useState<boolean>(false);
    const [envName, setEnvName] = useState<boolean>(false);
    const [envMessage, setEnvMessage] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

    function handleSubmitEmail(event: React.KeyboardEvent<HTMLInputElement>) {
        event.preventDefault();
        setEmail(event.currentTarget.value);
        setEnvEmail(true);
    }

    function handleSubmitName(event: React.KeyboardEvent<HTMLInputElement>) {
        event.preventDefault();
        setName(event.currentTarget.value);
        setEnvName(true);
    }

    function handleSubmitMessage(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        setMessage(event.currentTarget.value);
        setEnvMessage(true);
    }

    function handleSubmit() { }

    return (
        <section className="w-full flex justify-center items-center h-screen">
            <Image src={Background} alt={''} className='w-full h-full absolute -z-10' />
            <div className="w-[60dvw] h-[60dvh] rounded-sm mx-auto flex flex-col">
                <div className="w-full bg-[#0f172a] h-10 rounded-t-sm p-1 flex flex-row items-center">
                    <div className="flex flex-row gap-2 pl-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <h1 className="text-center w-full text-sm font-medium text-accent-foreground">contact@dev.br</h1>
                </div>
                <div className='w-full h-full bg-[#0f172a] p-2 rounded-b-sm bg-opacity-40 backdrop-filter backdrop-blur-md'>
                    <div className='flex flex-col gap-1 w-full h-full transition-all duration-200'>
                        <h1 className='tracking-wider'>Contact Me!</h1>
                        <span> ------------------------------------------------------------- </span>
                        <form
                            action="https://formsubmit.co/kleuber20@hotmail.com"
                            method="POST" >
                            {!envEmail && (
                                <div className='flex flex-row items-center gap-2'>
                                    <ArrowRightIcon className='text-primary' width={25} height={25} />
                                    <span className='text-sky-700 font-bold text-2xl'>~</span>
                                    <span className='text-accent-foreground/50'>Enter Email:  </span>
                                    <input
                                        type='email'
                                        className='w-1/2 h-8 bg-transparent focus:outline-none'
                                        onKeyDown={(event) => { if (event.key === 'Enter') { handleSubmitEmail(event) } }}
                                    />
                                </div>
                            )}
                            {envEmail && (
                                <div className='flex flex-row items-center gap-2'>
                                    <CheckCircledIcon className='text-primary' width={25} height={25} />
                                    <span className='text-primary font-bold text-lg'>Email added!</span>
                                </div>
                            )}
                            {envEmail && !envName && (
                                <div className='flex flex-row items-center gap-2'>
                                    <ArrowRightIcon className='text-primary' width={25} height={25} />
                                    <span className='text-sky-700 font-bold text-2xl'>~</span>
                                    <span className='text-accent-foreground/50'>Enter Name:  </span>
                                    <input
                                        type='text'
                                        className='w-1/2 h-8 bg-transparent focus:outline-none'
                                        onKeyDown={(event) => { if (event.key === 'Enter') { handleSubmitName(event) } }}
                                    />
                                </div>
                            )}
                            {envName && (
                                <div className='flex flex-row items-center gap-2'>
                                    <CheckCircledIcon className='text-primary' width={25} height={25} />
                                    <span className='text-primary font-bold text-lg'>Name added!</span>
                                </div>
                            )}
                            {envName && !envMessage && (
                                <div className='flex flex-row items-center gap-2'>
                                    <ArrowRightIcon className='text-primary' width={25} height={25} />
                                    <span className='text-sky-700 font-bold text-2xl'>~</span>
                                    <span className='text-accent-foreground/50'>Enter Message:  </span>
                                    <textarea
                                        className='w-1/2 h-8 bg-transparent focus:outline-none resize-none'
                                        onKeyDown={(event) => { if (event.key === 'Enter') { handleSubmitMessage(event) } }}
                                    />
                                </div>
                            )}
                            {envMessage && (
                                <div className='flex flex-row items-center gap-2'>
                                    <CheckCircledIcon className='text-primary' width={25} height={25} />
                                    <span className='text-primary font-bold text-lg'>Message added!</span>
                                </div>
                            )}
                            {envEmail && envName && envMessage && (
                                <div className='flex flex-col gap-1'>
                                    <div className='flex flex-col'>
                                        <h1>Email: {email}</h1>
                                        <h1>Name: {name}</h1>
                                        <h1>Message: {message}</h1>
                                    </div>
                                    <div>
                                        <a href={`mailto:kleuber20@hotmail.com?subject=Contato Proposta&body=${message}`}>Enviar email</a>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}