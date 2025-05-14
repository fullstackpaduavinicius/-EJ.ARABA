import React from 'react';
import { FaCheckCircle, FaBuilding, FaHome, FaSchool, FaHotel, FaStore } from 'react-icons/fa';
import { GiStonePath, GiCutDiamond } from 'react-icons/gi';

const AboutSection = () => {
  return (
    <section id="about-services" className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            <span className="text-[#1E3A8A]">EJ.ARABA</span> – Expertos en Suelos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Con <span className="font-semibold text-[#1E3A8A]">25 años de experiencia</span>, devolvemos el brillo y la vida a tus suelos con tecnología y excelencia.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Tipos de Pisos */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#d1d5db]">
            <div className="flex items-center mb-6">
              <GiStonePath className="text-3xl text-[#1E3A8A] mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Tipos de Suelos</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Terrazo', 'Mármol', 'Granito', 'Hormigón', 'Hidráulico', 'Barro', 'Mosaico'].map((item, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#1E3A8A] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tratamientos */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#d1d5db]">
            <div className="flex items-center mb-6">
              <GiCutDiamond className="text-3xl text-[#1E3A8A] mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Tratamientos Especializados</h3>
            </div>
            <div className="space-y-3">
              {['Fachadas', 'Antigrafiti', 'Sellado de poros', 'Restauración completa'].map((item, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#1E3A8A] mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Área de Actuación */}
        <div className="bg-[#DBEAFE] p-8 rounded-xl mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Atendemos en todo el País Vasco</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Servicios disponibles en todas las comunidades autónomas, con equipos locales preparados para atender tus necesidades.
          </p>
        </div>

        {/* Segmentos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Sectores que Atendemos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { icon: <FaHome className="text-3xl text-black" />, label: 'Residencias' },
              { icon: <FaStore className="text-3xl text-black" />, label: 'Comercios' },
              { icon: <FaBuilding className="text-3xl text-black" />, label: 'Comunidades' },
              { icon: <FaSchool className="text-3xl text-black" />, label: 'Colegios' },
              { icon: <FaHotel className="text-3xl text-black" />, label: 'Hoteles' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition">
                <div className="mb-2 flex justify-center">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tecnología */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-[#d1d5db]">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Nuestra Tecnología</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Utilizamos <span className="font-semibold text-[#1E3A8A]">productos innovadores</span> que proporcionan un acabado excepcional y duradero.
              </p>
              <p className="text-gray-700">
                Nuestros procesos combinan <span className="font-semibold">técnicas tradicionales</span> con <span className="font-semibold">tecnología moderna</span> para resultados que superan expectativas.
              </p>
            </div>
            <div className="bg-[#f9fafb] p-6 rounded-lg border border-[#d1d5db]">
              <ul className="space-y-3">
                {[
                  'Equipos de última generación',
                  'Productos ecológicos',
                  'Técnicas comprobadas',
                  'Garantía de satisfacción'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#1E3A8A] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
