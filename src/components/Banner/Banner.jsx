import React from 'react';
import House from '../../assets/house.png';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { FaWhatsapp } from 'react-icons/fa'; // Importe o ícone do WhatsApp

const Banner = () => {
  // WhatsApp número - substitua pelo seu número real
  const whatsappNumber = "5547999287305";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre investimentos em leilões de imóveis.";
  
  const handleWhatsappClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // Variantes para o botão
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 6px 15px rgba(43, 157, 230, 0.4)",
    },
    tap: {
      scale: 0.95,
    }
  };

  return (
    <section>
      <div className="container py-6">
        <div className="flex flex-row items-center gap-12">
          {/* Banner house img */}
          <div>
            <motion.img 
            initial={{ opacity: 0, x: -100,}}
            whileInView={{ opacity: 1, x: 0, rotate: 0}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
            src={House} alt="House" className="w-[300px] md:w-[400px]" 
            />
          </div>

          {/* Banner text */}
          <div className="flex-1">
            <div className="text-left space-y-4">
              <motion.h1 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                  type: 'spring',
                  delay: 0.8,
                  duration: 0.8,
                  stiffness: 20,
                  damping: 6,
              }}
              className="text-3xl lg:text-4xl font-semibold font-poppins">
                Transforme Leilões em Oportunidades de Investimento
              </motion.h1>
              <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                  type: 'spring',
                  delay: 0.8,
                  duration: 0.8,
                  stiffness: 20,
                  damping: 6,
              }}
              >
                Descubra como investir de forma inteligente e segura em imóveis através de leilões. Com nossa expertise, você terá acesso a propriedades com alto potencial de valorização, suporte completo em todo o processo e estratégias comprovadas para maximizar seus resultados no mercado imobiliário.
              </motion.p>
             
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 1000,
                  followSpeed: 1.6,
                  scale: 5,
                  mixBlendMode: 'soft-light',
                }}
              >
                  <motion.button 
                    onClick={handleWhatsappClick}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                    className="flex items-center space-x-2 font-varela border-2 border-[#2b9de6] bg-transparent text-[#2b9de6] px-6 py-2 rounded-md hover:bg-[#2b9de6] hover:text-white transition-colors shadow-md"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaWhatsapp size={20} />
                    </motion.div>
                    <span>Fale Comigo</span>
                  </motion.button>

              </UpdateFollower>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;