import React from 'react';
import Hero from '../components/Hero';
import Certification from '../components/Certification';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import '../assets/styles/components/footer.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <Certification />
      <Skill />
      <Contact />
    </div>
  );
};

export default Home;

