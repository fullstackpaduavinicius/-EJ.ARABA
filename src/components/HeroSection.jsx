import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F0F4F8] min-h-[90vh] md:min-h-[80vh] flex items-center pt-28 md:pt-0">
      {/* Fundo com cor sólida */}
      <div className="absolute inset-0 bg-[#2E8BC0] opacity-10 z-0"></div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Marca da Empresa - Agora primeiro em ambas as versões */}
          <div className="lg:w-1/3 flex justify-center order-1">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white rounded-full p-4 shadow-xl border-4 border-[#A1E3D8]">
              <img 
                src="/midias/portifolio_marca.jpeg" 
                alt="Marca EJ.ARABA" 
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto e CTA - Agora segundo em ambas as versões */}
          <div className="lg:w-2/3 text-center lg:text-left order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4 md:mb-6">
              Calidad, elegancia y <span className="text-[#2E8BC0]">profesionalidad</span> en cada detalle
            </h1>
            <p className="text-base sm:text-lg text-[#2C3E50] mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Especialistas en pulido y mantenimiento de suelos con 25 años de experiencia en el País Vasco.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <a 
                href="#contact" 
                className="bg-[#F4D35E] hover:bg-[#e8c751] text-[#2C3E50] px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition shadow-md"
              >
                <FaPhoneAlt /> Solicitar Presupuesto
              </a>
              <a 
                href="https://wa.me/+34603373293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#F0F4F8] text-[#2E8BC0] px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition border-2 border-[#A1E3D8] shadow-md"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;