import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            flash: "",
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { flash, ...data } = this.state;

        fetch("/auth/signin",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ flash: res.flash }),
                err => this.setState({ flash: err.flash })
            )
    }

    render() {
        return (
            <div>
                <h1>
                    email:{this.state.email} <br />
                    password:{this.state.password} <br />
                </h1>

                <input onChange={this.onChange} type="email" value={this.state.email} name="email" />
                <input onChange={this.onChange} value={this.state.password} name="password" />
                <button type="submit" onClick={this.handleSubmit} ><Link to="./Profile">submit</Link></button>
                <Link to="./SignUp">SignUp</Link>
            </div>
        );
    }
}

export default SignIn;