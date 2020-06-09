import React from 'react';
import '../assets/styles/components/contact.scss';
import twitter from '../assets/static/twitter.png';
import facebook from '../assets/static/facebook.png';
import github from '../assets/static/github.png';
import instagram from '../assets/static/instagram.png';

const Contact = () => {
  return (
    <div className='container-contact'>
      <section className='contact' id='contact'>
        <form action='' className='contact__email'>
          <h3>Contact the developer</h3>
          <label htmlFor='contact__email'>Let me your email </label>
          <input className='contact__input' type='INGRESA tus Datos' placeholder='@gmail.com' id='email' />
          <button type='button'>Enviar</button>
        </form>
        <div className='contact__social'>
          <a target='_blank' href='https://twitter.com/asismelgarejo' className='contact__social-link twitter'>
            <img src={twitter} alt='twitter' />
          </a>
          <a target='_blank' href='https://www.facebook.com/asis.melgarejolopez.1' className='contact__social-link facebook'>
            <img src={facebook} alt='facebook' />
          </a>
          <a target='_blank' href='https://github.com/asismelgarejo' className='contact__social-link github'>
            <img src={github} alt='twitter' />
          </a>
          <a target='_blank' href='https://www.instagram.com/asismelgarejo/' className='contact__social-link instagram'>
            <img src={instagram} alt='instagram' />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

