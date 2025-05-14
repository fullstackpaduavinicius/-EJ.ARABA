import React from 'react';
import { FaBroom, FaWater, FaShieldAlt, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: <FaBroom className="text-black text-3xl" />,
    title: "Limpieza Profunda",
    description: "Eliminación completa de suciedad incrustada y residuos"
  },
  {
    icon: <FaWater className="text-black text-3xl" />,
    title: "Hidrolimpieza",
    description: "Técnica con alta presión para suelos exteriores"
  },
  {
    icon: <FaShieldAlt className="text-black text-3xl" />,
    title: "Protección y Sellado",
    description: "Aplicación de productos para mayor durabilidad"
  },
  {
    icon: <FaClock className="text-black text-3xl" />,
    title: "Mantenimiento Periódico",
    description: "Programas de limpieza regular para empresas"
  }
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-16 bg-[#F0F4F8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50]">
          Nuestros <span className="text-[#2E8BC0]">Servicios</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center border border-[#E0E6ED]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">{service.title}</h3>
              <p className="text-[#4A5A6A]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;