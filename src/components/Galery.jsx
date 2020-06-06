import React from 'react';
import deno from '../assets/static/deno.jpg';
import '../assets/styles/components/galery.scss';

const Galery = () => {
  return (
    <section className='galery' id='galeria'>
      <h2>Galeria</h2>
      <div className='galery__item'>
        <div className='galery__item-detail'>
          <h4>Hero</h4>
          <p>
            <small>
              <strong>Description:</strong>
            </small>
            Curabitur mauris libero, efficitur ut felis quis, bibendum tincidunt lectus. Donec vehicula, orci id facilisis aliquet, odio lectus cursus risus, tincidunt blandit nunc orci sed libero. Proin tristique placerat lorem, sed efficitur justo scelerisque vitae.
          </p>
        </div>
        <img src={deno} alt='deno' width='500px' className='galery__item-image' />
      </div>
    </section>
  );
};

export default Galery;

