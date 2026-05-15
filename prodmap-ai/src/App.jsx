import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroDemo from './components/HeroDemo';
import CoreFeatures from './components/CoreFeatures';
import DocGeneration from './components/DocGeneration';
import Labs from './components/Labs';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="page">
      <div className="crosshair-x" style={{ left: mousePos.x }} />
      <div className="crosshair-y" style={{ top: mousePos.y }} />
      <Header />
      <HeroDemo />
      <CoreFeatures />
      <DocGeneration />
      <Labs />
      <Footer />
    </main>
  );
}
