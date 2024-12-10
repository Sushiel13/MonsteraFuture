import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <>
      <Hero />
      <Services />
      <button onClick={handleGetStarted}>Get Started</button>
    </>
  );
}
