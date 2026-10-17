import React, { Component } from 'react'
import axios from 'axios';

export class Users extends Component {

    constructor(props) {
        super(props);   
    this.state = {
        users: [
            {
               "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
                "html_url": "https://github.com/mojombo",
                "repos_url": "https://api.github.com/users/mojombo/repos"

            },
            {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
                "html_url": "https://github.com/defunkt",
                "repos_url": "https://api.github.com/users/defunkt/repos"
            },
            {
                "login": "pjhyett",
                "id": 3,
                "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
                "html_url": "https://github.com/pjhyett",
                "repos_url": "https://api.github.com/users/pjhyett/repos"
            }
        ]
    }

    getUsers = () => {
        axios.get('https://api.github.com/users')
             .then(response => {
                this.setState({
                    users:response.data
                })
             })
    }

  }

    
  render() {
    return (
      <div>
        <div className="row">
        {this.state.users.map(user => (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={user.avatar_url} alt=""/>
                <div className="card-body">
                    <h2 className="card-title">{user.id}</h2>
                    <h4 className="card-title">{user.login}</h4>
                    <p className="card-text" style={{ display: 'flex', gap: '16px' }}>
                        <a href={user.html_url} className="btn btn-success">Show more</a>
                        <a href={user.repos_url} className="btn btn-warning">Repositories</a>
                    </p>
                </div>
            </div>
        </div>
        ))
        }
      </div>
    </div>
    )
  }
}

export default Users
