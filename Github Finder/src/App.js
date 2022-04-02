import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Users  from './Users';
import axios from 'axios';

 class App extends Component {
     constructor(props){
         
         super(props);
         this.searchEnjoyers = this.searchEnjoyers.bind(this);
         this.state={
             users : []
         }
     }

     searchEnjoyers(searchword){
      axios
      .get(`https://api.github.com/search/users?q=${searchword}`)
      .then(res=>this.setState({users:res.data.items}))
  }

  render() {
    return (
      <>
      {/* Esteem - Value synonym */}
       <Nav title = "Github Finder" url="https://github.com" icon ="fa-brands fa-github" />
       < Search searchEsteem={this.searchEnjoyers} />
       <Users usersvalue={this.state.users} />
      </>
    )
  }
}

export default App