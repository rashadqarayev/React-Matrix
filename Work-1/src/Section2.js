import React, { Component } from 'react';
import './sass/style.css';
import img2 from './assets/unsplash_81OnSSXJo-I.png';

class Section2 extends Component {
  render() {
    return (
      <div className="container">
          <p className='text-center'>Who We Are</p>
          <h2 className='text-center fw-bold'>Lorem Ipsum is simply <br /> dummy text of the printing and <br /> typesetting industry</h2>
          <div className="row justify-content-between">
              <div className="col-5">
                  <div className="card border-0 mt-4">
                      <h1 className='display-6 fw-bold'>We are lorem ipsum</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam dicta explicabo labore adipisci sit repellat numquam id recusandae! Repudiandae ea repellat reiciendis quasi commodi delectus laborum quod recusandae obcaecati natus voluptatem placeat beatae, libero maxime nemo magnam at fuga?</p>
                      
                  </div>

                  <div className="card border-0 mt-2">
                      <h1 className='display-6 fw-bold'>We are lorem ipsum</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam dicta explicabo labore adipisci sit repellat numquam id recusandae! Repudiandae ea repellat reiciendis quasi commodi delectus laborum quod recusandae obcaecati natus voluptatem placeat beatae, libero maxime nemo magnam at fuga?</p>
                      
                  </div>

                  <div className="card border-0 mt-2">
                      <h1 className='display-6 fw-bold'>We are lorem ipsum</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam dicta explicabo labore adipisci sit repellat numquam id recusandae! Repudiandae ea repellat reiciendis quasi commodi delectus laborum quod recusandae obcaecati natus voluptatem placeat beatae, libero maxime nemo magnam at fuga?</p>
                      
                  </div>



              
              
              </div>
              <div className="col-5 d-flex align-items-center">
                  <img src={img2} alt="" />
              </div>
          </div>
      </div>
    )
  }
}

export default Section2