import React from 'react'
import { DarkButton } from './DarkButton';

export const Card = (props) => {
   const { imageUrl, title, description } = props;
    const cardStyle = {
        width: '18rem'
      };
    
      return (
        <div className="card" style={cardStyle}>
          <div className='zoom-image'>
          <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">

            <h5 className="card-title">{title}</h5>
            <hr></hr>
            <p className="card-text">{description}</p>
            <hr></hr>
          </div>
          <div className="card-body">
            <DarkButton buttonText="Join Now" width="250px" height="40px"/>
          </div>
        </div>
      );
    };
