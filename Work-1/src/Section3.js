import React, { Component } from 'react';
import './sass/style.css';
import img1 from './assets/824535 1 (1).png';
import img2 from './assets/977193 1 (1).png';
import img3 from './assets/ALBF01177 1 (1).png';

class Card extends Component{
    render(){
        return(
            <div className="card my-4" style={{width: '18rem'}}>
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.text}</p>
        </div>
      </div>

        )
    }
}

 class Section3 extends Component {
  render() {
    return (
     <div className="container section3">
         <p className='mt-5 text-center'>Business Consulting</p>
         <h1 className='text-center display-6 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere excepturi molestias? Quibusdam sunt ab vel necessitatibus ullam deserunt nobis!</h1>
         <div className="row justify-content-around">
             <Card 
             image={img1}
             title="LOREM IPSUM IS"
             text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae voluptates velit cumque. Nam minima ducimus magni itaque laboriosam accusamus." />

<Card 
             image={img2}
             title="LOREM IPSUM IS"
             text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae voluptates velit cumque. Nam minima ducimus magni itaque laboriosam accusamus." />

<Card 
             image={img3}
             title="LOREM IPSUM IS"
             text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestiae voluptates velit cumque. Nam minima ducimus magni itaque laboriosam accusamus." />
         </div>
     </div>
    )
  }
}

export default Section3