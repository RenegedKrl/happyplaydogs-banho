import React, { useState } from 'react';
import './BeforeAfter.css';
import beforeImg from '../assets/gallery/ANTES.jpeg';
import afterImg from '../assets/gallery/DEPOIS.jpeg';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="section bg-surface">
      <div className="container">
        <h2 className="section-title">O Poder do Nosso Banho e Tosa</h2>
        <p className="section-subtitle">
          Arraste para os lados e veja a transformação que podemos fazer no seu pet!
        </p>
        
        <div className="before-after-container">
          <div className="img-background">
            <img src={beforeImg} alt="Antes do Banho" />
            <div className="label-badge label-before">Antes</div>
          </div>
          
          <div 
            className="img-foreground" 
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <img src={afterImg} alt="Depois do Banho" />
            <div className="label-badge label-after">Depois</div>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={(e) => setSliderPosition(e.target.value)} 
            className="slider"
          />
          <div className="slider-line" style={{ left: `${sliderPosition}%` }}>
            <div className="slider-button">
              <svg xmlns="http://www.3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
