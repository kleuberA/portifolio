import ProfileImage from '../../../public/profileImage.png';
import Background from '../../../public/background.jpg';
import { SparklesCore } from '../sparkles';
import Image from 'next/image';
import { ListStack } from '../ListStack';

export default function About() {

    const listStack = ListStack;
    console.log(listStack)

    return (
        <section className="w-full h-screen">
            <Image src={Background} alt={''} className='w-full h-full absolute -z-10' />
            <div className="h-full w-full flex flex-col items-center justify-start overflow-hidden">
                <h1 className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
                    About
                </h1>
                <div className="w-[40rem] h-11 relative">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                    <div className="absolute inset-0 w-full h-[10rem]  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <div className='w-full h-full flex flex-row'>
                    <div className='w-1/2 h-full flex flex-col gap-4 justify-start items-center p-3'>
                        <div className='flex flex-row gap-3 items-center w-[70%]'>
                            <Image src={ProfileImage} alt={'Image of profile'} width={100} height={100} className='rounded-sm' />
                            <div>
                                <h1 className='text-xl tracking-widest'>Kleuber Aguiar da Silva</h1>
                                <span className='text-sm text-accent-foreground/50'>Full Stack Developer</span>
                            </div>
                        </div>
                        <div className='w-[70%] flex flex-col text-justify text-sm tracking-wider gap-2'>
                            <span className='text-justify'> Sou o Kleuber Aguiar da Silva,
                                um desenvolvedor full stack dedicado a materializar ideias inovadoras.
                                Possuo proficiência em linguagens como JavaScript, typescript, assim
                                como em frameworks renomados, a exemplo de React, Node.js e NextJs.
                            </span>
                            <span>
                                Minha abordagem abrangente no desenvolvimento de
                                software é evidenciada por um portfólio repleto de projetos que harmonizam
                                funcionalidade e estética, destacando minha habilidade em colaborar eficazmente
                                em todas as fases do ciclo de desenvolvimento.
                            </span>
                            <span>
                                Além do código, defendo fervorosamente a colaboração eficiente e a
                                comunicação transparente como pilares essenciais para o sucesso.
                            </span>
                            <span>
                                Estou preparado para abraçar novos desafios e entusiasmado para
                                forjar colaborações visando criar algo verdadeiramente extraordinário.
                                Juntos, vamos concretizar ideias em realidade!
                            </span>
                        </div>
                    </div>
                    <div className='w-1/2 p-2 z-20 h-full'>
                        <h1 className='text-2xl tracking-wider font-bold pb-2'>My Stack</h1>
                        <div className='flex flex-row flex-wrap gap-5 '>
                            {listStack.map((stack, index) => {
                                return (
                                    <div key={index} className='flex flex-row flex-wrap'>
                                        <div className='flex flex-row flex-wrap gap-3'>
                                            {stack.stack.map((item, index) => {
                                                return (
                                                    <div key={index} className='w-32 flex flex-col bg-background border border-border items-center justify-center text-sm group gap-2 rounded-sm'>
                                                        <div className='p-2'>
                                                            <Image src={item.icon} alt={item.name} width={50} height={50} className='group-hover:scale-125 transition-all duration-300' />
                                                        </div>
                                                        <div className='w-full relative bg-border h-full text-center py-2 flex justify-center items-center'>
                                                            <span className='z-20'>{item.name}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}