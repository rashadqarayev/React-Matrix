import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props);
        this.meSubmit = this.meSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state={
            searchword: ""
    }
    }

    inputChange(a){
        this.setState({
            searchword: a.target.value
        })
    }

    meSubmit(a){
        a.preventDefault();
        this.props.searchEsteem(this.state.searchword)

        // console.log(this.state.searchword);
    }
   
  render() {
    return (
        
      <div>
          <form onSubmit={this.meSubmit}>
            <div className="container my-3">
                <div className="input-group">
                    <input type="text" className="form-control" onChange={this.inputChange} />
                    <div className="input-group-append">
                        <button className="btn btn-danger">Search</button>
                    </div>
                </div>
            </div>
          </form>
          {/* <p>{this.state.searchword}</p> */}
      </div>
    )
  }
}

export default Search