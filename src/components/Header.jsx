import React, { useState, useEffect } from 'react';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(isScrollingDown ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 bg-[#2E8BC0] shadow-md border-b border-[#A1E3D8] transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center">
            <img
              src="/midias/portifolio_marca.jpeg"
              alt="Logo da empresa"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="ml-3 text-xl font-semibold text-white">EJ.ARABA Especialistas en PULIDOS y ABRILLANTADOS DE SUELOS</span>
        </div>
      </div>
    </header>
  );
};

export default Header;