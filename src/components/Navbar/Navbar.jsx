import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { UpdateFollower } from 'react-mouse-follower';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '#'
  },
  {
    id: 2,
    title: 'Serviços',
    url: '#service'
  },
  {
    id: 3,
    title: 'Blogs',
    url: '#blogs'
  },
  {
    id: 4,
    title: 'Contatos',
    url: '#contact'
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Detectar se é dispositivo móvel ao carregar o componente
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Detectar o scroll para aplicar efeitos no navbar fixo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variantes para animação dos itens do menu
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Variantes para animação do container do menu
  const menuContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 bg-brandDark text-white ${isScrolled ? 'shadow-lg py-4' : 'py-8'} transition-all duration-300 font-varela`}>
        <motion.nav 
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}  
          className='container flex justify-between items-center'
        >    
          {/* Logo section */}
          <div>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: 'white',
                zIndex: 1000,
                followSpeed: 1.6,
                scale: 5,
                mixBlendMode: 'difference',
              }}
            >
              <a href='#' className='text-xl font-bold uppercase'>
                Victor |{" "}<span className='font-extralight text-white/70'>Souza</span>
              </a>
            </UpdateFollower>
          </div>

          {/* Menu section - Desktop */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: 'white',
                      zIndex: 1000,
                      followSpeed: 1.6,
                      scale: 5,
                      mixBlendMode: 'difference',
                    }}
                  >
                    <a href={item.url} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
                  </UpdateFollower>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger section */}
          <div className='md:hidden'>
            {isMobile ? (
              <button 
                onClick={toggleMenu} 
                className='focus:outline-none p-2 z-50 relative' 
                aria-label='Menu'
                style={{ touchAction: 'manipulation' }}
              >
                {isMenuOpen ? (
                  <MdClose className='text-4xl' />
                ) : (
                  <MdMenu className='text-4xl' />
                )}
              </button>
            ) : (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 1000,
                  followSpeed: 1.6,
                  scale: 5,
                  mixBlendMode: 'difference',
                }}
              >
                <button 
                  onClick={toggleMenu} 
                  className='focus:outline-none' 
                  aria-label='Menu'
                >
                  {isMenuOpen ? (
                    <MdClose className='text-4xl' />
                  ) : (
                    <MdMenu className='text-4xl' />
                  )}
                </button>
              </UpdateFollower>
            )}
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuContainerVariants}
              className="md:hidden container"
            >
              <motion.ul className='flex flex-col py-4 border-t border-white/10 mt-4'>
                {NavbarMenu.map((item, i) => (
                  <motion.li 
                    key={item.id}
                    custom={i}
                    variants={menuItemVariants}
                    className='py-2'
                  >
                    <a 
                      href={item.url} 
                      className='block text-lg py-2 px-1 uppercase hover:pl-3 hover:text-white/70 transition-all duration-300'
                      onClick={toggleMenu}
                      style={{ touchAction: 'manipulation' }}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Espaçador para compensar o navbar fixo */}
      <div className={`${isScrolled ? 'h-16' : 'h-24'} transition-all duration-300`}></div>
    </>
  );
};

export default Navbar;