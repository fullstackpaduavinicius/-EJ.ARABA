import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaRandom } from 'react-icons/fa';

const BeforeAfterGame = () => {
  // Dados dos trabalhos realizados (substitua pelas suas imagens)
  const portfolioItems = [
    {
      id: 1,
      before: '/midias/antes1.jpeg',
      after: '/midias//depois1.jpeg',
      description: 'Tratamiento de barro cocido'
    },
    {
      id: 2,
      before: '/midias/antes2.jpeg',
      after: '/midias//depois2.jpeg',
      description: 'Pulido y abrillantado de mármol blanc'
    },
    {
      id: 3,
      before: '/midias/antes3.jpeg',
      after: '/midias//depois3.jpeg',
      description: 'Tratamiento con resina'
    },
    {
      id: 4,
      before: '/midias/antes4.jpeg',
      after: '/midias//depois4.jpeg',
      description: 'Pulido y abrillantado de suelo hidráulico '
    },
    {
      id: 5,
      before: '/midias/antes5.jpeg',
      after: '/midias//depois5.jpeg',
      description: 'Limpieza, pulido y abrillantado de mármol crema marfil'
    },
    // Adicione mais itens conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Navegação entre itens
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
    setSliderPosition(50); // Reset slider ao mudar de imagem
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length);
    setSliderPosition(50); // Reset slider ao mudar de imagem
  };

  const randomItem = () => {
    const newIndex = Math.floor(Math.random() * portfolioItems.length);
    setCurrentIndex(newIndex);
    setSliderPosition(50); // Reset slider ao mudar de imagem
  };

  // Controles do slider
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  return (
    <section className="py-12 bg-light-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Mira los resultados</h2>
        <p className="text-center text-light-gray mb-8">Deslize para ver o antes e depois dos nossos serviços</p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Controles de navegação */}
          <div className="flex justify-between items-center p-4 bg-light-bg">
            <button 
              onClick={prevItem}
              className="p-2 rounded-full hover:bg-light-gray transition-colors"
              aria-label="Anterior"
            >
              <FaArrowLeft className="text-contrast-blue text-xl" />
            </button>
            
            <h3 className="text-lg font-semibold text-center">
              {portfolioItems[currentIndex].description}
            </h3>
            
            <button 
              onClick={nextItem}
              className="p-2 rounded-full hover:bg-light-gray transition-colors"
              aria-label="Próximo"
            >
              <FaArrowRight className="text-contrast-blue text-xl" />
            </button>
          </div>
          
          {/* Container do antes/depois */}
          <div 
            className="relative w-full h-96 md:h-[500px] cursor-col-resize"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {/* Imagem "depois" */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={portfolioItems[currentIndex].after} 
                alt="Piso após limpeza" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Imagem "antes" com largura controlada pelo slider */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={portfolioItems[currentIndex].before} 
                alt="Piso antes da limpeza" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Controle do slider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg flex items-center justify-center"
              style={{ left: `calc(${sliderPosition}% - 1px)` }}
            >
              <div className="w-8 h-8 rounded-full bg-contrast-blue flex items-center justify-center shadow-md">
                <div className="w-4 h-4 flex">
                  <FaArrowLeft className="text-white text-xs" />
                  <FaArrowRight className="text-white text-xs" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Controles adicionais */}
          <div className="p-4 bg-light-bg flex justify-center gap-4">
            <button 
              onClick={randomItem}
              className="px-4 py-2 bg-contrast-blue text-white rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors"
            >
              <FaRandom /> Sorprendeme
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-light-gray">Deslice para ver el antes y el después de nuestros servicios</p>
          <p className="text-sm text-light-gray mt-2">{currentIndex + 1} de {portfolioItems.length} Trabajos</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGame;