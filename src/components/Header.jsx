import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/main-logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <span>
          <img src={logo} alt='logo' />
          <h1>-folio</h1>
        </span>
        <span>
          <h4>by Asís Melgarejo</h4>
        </span>
      </div>
      <nav className='menu is-active'>
        <ol>
          <li>
            <a className='link' href='#galeria'>Galeria</a>
          </li>
          <li>
            <a className='link' href='#contacto'>Contacto</a>
          </li>
          <li>
            <a href='#anime'>Animes similares</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Header;
