import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const BlogNavbarMenu = [
  {
    id: 1,
    title: 'Voltar',
    url: '/#'
  }
];


// Componente para renderizar diferentes tipos de conteúdo
const ContentRenderer = ({ item }) => {
  // Se o item começa com "- ", renderiza como um item de lista
  if (typeof item === 'string' && item.startsWith('- ')) {
    return (
      <div className="flex items-start py-1">
        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
        <span>{item.substring(2)}</span>
      </div>
    );
  }
  
  // Se o item começa com "## ", renderiza como um subtítulo
  if (typeof item === 'string' && item.startsWith('## ')) {
    return (
      <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        {item.substring(3)}
      </h3>
    );
  }
  
  // Se o item começa com "**", renderiza como texto em destaque
  if (typeof item === 'string' && item.startsWith('**') && item.endsWith('**')) {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
        <p className="font-medium text-blue-900">
          {item.substring(2, item.length - 2)}
        </p>
      </div>
    );
  }
  
  // Renderização padrão para parágrafos
  return <p className="mb-4">{item}</p>;
};

const ServicePage = ({ title, subtitle, content }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5547999287305';
    const message = `Olá! Vi o serviço "${title}" no seu site e gostaria de mais informações.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; 
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <Navbar customMenu={BlogNavbarMenu} />
      
      <section className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 font-poppins">{title}</h1>
          <h2 className="text-xl mb-8 text-gray-600 font-light">{subtitle}</h2>
          
          <div className="text-gray-800 space-y-4 text-lg">
            {content.map((item, i) => (
              <ContentRenderer key={i} item={item} />
            ))}
          </div>
          
          <div className="mt-10 border-t pt-6 flex flex-wrap gap-4">
            {/* Botão de voltar */}
            <Link
              to="/"
              className="inline-block px-6 py-3 text-sm font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition shadow-sm"
            >
              ← Voltar para a página
            </Link>
            
            {/* Botão do WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition shadow-sm"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              Falar no WhatsApp
            </button>
          </div> 
        </div>
      </section>
      
      
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Entre em contato!</h2>
      <p className="mb-4">Estou pronto para ajudar você a alcançar os melhores resultados.</p>
      <button
        onClick={handleWhatsAppClick}
        className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition shadow-sm"
      >
        <FaWhatsapp className="mr-2 text-lg" />
        Enviar mensagem no WhatsApp
      </button>
      
        {/* <!-- copyright --> */}
        <p className="text-white text-center mt-8 border-t-2 pt-8">© 2025 Victor Souza — Todos os direitos reservados</p>
        <p className="text-center">Desenvolvido por <a href="https://juniorpinho.dev" target="_blank" > Junior Pinho | DEV</a></p>
    </div>
  </footer>
      );
    </>
  );
};

export default ServicePage;