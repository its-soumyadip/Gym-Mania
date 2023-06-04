import React from 'react';
import Back1 from "../assets/background/back1.jpg"
import Back2 from "../assets/background/back2.jpg"
import Back3 from "../assets/background/back3.jpg"
import { DarkButton } from './DarkButton';

export const Galary = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide image-gallery" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Back1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
              <div className="text-container">
              <h5>Unleash Your Potential</h5>
              <p>Push your limits, break your boundaries, and unlock your true potential</p>
            </div>
            <DarkButton buttonText="Join Now"></DarkButton>
              </div>
            </div>
           
          </div>
        </div>
        <div className="carousel-item">
          <img src={Back2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">

          <div className='row'>
              <div className='col-md-4'>
              <div className="text-container">
              <h5>Embrace the Challenge</h5>
              <p>Sweat, dedication, and hard work. It's what separates the champions from the rest.</p>
            </div>
            <DarkButton buttonText="Join Now"></DarkButton>

              </div>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
             
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Back3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <div className='col-md-4'>
              <div className="text-container">
              <h5>Find Strength Within</h5>
              <p>Unleash your inner strength and conquer your limits at our gym</p>
            </div>
            <DarkButton buttonText="Join Now"></DarkButton>

              </div>
            </div>
           
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" >
        <span className="carousel-control-prev-icon" aria-hidden="true" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" >
        <span className="carousel-control-next-icon" aria-hidden="true" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
