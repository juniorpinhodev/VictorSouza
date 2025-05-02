import React from 'react';
import { motion } from 'framer-motion';

const ModalSobreVictor = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="bg-white text-black rounded-2xl p-6 max-w-lg w-[90%] shadow-lg relative"
      >
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-red-600">
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Sobre Victor Souza</h2>
        <p className="text-sm leading-relaxed">
          Victor Souza é um investidor imobiliário com ampla experiência em leilões de imóveis. Seu foco é transformar oportunidades em negócios lucrativos, comprando casas abaixo do valor de mercado e revendendo com valorização. Além de atuar ativamente, Victor compartilha seu conhecimento para formar novos investidores preparados e estratégicos.
        </p>
      </motion.div>
    </div>
  );
};

export default ModalSobreVictor;
