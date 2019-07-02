import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blou: ''
        }
    }

    render() {
        return (
            <div className="Input">
                <input type="email" name="email"></input>
            </div>
        )
    }

}

export default SignUp;