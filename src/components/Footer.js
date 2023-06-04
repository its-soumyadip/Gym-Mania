import React from 'react'
import FaceBookIcon from "../assets/icons/facebook.png"
import InstaIcon from "../assets/icons/instagram.png"
export const Footer = () => {
  return (

    <footer className="footer text-light mt-5 mb-1">
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h3>About Us</h3>
            <p>Whether you are a beginner or a fitness enthusiast, our friendly and supportive environment will motivate you to push your limits and make progress.</p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <h3>Contact Us</h3>
            <p>Email: gym-mania@admin.in</p>
            <p>Phone: 9064086231</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className='text-center'>
              <span className='heading'>Follow Us</span>
            </div>
            <div className='text-center'>
            <ul className="social-icons">
              <li><a href="./"> <img src={FaceBookIcon} alt="icon"/>Facebook</a></li>
              <li><a href="./"> <img src={InstaIcon} alt="icon"/>Instagram</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div >
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Gym Mania. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <p className="text-md-end">Designed by <a href="https://www.example.com">Soumyadip</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}
