import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./sass/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

 

class App extends Component{
  render(){
    return(
    <div>
       < Nav/>
     < Section1/>
     <Section2/>
     <Section3/>

    </div>
    
     
    )
  }
}


ReactDOM.render(<App />,document.getElementById('root')
);

