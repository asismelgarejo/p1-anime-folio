import React from 'react';
import '../assets/styles/components/hero.scss';
import hero from '../assets/static/hero1.jpg';
import '../assets/styles/components/skill.scss';

const Skill = () => {
  return (
    <div className='container'>
      <section className='skill' id='skill'>
        <h1>Skills</h1>
        <div className='skill-container'>
          <article className='skill__item'>
            <img src={hero} alt='inglés' width='500px' className='skill__item-image' />
            <div className='skill__item-detail'>
              <h3>Inglés</h3>
              <p>
                Tellus vehicula, sed ultrices tellus congue. Duis rutrum diam id quam lobortis tristique. Quisque posuere lorem fringilla tellus cursus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio quis dolor fermentum vulputate.
              </p>
              <a href='https://www.youtube.com/watch?v=JJYLBzBh4ZI' className='anime-url'>Know more</a>
            </div>
          </article>
          <article className='skill__item'>
            <img src={hero} alt='inglés' width='500px' className='skill__item-image' />
            <div className='skill__item-detail'>
              <h3>Inglés</h3>
              <p>
                Tellus vehicula, sed ultrices tellus congue. Duis rutrum diam id quam lobortis tristique. Quisque posuere lorem fringilla tellus cursus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio quis dolor fermentum vulputate.
              </p>
              <a href='https://www.youtube.com/watch?v=JJYLBzBh4ZI' className='anime-url'>Ver opening</a>
            </div>
          </article>
          <article className='skill__item'>
            <img src={hero} alt='inglés' width='500px' className='skill__item-image' />
            <div className='skill__item-detail'>
              <h3>Inglés</h3>
              <p>
                Tellus vehicula, sed ultrices tellus congue. Duis rutrum diam id quam lobortis tristique. Quisque posuere lorem fringilla tellus cursus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio quis dolor fermentum vulputate.
              </p>
              <a href='https://www.youtube.com/watch?v=JJYLBzBh4ZI' className='anime-url'>Ver opening</a>
            </div>
          </article>
          <article className='skill__item'>
            <img src={hero} alt='inglés' width='500px' className='skill__item-image' />
            <div className='skill__item-detail'>
              <h3>Inglés</h3>
              <p>
                Tellus vehicula, sed ultrices tellus congue. Duis rutrum diam id quam lobortis tristique. Quisque posuere lorem fringilla tellus cursus ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac odio quis dolor fermentum vulputate.
              </p>
              <a href='https://www.youtube.com/watch?v=JJYLBzBh4ZI' className='anime-url'>Ver opening</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skill;

