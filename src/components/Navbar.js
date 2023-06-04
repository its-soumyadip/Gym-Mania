import React from 'react'

export const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="./">Gym Mania</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contact">Contact Us</a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
    
    
  )
}
