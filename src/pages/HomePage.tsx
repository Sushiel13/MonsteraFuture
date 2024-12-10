

import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { useHistory } from 'react-router-dom';

export function HomePage() {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/contact');
  };

  return (
    <>
      <Hero />
      <Services />
      <button onClick={handleGetStarted}>Get Started</button>
    </>
  );
}
