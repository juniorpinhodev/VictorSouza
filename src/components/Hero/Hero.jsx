import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { FaArrowRight } from 'react-icons/fa';
import BgImageCasa from '../../assets/BgImage.jpg';
import VictorPng from '../../assets/Victor.png';
import ModalSobreVictor from '../../components/Modals/ModalSobreVictor'; 

const bgImage = {
    backgroundImage: `url(${BgImageCasa})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Hero = () => {
 const [modalOpen, setModalOpen] = useState(false);

  return (
    <main id="home" style={bgImage}>
        <div className='bg-gradient-to-r from-primary to bg-primaryDark/90'>
            <div className='container text-white'>
                {/* Layout para desktop (visível apenas em telas médias e grandes) */}
                <section className='hidden md:grid grid-cols-1 md:grid-cols-2 min-h-[800px]'>
                    {/* Texto - Ajustado para alinhar à esquerda */}
                    <div className='space-y-8 self-center justify-self-start'>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.4,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='space-y-8'
                        >
                            <h1 className='text-5xl lg:text-7xl font-bold leading-tight uppercase'>
                                Victor <br /> {" "}<span className='text-transparent text-outline'>Souza</span>
                            </h1>

                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 1000,
                                    followSpeed: 1.6,
                                    scale: 5,
                                    mixBlendMode: 'soft-light',
                                }}
                                >
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className='outline-btn flex justify-center items-center gap-2 group'
                                >
                                    Conheça
                                    <FaArrowRight className='group-hover:translate-x-2 transition' />
                                </button>
                            </UpdateFollower>

                        </motion.div>

                        {/* Investidor imobiliário */}
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.8,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]'
                        >
                            <h1 className='text-xl uppercase'>Investidor Imobiliário</h1>
                            <p className='text-xs leading-loose'>
                                Victor Souza é um investidor imobiliário especializado em leilões de casas. Com experiência no mercado, ele identifica excelentes oportunidades para investimento e revenda. Além disso, compartilha seu conhecimento, ensinando estratégias para quem deseja lucrar com leilões, desde a arrematação até a valorização e venda dos imóveis.
                            </p>
                        </motion.div>
                    </div>

                    {/* Imagem e círculo em um container para manter o posicionamento relativo */}
                    <div className='relative self-center'>
                        {/* Container para manter a imagem e o círculo juntos - Modificado para fixar posições relativas */}
                        <div className="relative flex justify-center items-center">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 1000,
                                    followSpeed: 1.6,
                                    scale: 5,
                                    mixBlendMode: 'soft-light',
                                }}
                            >
                                <div className="relative">
                                    <motion.img 
                                        initial={{ opacity: 0, x: 200 }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        src={VictorPng} 
                                        alt="Victor Souza" 
                                        className="w-full max-w-[360px] relative z-30 h-auto mx-auto"
                                        style={{
                                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 83%)',
                                            maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)'
                                        }} 
                                    />
                                    
                                    {/* Círculo com sombras - REPOSICIONADO mais à direita e mais abaixo - Visível apenas em desktop */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            type: 'spring',
                                            stiffness: 100,
                                            duration: 0.2,
                                            damping: 10,
                                            delay: 0.8,
                                        }}
                                        className='border-[20px] border-cyan-200 rounded-full absolute glowing-shadow glowing-shadow-inset z-10 w-[300px] h-[300px] top-[10px] left-[90px]' 
                                    />
                                </div>
                            </UpdateFollower>
                        </div>

                        {/* Texto de fundo */}
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.8,
                                damping: 10,
                                delay: 1.4,
                            }}
                            className='absolute -top-40 left-0 z-[1]'
                        >
                            <h1 className='text-[180px] font-bold text-cyan-200/10 leading-none'>Victor</h1>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: -110 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.8,
                                damping: 10,
                                delay: 1.6,
                            }}
                            className='absolute top-20 left-20 z-[1]'
                        >
                            <h1 className='text-[180px] font-bold text-cyan-200/10 leading-none'>Souza</h1>
                        </motion.div>
                    </div>
                </section>


                {/* -- Layout para mobile (visível apenas em telas pequenas) -- */}

                <section className='md:hidden grid grid-cols-1 min-h-[800px]'>
                    {/* Texto no topo esquerdo */}
                    <div className='pt-12 pl-2'>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.4,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='space-y-8'
                        >
                            <h1 className='text-4xl font-bold leading-tight uppercase'>
                                Victor <br /> {" "}<span className='text-transparent text-outline'>Souza</span>
                            </h1>

                            {/* Botão sem UpdateFollower para mobile */}
                            <button 
                                onClick={() => setModalOpen(true)}
                                className='outline-btn flex justify-center items-center gap-2 group w-[100px] px-6 py-2 text-[18px] font-semibold'
                            >
                                Conheça
                                <FaArrowRight className='group-hover:translate-x-2 transition'/>  
                            </button>
                        </motion.div>
                    </div>
                    
                    {/* Imagem no topo - Centralizada horizontalmente */}
                    <div className='relative mt-6 flex justify-center'>
                        <div className="relative">
                            <motion.img 
                                initial={{ opacity: 0, y: -230 }}
                                whileInView={{ opacity: 1, y: -150, x: 70, scale: 1 }}
                                transition={{ 
                                    type: 'spring',
                                    duration: 1.2,
                                    stiffness: 10,
                                    damping: 12
                                }}
                                src={VictorPng} 
                                alt="Victor Souza" 
                                className="max-w-[180px] xs:max-w-[200px] sm:max-w-[220px] w-auto h-auto relative z-30 object-contain"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 83%)',
                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)'
                                }} 
                            />
                            
                            {/* Círculo removido na versão mobile */}
                        </div>
                    </div>

                    {/* Texto de fundo - Centralizado horizontalmente */}
                    <div className="flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, x: 100, y: -400 }} 
                            transition={{ 
                                type: 'spring',
                                stiffness: 50,
                                duration: 0.8,
                                damping: 30,
                                delay: 1.4,
                            }}
                            className='relative z-[1]'
                        >
                            <h1 className='text-[50px] xs:text-[55px] sm:text-[60px] font-bold text-cyan-200/10 leading-none'>Victor</h1>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 0 }} 
                            whileInView={{ opacity: 1, x: 140, y: -400 }} 
                            transition={{ 
                                type: 'spring',
                                stiffness: 50,
                                duration: 0.8,
                                damping: 30,
                                delay: 1.8,
                            }}
                            className='relative z-[1]'
                        >
                            <h1 className='text-[60px] xs:text-[65px] sm:text-[70px] font-bold text-cyan-200/10 leading-none'>Souza</h1>
                        </motion.div>
                    </div>

                    {/* Investidor imobiliário abaixo do texto */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: -90, x: 0 }}
                        transition={{ 
                            type: 'spring',
                            delay: 1,
                            duration: 0.8,
                            stiffness: 100,
                            damping: 7,
                        }}
                        className='bg-black/40 p-6 space-y-2 ml-2'
                    >
                        <h1 className='text-xl uppercase'>Investidor Imobiliário</h1>
                        <p className='text-xs leading-loose'>
                            Victor Souza é um investidor imobiliário especializado em leilões de casas. Com experiência no mercado, ele identifica excelentes oportunidades para investimento e revenda. Além disso, compartilha seu conhecimento, ensinando estratégias para quem deseja lucrar com leilões, desde a arrematação até a valorização e venda dos imóveis.
                        </p>
                    </motion.div>
                </section>
            </div>
        </div>
        <ModalSobreVictor isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Hero;