import React, { Component } from 'react';
import img from "./assets/LOGO.png";


class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="q"><img src={img} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-4">
          <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="q">HOME</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="q">Who We Are</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="q">Business Consulting</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="q">Technology Consulting</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="q">Careers</a>
    </li>   
              
      </ul>
          </div>
        </div>
      </nav>
  
    )
  }
}

export default Nav