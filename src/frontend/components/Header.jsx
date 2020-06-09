import React from 'react';
import '../assets/styles/components/header.scss';

const Header = () => {
  return (
    <div className='container-outer'>
      <div className='container-header'>
        <div className='cont-head'>
          <header className='header'>
            <div className='header__logo'>
              <span>
                <h1 className='logo'>AsKing-folio</h1>
              </span>
            </div>
            <nav className='menu is-active'>
              <ol>
                <li>
                  <a className='link' href='#certification'>Certifications</a>
                </li>
                <li>
                  <a className='link' href='#skill'>Skills</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ol>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
