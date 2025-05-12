import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ModalSobreVictor = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {

      document.body.style.overflow = 'hidden';
      
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md overflow-y-auto py-4">
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        className="bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-2xl p-6 sm:p-8 w-[95%] sm:w-[90%] max-w-2xl max-h-[90vh] shadow-2xl relative overflow-y-auto border border-gray-100"
        tabIndex={-1}
      >
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-100/30 blur-xl"></div>
        
        <div className="sticky top-0 z-10 bg-gradient-to-br from-white to-gray-50 pb-2">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"></div>
          
          <div className="flex justify-between items-center pt-2 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent pr-8">
              Quem é Victor Souza
            </h2>
            
            <motion.button 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors duration-300 flex-shrink-0"
              aria-label="Fechar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-sm font-medium mb-2 border-b border-gray-100 pb-4">
            Especialista em Investimentos Imobiliários
          </p>
        </div>
        
        {/* Content */}
        <div className="text-gray-700 leading-relaxed space-y-4 font-light text-sm sm:text-base">
          <p className="first-letter:text-lg first-letter:font-medium">
            Victor Souza é um investidor imobiliário especializado em leilões judiciais e extrajudiciais, 
            com foco na aquisição estratégica de imóveis com alto potencial de valorização. Sua experiência 
            no mercado financeiro é diversificada, tendo atuado anteriormente com diferentes modalidades de 
            investimentos, incluindo ações, forex, commodities e criptoativos. Insatisfeito com a falta de controle nesses mercados, 
            Victor direcionou seu interesse para o setor imobiliário.
          </p>
          
          <p>
            Atuando de forma prática e direta no mercado, Victor se destaca por transformar propriedades 
            subvalorizadas em ativos lucrativos, combinando conhecimento técnico com experiência de campo. 
            Com expertise em leilões administrativos e judiciais, ele desenvolveu um método próprio que alia 
            análise jurídica minuciosa, avaliação de mercado e execução eficiente de reformas.
          </p>
          
          <p>
            O diferencial de Victor está em sua abordagem <span className="italic">hands-on</span>: ele realiza pesquisas detalhadas antes 
            das arrematações e executa pessoalmente grande parte das melhorias nos imóveis, o que reduz 
            significativamente os custos operacionais e maximiza a rentabilidade dos investimentos.
          </p>
          
          <p>
            Além de suas atividades como investidor, Victor compartilha seu conhecimento e experiências com clareza 
            e objetividade, ensinando estratégias que vão desde a pesquisa e identificação de oportunidades até os 
            aspectos legais e práticos da valorização e venda. Seu trabalho é voltado para pessoas que desejam mais 
            controle sobre seus investimentos e enxergam no mercado de leilões uma alternativa sólida, segura e lucrativa.
          </p>
        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-4 border-t border-gray-100"
        >
          <div className="text-gray-500 text-xs sm:text-sm flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 flex-shrink-0 mt-0.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="flex-1">
              Para mais conteúdos sobre investimentos em leilões imobiliários, estratégias de arrematação e dicas de 
              reforma e valorização, acesse o canal de Victor Souza no <a href="https://www.youtube.com/@leilaoemfamilia" target="_blank" rel="noopener noreferrer" className="text-red-900 font-medium hover:underline">YouTube</a> e siga suas redes sociais.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModalSobreVictor;