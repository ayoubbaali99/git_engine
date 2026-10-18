import React, { Component } from 'react'

export class SearchUsers extends Component {
  render() {
    return (
      
        <form>
          <div className="form-group">
            <input id="search" type="text" className="form-control"  placeholder="Search Users..." />
          </div>
          <button className="btn btn-danger btn-block">Search</button>
        </form>
       
    )
  }
}

export default SearchUsers
