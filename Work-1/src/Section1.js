import React, { Component } from 'react';
import img1 from "./assets/Group 245.png";
import './sass/style.css';


class Section1 extends Component {
  render() {
    return (
      <div className='container'>
       <div className="row">
       <div className="col-5 mt-5">
          <h1 className='display-1 fw-bold'>LOREM IPSUM SIMPLY DUMMY</h1>
          <p className='text-muted display-6'>Lorem Ipsum simply dummy</p>
          <button className='btn-1'>Get Started</button>
        </div>
        <div className="col-5">
          <img className='mt-5' src={img1} width="" alt="" />
        </div>
       </div>
      </div>
  
    )
  }
}

export default Section1;

