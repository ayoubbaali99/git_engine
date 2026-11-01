import React, { Component } from 'react'
import User from './User';
import axios from 'axios';

class UserItem extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
         const login = this.props.login;

         axios.get(`https://api.github.com/users/${login}`)
         .then(response => {
             this.setState({
                 user:response.data
             })
         })
          .catch(error => {
                console.error("Erreur GitHub :", error);
            });

    }

  render() {
    const { user } = this.state;
    return (
      <div>
       <User user={user}/>
      </div>
    )
  }
}

export default UserItem
