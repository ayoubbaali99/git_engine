import React, { Component } from 'react'

export class SearchUsers extends Component {

  state = {
    search:"Ayoub "
  }

  handleForm = (e) => {
        this.setState({
          search : e.target.value
        })
  }

  serchUsers = (e) => {
    e.preventDefault();
    
  }
  render() {

    const {search} = this.state;

    return (
      
        <form onSubmit={this.serchUsers}>
          <div className="form-group">
            <input onChange={this.handleForm} value={search} id="search" type="text" className="form-control"  placeholder="Search Users..." />
          </div>
          <button className="btn btn-danger btn-block">Search</button>
        </form>
       
    )
  }
}

export default SearchUsers
