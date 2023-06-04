import React from 'react'

export const DarkButton = (props) => {

  DarkButton.defaultProps = {
    type: 'submit', 
  };
  return (
    <div className='button-container'>
    <button type={props.type}  className='btn btn-black btn-rounded'>{props.buttonText}</button>
    </div>
  )
}
