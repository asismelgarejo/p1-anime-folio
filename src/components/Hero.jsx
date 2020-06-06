import React from 'react';
import '../assets/styles/components/hero.scss';
import hero from '../assets/static/hero1.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <h1>
        Lorem ipsum dolor
        <br />
        si, consectetur amet
        <br />
        adipiscing elit.
      </h1>
      <img className='hero-image' src={hero} alt='Hero' width='500px' height='300px' />
    </section>
  );
};

export default Hero;

