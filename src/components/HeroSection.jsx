import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F0F4F8] min-h-[80vh] flex items-center">
      {/* Vídeo ou Imagem de Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-[#2E8BC0] w-full h-full opacity-10"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Marca da Empresa */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full p-4 shadow-xl border-4 border-[#A1E3D8]">
              <img 
                src="/midias/portifolio_marca.jpeg" 
                alt="Marca EJ.ARABA" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Texto e CTA */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Calidad, elegancia y <span className="text-[#2E8BC0]">profesionalidad</span> en cada detalle
            </h1>
            <p className="text-lg text-[#2C3E50] mb-8 max-w-2xl mx-auto lg:mx-0">
              Especialistas en pulido y mantenimiento de suelos con 25 años de experiencia en el País Vasco.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-[#F4D35E] hover:bg-[#e8c751] text-[#2C3E50] px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition shadow-md"
              >
                <FaPhoneAlt /> Solicitar Presupuesto
              </a>
              <a 
                href="https://wa.me/+34603373293" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#F0F4F8] text-[#2E8BC0] px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition border-2 border-[#A1E3D8] shadow-md"
              >
                <FaWhatsapp /> Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;