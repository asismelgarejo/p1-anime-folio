import React from 'react';
import Hero from '../components/Hero';
import Certification from '../components/Certification';
import Skill from '../components/Skill';
import '../assets/styles/components/footer.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <Certification />
      <Skill />
    </div>
  );
};

export default Home;

