import React from 'react';
import logo from '../assets/static/main-logo.png';
import '../assets/styles/components/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__description left'>
        <p>Web Development 2020</p>
        <img src={logo} alt='logo' className='footer__logo' />
      </div>
      <div className='footer__description right'>
        <a href='#'>@asismelgarejo</a>
      </div>
    </footer>
  );
};

export default Footer;

