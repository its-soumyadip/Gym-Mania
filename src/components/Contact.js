import React from 'react'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>

      <div className='container'>
        <div className='text-center'>
          <div className='row'>
            <div className='col-md-6 back-img'>
              <div className='text-center mb-3 heading-container'>
                <div className='centerized'>
                  <span className='heading'>Contact Us</span>

                  <div className='dots-wrapper'>
                    <div className='dots'></div>
                    <div className='dots'></div>
                    <div className='dots'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 bg-white p-5 rounded'>
              <ContactForm/>

              {/* <form className="contact-form">
                <h3 className='contact-us-heading'> We Care, About You </h3>
                <div className="form-group m-4">
                  <input type="text" className="form-control" id="name" placeholder='Enter your name' />
                </div>
                <div className="form-group m-4">
                  <input type="email" className="form-control" id="email" placeholder='Enter your email address' />
                </div>
                <div className="form-group m-4">
                  <textarea className="form-control" id="message" rows="5" placeholder='Enter your message here'></textarea>
                </div>
                <DarkButton buttonText="Send Message" width="160px" height="50px" />
              </form> */}


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}




  