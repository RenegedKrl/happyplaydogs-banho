import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { src: '/src/assets/gallery/gallery_1.png', alt: 'Estrutura Moderna' },
    { src: '/src/assets/gallery/gallery_2.png', alt: 'Cachorro Feliz no Banho' },
    { src: '/src/assets/hero/hero.png', alt: 'Estética Pet' },
    { src: '/src/assets/gallery/gallery_1.png', alt: 'Banheira Inox' }
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Galeria</h2>
        <p className="section-subtitle">
          Conheça nossa estrutura premium, pensada no conforto e segurança do seu pet.
        </p>
        
        <div className="gallery-grid">
          {images.map((image, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openModal(idx)} style={{ cursor: 'pointer' }}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={closeModal}
        >
          <button 
            onClick={closeModal} 
            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}
          >
            <X size={40} />
          </button>

          <button 
            onClick={prevImage}
            style={{ position: 'absolute', left: '2rem', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '50%', padding: '0.5rem', zIndex: 10000 }}
          >
            <ChevronLeft size={40} />
          </button>

          <img 
            src={images[selectedIndex].src} 
            alt={images[selectedIndex].alt} 
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '8px' }} 
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={nextImage}
            style={{ position: 'absolute', right: '2rem', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '50%', padding: '0.5rem', zIndex: 10000 }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
