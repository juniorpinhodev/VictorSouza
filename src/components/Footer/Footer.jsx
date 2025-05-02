import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://wa.me/5547999287305", icon: <FaWhatsapp /> },
    { href: "https://www.youtube.com/@leilaoemfamilia", icon: <FaYoutube /> },
    { href: "https://www.linkedin.com/in/victor-luis-nunes-de-souza-03a843bb/", icon: <FaLinkedin /> },
    { href: "https://www.facebook.com/profile.php?id=100070768329431", icon: <FaFacebook /> },
    { href: "https://www.instagram.com/vict0rs0uza/", icon: <FaInstagram /> },
    { href: "https://www.tiktok.com/@leilaoemfamilia", icon: <FaTiktok /> },
];

const Footer = () => {
  return (
    <>
    <footer id="contact" className="bg-primaryDark/80 pt-12 pb-8 text-white">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* <!-- detalhes --> */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-3xl font-bold uppercase">Contatos</h1>
                <p className="mt-4">Entre em contato e vamos construir novas oportunidades juntos.
                </p>
                <div>
                    <p className="flex items-center gap-2">
                        <FaPhone />
                        <span>+55 47 99928-7305</span>
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        {" "}
                        <FaMapLocation />
                        <span>Itajaí - SC</span>

                    </p>
                </div>
            </motion.div>
            {/* <!-- links --> */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-6 text-center"> 
                <h1 className="text-3xl font-bold"> Menu</h1>
                <div className="flex justify-center">
                    <ul className="flex flex-col items-center gap-1">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#sobre" className="hover:underline">Sobre</a></li>
                        <li><a href="#service" className="hover:underline">Serviços</a></li>
                        <li><a href="#blogs" className="hover:underline">Blogs</a></li>
                    </ul>
                </div>
            </motion.div>

            {/* <!-- redes sociais --> */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-6"
            >
                <h1 className="text-3xl font-bold">Siga-me</h1>
                <div className="flex items-center gap-3 mt-4">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:scale-105 duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </motion.div>        
            </div>
             {/* <!-- copyright --> */}
            
             <p className="text-white text-center mt-8 border-t-2 pt-8">© 2025 Victor Souza — Todos os direitos reservados</p>
             <p className="text-center">Desenvolvido por <a href="https://juniorpinho.dev" target="_blank" > Junior Pinho | DEV</a></p>
        </div>
    </footer>
  </>
  )
    
};

export default Footer;