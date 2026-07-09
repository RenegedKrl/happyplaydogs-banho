import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Gallery.css';
import gallery1 from '../assets/gallery/1.jpeg';
import gallery2 from '../assets/gallery/2.jpeg';
import gallery3 from '../assets/gallery/3.jpg';
import gallery4 from '../assets/gallery/4.jpg';
import gallery5 from '../assets/gallery/5.jpg';
import gallery6 from '../assets/gallery/6.jpg';
import gallery7 from '../assets/gallery/7.jpg';
import gallery8 from '../assets/gallery/8.jpeg';
import gallery9 from '../assets/gallery/9.jpg';
import gallery10 from '../assets/gallery/10.jpeg';
import gallery11 from '../assets/gallery/11.jpeg';
import gallery12 from '../assets/gallery/12.jpg';
import gallery13 from '../assets/gallery/13.jpeg';
import gallery14 from '../assets/gallery/14.jpeg';
import gallery15 from '../assets/gallery/15.jpg';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const images = [
    { src: gallery1, alt: 'Foto 1' },
    { src: gallery2, alt: 'Foto 2' },
    { src: gallery3, alt: 'Foto 3' },
    { src: gallery4, alt: 'Foto 4' },
    { src: gallery5, alt: 'Foto 5' },
    { src: gallery6, alt: 'Foto 6' },
    { src: gallery7, alt: 'Foto 7' },
    { src: gallery8, alt: 'Foto 8' },
    { src: gallery9, alt: 'Foto 9' },
    { src: gallery10, alt: 'Foto 10' },
    { src: gallery11, alt: 'Foto 11' },
    { src: gallery12, alt: 'Foto 12' },
    { src: gallery13, alt: 'Foto 13' },
    { src: gallery14, alt: 'Foto 14' },
    { src: gallery15, alt: 'Foto 15' }
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

  const handleToggleShowAll = () => {
    if (showAll) {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAll(!showAll);
  };

  const visibleImages = showAll ? images : images.slice(0, 6);

  return (
    <section id="gallery" className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Galeria</h2>
        <p className="section-subtitle">
          Conheça nossa estrutura premium, pensada no conforto e segurança do seu pet.
        </p>
        
        <div className="gallery-grid">
          {visibleImages.map((image, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openModal(idx)} style={{ cursor: 'pointer' }}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button 
            onClick={handleToggleShowAll} 
            className="btn btn-primary"
          >
            {showAll ? 'Ver menos' : 'Ver mais'}
          </button>
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
