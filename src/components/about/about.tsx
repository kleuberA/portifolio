import Illustration from '../../../public/illustration.gif';
import Image from 'next/image';

export default function ContainerAbout() {

    return (
        <section className="w-full min-h-[calc(100dvh_-_4rem)]">
            <div className="h-full w-full flex flex-col items-center justify-start overflow-hidden">
                <div className='w-full h-[80dvh] flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 h-full flex flex-col gap-4 justify-center items-center p-3'>
                        <div className='w-[80%] lg:w-[70%] flex flex-col text-justify text-xs lg:text-sm tracking-wider gap-2'>
                            <h1 className="bg-clip-text text-transparent bg-gradient-to-r font-extrabold text-2xl from-emerald-700 to-emerald-500">
                                Conheça mais sobre mim
                            </h1>
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
                    <div className='w-[80%] lg:w-1/2 p-2 z-20 h-full flex items-center'>
                        <Image src={Illustration} alt={""} width={450} height={450} />
                    </div>
                </div>
            </div>
        </section>
    )
}