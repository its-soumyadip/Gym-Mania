import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { DarkButton } from './DarkButton';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyyaqwng");

  if (state.succeeded) {
    return <p>Your message sent successfully!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <h3 className='contact-us-heading'> We Care, About You </h3>
      <div className="form-group m-4">
        <input type="text" className="form-control" id="name" placeholder='Enter your name' name='name' />
        <ValidationError
        prefix="Name"
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="form-group m-4">
        <input type="email" name='email' className="form-control" id="email" placeholder='Enter your email address' />
      </div>
      <div className="form-group m-4">
        <textarea className="form-control" name='message' id="message" rows="5" placeholder='Enter your message here'></textarea>
        <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      </div>
      <DarkButton type='submit' buttonText="Send Message" width="160px" height="50px" />
    </form>
  );
};
