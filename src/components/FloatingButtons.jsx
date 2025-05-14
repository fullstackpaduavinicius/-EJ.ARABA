import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Botão WhatsApp */}
      <a 
        href="https://wa.me/+34603373293" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] p-4 rounded-full shadow-2xl hover:brightness-110 transition-all duration-300 animate-pulse"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} color="white" />
        <span className="absolute right-full mr-3 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Fale conosco
        </span>
      </a>

      {/* Botão Facebook */}
      <a 
        href="https://www.facebook.com/profile.php?id=61575281050740&mibextid=wwXIfr&rdid=lIbtbR3h94Ebtdp1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AQZmdf9bD%2F%3Fmibextid%3DwwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative bg-[#3b5998] p-4 rounded-full shadow-2xl hover:brightness-110 transition-all duration-300 animate-pulse delay-100"
        aria-label="Facebook"
      >
        <FaFacebook size={28} color="white" />
        <span className="absolute right-full mr-3 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Curta nossa página
        </span>
      </a>

      {/* Botão Instagram */}
      <a 
        href="https://www.instagram.com/ej.arabapulimientos?igsh=bXI1NTZiZnVzM2I3&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative bg-[#C13584] p-4 rounded-full shadow-2xl hover:brightness-110 transition-all duration-300 animate-pulse delay-200"
        aria-label="Instagram"
      >
        <FaInstagram size={28} color="white" />
        <span className="absolute right-full mr-3 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Siga-nos
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;