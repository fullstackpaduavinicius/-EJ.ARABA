import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2E8BC0] shadow-md border-b border-[#A1E3D8]">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
            <img
              src="/midias/portifolio_marca.jpeg"
              alt="Logo da empresa"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="ml-3 text-xl font-semibold text-white">EJ.ARABA limpieza profesional</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
