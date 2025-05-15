import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaHeadset } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    "Limpieza profunda de suelos",
    "Pulido de mármol/granito",
    "Hidrolimpieza",
    "Tratamiento de suelos de madera",
    "Limpieza post-obra",
    "Otro servicio"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsApp = () => {
    const message = `Hola, me gustaría solicitar un presupuesto!\n\n` +
                    `*Nombre:* ${formData.name}\n` +
                    `*Correo electrónico:* ${formData.email}\n` +
                    `*Teléfono:* ${formData.phone}\n` +
                    `*Servicio:* ${formData.service}\n` +
                    `*Mensaje:* ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+34123456789?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-[#cc9a86b]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contacta <span className="text-[#00f172a]">con nosotros</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulario */}
          <div className="lg:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-md border border-[#d1d5db]">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f172a]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f172a]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f172a]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Servicio solicitado *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f172a]"
                  required
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f172a]"
                  placeholder="Describa brevemente su necesidad..."
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="button"
                  onClick={sendWhatsApp}
                  className="flex-1 bg-[#2E8BC0] hover:bg-opacity-90 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Enviar por WhatsApp
                </button>
                <button 
                  type="button"
                  className="flex-1 bg-[#2E8BC0] hover:bg-opacity-90 text-white py-3 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <FaHeadset /> Hablar con atención al cliente
                </button>
              </div>
            </form>
          </div>

          {/* Información */}
          <div className="lg:w-1/2">
            <div className="bg-[#f9fafb] p-6 rounded-lg shadow-md h-full border border-gray-300">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Información de contacto</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#00f172a] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Dirección</h4>
                    <p className="text-gray-600">
                      Calle Sancho el Sabio 29<br/>
                      Vitoria-Gasteiz - Álava<br/>
                      Código postal 01008
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-[#00f172a] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+34 123 456 789<br/>+34 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#00f172a] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Correo electrónico</h4>
                    <p className="text-gray-600">ej.arabapulidosymantenimientos@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaClock className="text-[#00f172a] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8h a 18h<br/>
                      Sábado: 8h a 12h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <h4 className="font-medium text-gray-800 mb-3">Información legal</h4>
                <p className="text-gray-600">NIF: Y3918563K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;