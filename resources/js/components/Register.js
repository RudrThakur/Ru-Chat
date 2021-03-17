import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";

class Register extends Component {
    constructor (props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            loggedIn: false,
            registerForm: {
                name: '',
                email: '',
                password: '',
                errors: {}
            }
        }
    }

    handleInput (event) {
        event.preventDefault();

        const fieldName = event.target.name;

        const fieldValue = event.target.value;

        this.setState(
            {
                registerForm: {
                    ...this.state.registerForm,
                    [fieldName]: fieldValue,
                }
            }
        );

    }

     handleSubmit (event) {
        event.preventDefault();

        // Configure Data
        const data = {
            name : this.state.registerForm.name,
            email: this.state.registerForm.email,
            password: this.state.registerForm.password
        };

        axios.post('/api/register', data).then(
            (response) => {
                // Show Success

                this.props.registerUser(response.data.user);

            }
        ).catch(
            (error) => {
                // Show Error

                this.setState({
                   registerForm: {
                       ...this.state.registerForm,
                        errors: error.response.data
                   }
                });

                console.log(this.state.registerForm.errors);
            }
        );

    }

    componentDidMount () {
        console.log(this.props.loggedIn);
    }

    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Register</div>
                            <div className='card-body'>

                                <form method="POST" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               name="name"
                                               onChange={this.handleInput}
                                               aria-describedby="name" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               name="email"
                                               onChange={this.handleInput}
                                               aria-describedby="email" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password"
                                               name="password"
                                               onChange={this.handleInput}
                                               placeholder="Password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                                <div className="mt-4">
                                    <a href="/login">Login Here</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch({type: "REGISTER", payload: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
