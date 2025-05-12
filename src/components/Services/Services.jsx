import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import icon1 from '/src/assets/icon1.png';
import icon2 from '/src/assets/icon2.png';
import icon3 from '/src/assets/icon3.png';
import { UpdateFollower } from 'react-mouse-follower';

const ServicesData = [
    {
        id: 1,
        title: 'Leilões de Imóveis',
        link: "/service1",    
        desc: 'Identificação e análise de oportunidades premium em leilões judiciais e extrajudiciais, com foco em imóveis de alta liquidez e potencial de valorização.',
        icon: icon1,
        delay: 0.1,
    },
    {
        id: 2,
        title: 'Investimentos Imobiliários',
        link: "/service2",   
        desc: 'Estratégias personalizadas para maximizar seu retorno em imóveis arrematados. Análise de mercado, planejamento de reforma e estratégias de revenda.',
        icon: icon2,
        delay: 0.6,
    },
    {
        id: 3,
        title: 'Consultoria Especializada',
        link: "/service3",   
        desc: 'Mentoria exclusiva para investidores iniciantes e experientes no mercado de leilões. Aprenda a identificar boas oportunidades e evitar armadilhas comuns.',
        icon: icon3,
        delay: 1.2,
    },
];

const Services = () => {
    // Estado para controlar se estamos em dispositivo móvel
    const [isMobile, setIsMobile] = useState(false);

    // Função para verificar o tamanho da tela e atualizar o estado
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Considera mobile se a largura for <= 768px
        };

        // Verificar inicialmente
        checkIsMobile();

        // Adicionar event listener para redimensionamento
        window.addEventListener('resize', checkIsMobile);

        // Cleanup do event listener
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Componente de serviço com ou sem UpdateFollower dependendo do dispositivo
    const ServiceItem = ({ service }) => {
        const serviceContent = (
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                    type: 'spring',
                    delay: service.delay,
                    duration: 0.8,
                    stiffness: 100,
                    damping: 7,
                }}
                whileHover={!isMobile ? { 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                } : {}}
                className="flex flex-col items-center justify-center p-5 max-w-[440px] mx-auto shadow-lg rounded-xl bg-white min-h-0 md:min-h-[368px] xl:min-h-0"
            >
                <img 
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-[100px] mb-4"
                />
                <div className='text-center space-y-2'>
                    <h2 className="text-2xl font-bold">
                        {service.title}
                    </h2>
                    <p className='text-center text-sm text-black/75'>
                        {service.desc}
                    </p>
                </div>
                <a 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                    Saiba mais →
                </a>
            </motion.div>
        );

        // Retornar com ou sem UpdateFollower dependendo se é mobile ou não
        return isMobile ? (
            serviceContent
        ) : (
            <UpdateFollower
                mouseOptions={{
                    backgroundColor: 'white',
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 5,
                    rotate: 720,
                    mixBlendMode: 'darken',
                    backgroundElement: (
                        <div>
                            <img src={service.icon} alt="" />
                        </div>
                    ),
                }}
            >
                {serviceContent}
            </UpdateFollower>
        );
    };

    return (
        <section id="service" className="bg-gray-100 font-poppins py-8">
            <div className="container py-14">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className="text-3xl font-bold text-center text-gray-900 pb-10"
                >
                    Serviços
                </motion.h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {ServicesData.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;