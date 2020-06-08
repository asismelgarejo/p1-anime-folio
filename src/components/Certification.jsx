import React from 'react';
import deno from '../assets/static/deno.jpg';
import '../assets/styles/components/certification.scss';

const Certification = () => {
  return (
    <div className='container'>
      <section className='certification' id='certification'>
        <h2>Certifications</h2>
        <div className='certification__item'>
          <div className='certification__item-detail'>
            <h4>JavaScript</h4>
            <p>
              <small>
                <strong>Description:</strong>
              </small>
              Curabitur mauris libero, efficitur ut felis quis, bibendum tincidunt lectus. Donec vehicula, orci id facilisis aliquet, odio lectus cursus risus, tincidunt blandit nunc orci sed libero. Proin tristique placerat lorem, sed efficitur justo scelerisque vitae.
            </p>
          </div>
          <img src={deno} alt='deno' width='500px' className='certification__item-image' />
        </div>
      </section>
    </div>
  );
};

export default Certification;

