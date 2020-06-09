import React from 'react';
import logo from '../assets/static/main-logo.png';
import '../assets/styles/components/footer.scss';

const Footer = () => {
  return (
    <div className="container-footer">
      <footer className='footer'>
        <div className='footer__description left'>
          <p>AsKing © 2020</p>
        </div>
        <div className='footer__description right'>
          <a href='#'>@asismelgarejo</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

