import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            final: ""
        }
    }

    update = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      change = () => {
        const final = `email :${this.state.email} |
         password :${this.state.password} |
         lastname :${this.state.lastname} |
         firstname :${this.state.firstname}`
        this.setState({final: final})
        console.log(this.state)
      }

    render() {
        const final = this.state.final;
    return (
      <div className="SignUp">

        <h1 class="title">{final}</h1>

        <form className="form" onSubmit={this.handleSubmit}>

        <div className="email">
            <label>Email :</label>
            <input
              onChange={this.update}
              type="email"
              name="email"
              value={this.state.email}
              autoComplete="off"
            />
            </div>

            <div className="Password">
            <label>Password :</label>
            <input
              onChange={this.update}
              type="password"
              name="password"
              value={this.state.password}
              autoComplete="off"
            />
            </div>

            <div className="firstname">
            <label>FirstName :</label>
            <input
              onChange={this.update}
              type="text"
              name="firstname"
              value={this.state.firstname}
              autoComplete="off"
            />
            </div>

          <div className="lastname">
          <label>LastName :</label>
            <input
              onChange={this.update}
              type="text"
              name="lastname"
              value={this.state.lastname}
              autoComplete="off"
            />
            </div>

          <button className="btn btn-submit" type="submit" onClick={this.change}>Submit</button>

        </form>
      </div>

    );
  }
}

export default SignUp;