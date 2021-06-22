import axios from 'axios'
import React, {Component} from 'react'
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            loginForm: {
                email: '',
                password: '',
            }
        }
    }

    handleInput(event) {

        event.preventDefault();

        const fieldName = event.target.name;

        const fieldValue = event.target.value;

        this.setState(
            {
                loginForm: {
                    ...this.state.loginForm,
                    [fieldName]: fieldValue,
                }
            }
        );

    }

    resetLoginForm() {
        document.getElementById("login-form").reset();
    }

    handleSubmit(event) {

        event.preventDefault();

        // Configure Data
        const data = {
            email: this.state.loginForm.email,
            password: this.state.loginForm.password
        };

        axios.post('/api/login', data).then(
            (response) => {
                // Show Success

                this.props.loginUser(response.data.user);

                this.props.hideAlert();

                this.resetLoginForm();

                this.props.history.push('/');

            }
        ).catch(
            (error) => {
                // Show Error

                this.props.showAlert({
                    message: error.response.data.message,
                    errors: error.response.data.errors
                });
            }
        );

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Login</div>
                            <div className='card-body'>

                                {this.props.message &&
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Oops! </strong> {this.props.message}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                            onClick={this.props.hideAlert}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>}

                                <form id="login-form" onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               name="email"
                                               onChange={this.handleInput}
                                               placeholder="Enter email"/>
                                        {
                                            this.props.errors &&
                                            this.props.errors.email &&
                                            <div className="text-danger"> {this.props.errors.email} </div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password"
                                               name="password"
                                               onChange={this.handleInput}
                                               placeholder="Password"/>
                                        {
                                            this.props.errors &&
                                            this.props.errors.password &&
                                            <div className="text-danger"> {this.props.errors.password} </div>
                                        }
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                                <div className="mt-4">
                                    <a href="/register">Register Here</a>
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
        user: state.auth.user,
        message: state.alert.login.message,
        errors: state.alert.login.errors,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch({type: "LOGIN", payload: user}),
        showAlert: (alert) => dispatch({type: "SHOW_LOGIN_ALERT", payload: alert}),
        hideAlert: () => dispatch({type: "HIDE_LOGIN_ALERT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
