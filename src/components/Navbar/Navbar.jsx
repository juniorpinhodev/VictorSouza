import React from 'react';
import { MdMenu } from 'react-icons/md';
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '#'
  },
  {
    id: 2,
    title: 'Sobre',
    url: '#sobre'
  },
  {
    id: 3,
    title: 'Serviços',
    url: '#service'
  },
  {
    id: 4,
    title: 'Contatos',
    url: '#contact'
  }
]

const Navbar = () => {
  return (
    <>
    <div className='bg-brandDark text-white py-8 font-varela'>
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

    {/* Menu section */}
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
      <MdMenu className='text-4xl'/>
    </div>
  </motion.nav>
  </div>
  </>
  );
};

export default Navbar;