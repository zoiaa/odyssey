import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "homer.simpson@wildcodeschool.fr",
            name: "Homer",
            lastname: "Simpson",
        }
    }

    render() {
        return (
            <div>
                <h1>
                    email:{this.state.email} <br />
                    prénom:{this.state.name} <br />
                    nom:{this.state.lastname}<br />
                    <button type="button"><Link to="./SignIn">Deconnection</Link></button>
                </h1>
            </div>
        );
    }
}

export default Profile;