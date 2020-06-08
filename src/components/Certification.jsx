import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import '../assets/styles/components/certification.scss';

const Certification = ({ certifications }) => {
  return (
    <div className='container'>
      <section className='certification' id='certification'>
        <h2>Certifications</h2>
        <div className='certification__item'>
          <Carousel>
            {
              certifications.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                    className='d-block w-100'
                    src={item.cover}
                    alt={item.route}
                  />
                </Carousel.Item>
              ))
            }
          </Carousel>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    certifications: state.certifications,
    skills: state.skills,
  });
};
export default connect(mapStateToProps, null)(Certification);

