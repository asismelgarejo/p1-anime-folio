import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/hero.scss';
import '../assets/styles/components/skill.scss';

const Skill = ({ skills }) => {
  return (
    <div className='container'>
      <section className='skill' id='skill'>
        <h2>Skills</h2>
        <div className='skill-container'>
          {
            skills.map((item) => (
              <article className='skill__item' key={item.id}>
                <img src={item.cover} alt='inglés' width='500px' className='skill__item-image' />
                <div className='skill__item-detail'>
                  <h3>{item.skill}</h3>
                  <p>{item.description}</p>
                  <a href={item.url} className='anime-url' target='_blank'>Know more</a>
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    skills: state.skills,
  });
};

export default connect(mapStateToProps, null)(Skill);

