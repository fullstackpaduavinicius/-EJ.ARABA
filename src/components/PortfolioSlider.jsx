import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FaExpand, FaChevronUp, FaChevronDown } from 'react-icons/fa';

// ... (mantenha o array mediaItems igual ao original)
const mediaItems = [
  { 
    id: 1, 
    src: '/midias/portifolio.jpeg', 
     
  },
  { 
    id: 2, 
    src: '/midias/portifolio1.jpeg', 
    
  },
  { 
    id: 3, 
    src: '/midias/portifolio2.jpeg', 
    
  },
  { 
    id: 4, 
    src: '/midias/portifolio3.jpg', 
    
  },
  { 
    id: 5, 
    src: '/midias/portifolio4.jpg', 
     
  },
  { 
    id: 6, 
    src: '/midias/portifolio5.jpg', 
     
  },
  { 
    id: 7, 
    src: '/midias/portifolio6.jpg', 
     
  },
  { 
    id: 8, 
    src: '/midias/portifolio7.jpg', 
     
  },
  { 
    id: 9, 
    src: '/midias/portifolio8.jpg', 
    
  },
  { 
    id: 10, 
    src: '/midias/portifolio9.jpg', 
     
  },
  { 
    id: 11, 
    src: '/midias/portifolio10.jpg', 
     
  },
  { 
    id: 12, 
    src: '/midias/portifolio11.jpg', 
    
  },
  { 
    id: 13, 
    src: '/midias/portifolio12.jpg', 
     
  },
  { 
    id: 14, 
    src: '/midias/portifolio13.jpg', 
    
  },
  { 
    id: 15, 
    src: '/midias/portifolio14.jpg', 
     
  },
  { 
    id: 16, 
    src: '/midias/portifolio15.jpg', 
     
  },
  { 
    id: 17, 
    src: '/midias/portifolio16.jpg', 
     
  },
  { 
    id: 18, 
    src: '/midias/portifolio17.jpg', 
     
  },
  { 
    id: 19, 
    src: '/midias/portifolio18.jpg', 
     
  },
  { 
    id: 20, 
    src: '/midias/portifolio19.jpg', 
     
  },
  { 
    id: 21, 
    src: '/midias/portifolio20.jpg', 
     
  },
  { 
    id: 22, 
    src: '/midias/portifolio21.jpg', 
     
  },
  { 
    id: 23, 
    src: '/midias/portifolio22.jpg', 
     
  },
  { 
    id: 24, 
    src: '/midias/portifolio23.jpg', 
     
  },
  { 
    id: 25, 
    src: '/midias/portifolio24.jpg', 
    
  }
];
const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="portfolio" className="py-8 bg-[#F0F4F8]">
      <div className="container mx-auto px-0 md:px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 text-[#2C3E50]">
           <span className="text-[#2E8BC0]"></span>
        </h2>
        
        {/* Versão Mobile Vertical (Reels-like) */}
        {isMobile ? (
          <div className="relative mx-auto" style={{
            width: '100%',
            maxWidth: '360px', // Largura típica de celular em portrait
            height: '80vh',
            maxHeight: '640px',
            aspectRatio: '9/16', // Proporção 9:16 como Reels
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
          }}>
            <Swiper
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true
              }}
              modules={[Mousewheel, Autoplay]}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
              className="h-full w-full"
              style={{
                backgroundColor: '#000'
              }}
            >
              {mediaItems.map((item) => (
                <SwiperSlide key={item.id} className="relative">
                  <div className="h-full w-full flex items-center justify-center bg-black">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>
                  <button 
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-[#2E8BC0] transition"
                    onClick={() => setSelectedMedia(item)}
                    style={{
                      zIndex: 10
                    }}
                  >
                    <FaExpand className="text-lg" />
                  </button>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8">
                    <FaChevronUp className="text-white/70 text-2xl animate-bounce" />
                    <FaChevronDown className="text-white/70 text-2xl animate-bounce" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Versão Desktop (mantém o original)
          <>
            <div className="mb-4 rounded-xl overflow-hidden shadow-lg h-[70vh] min-h-[500px]">
              <Swiper
                spaceBetween={0}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                className="h-full w-full"
              >
                {mediaItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative h-full w-full">
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-full object-contain bg-black"
                        loading="lazy"
                        onClick={() => setSelectedMedia(item)}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white font-bold text-2xl">{item.title}</h3>
                        <p className="text-white/90">{item.desc}</p>
                      </div>
                      <button 
                        className="absolute top-4 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-[#2E8BC0] transition"
                        onClick={() => setSelectedMedia(item)}
                      >
                        <FaExpand className="text-xl" />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="px-4 mt-6">
              <Swiper
                spaceBetween={16}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-32"
                breakpoints={{
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: mediaItems.length > 4 ? 5 : mediaItems.length }
                }}
              >
                {mediaItems.map((item) => (
                  <SwiperSlide key={item.id} className="cursor-pointer">
                    <div className="relative h-full rounded-lg overflow-hidden border-4 border-transparent hover:border-[#2E8BC0] transition-all duration-300">
                      <img 
                        src={item.src} 
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        
        )}

        {/* Lightbox (comum para ambas versões) */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-[#2E8BC0] transition"
              onClick={() => setSelectedMedia(null)}
            >
              &times;
            </button>
            
            <div className="w-full h-[85vh] flex items-center justify-center">
              <img 
                src={selectedMedia.src} 
                alt={selectedMedia.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <div className="mt-4 text-center text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
              <p className="text-lg">{selectedMedia.desc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;