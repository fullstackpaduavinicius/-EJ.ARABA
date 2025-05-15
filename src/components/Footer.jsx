import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          
          {/* Logo y Eslogan */}
          <div className="md:w-1/4">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-vibrant-green flex items-center justify-center text-white font-bold text-xl mr-3">
                EA
              </div>
              <span className="text-xl font-semibold">Ejaraba Pulimientos</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformando suelos con calidad profesional desde 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1AQZmdf9bD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/ej.arabapulimientos?igsh=bXI1NTZiZnVzM2I3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition">Trabajos</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">Sobre Nosotros</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contacto</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Presupuesto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-vibrant-green mt-1" />
                <span className="text-gray-300">Calle Sancho el Sabio 29, Vitoria-Gasteiz</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="text-vibrant-green mt-1" />
                <span className="text-gray-300">+34 603 373 293</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-vibrant-green mt-1" />
                <span className="text-gray-300">ej.arabapulidosymantenimientos@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Horario</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Lunes:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Martes:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Miércoles:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Jueves:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Viernes:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ejaraba Pulimientos. Todos los derechos reservados.
          </p>
          <p className="text-gray-300 text-sm">
            NIF: X12345678
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
