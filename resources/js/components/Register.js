import React, {Component} from 'react'
import axios from 'axios';
import {connect} from "react-redux";

class Register extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleInput = this.handleInput.bind(this);

        this.state = {
            registerForm: {
                name: '',
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
                registerForm: {
                    ...this.state.registerForm,
                    [fieldName]: fieldValue,
                }
            }
        );

    }

    resetRegisterForm() {
        document.getElementById("register-form").reset();
    }

    handleSubmit(event) {
        event.preventDefault();

        // Configure Data
        const data = {
            name: this.state.registerForm.name,
            email: this.state.registerForm.email,
            password: this.state.registerForm.password
        };

        axios.post('/api/register', data).then(
            (response) => {
                // Show Success

                this.props.registerUser(response.data.user);

                this.props.hideAlert();

                this.resetRegisterForm();

                this.props.history.push('/');

            }
        ).catch(
            (error) => {
                // Show Error

                this.props.showAlert({
                    message: error.response.data.message,
                    errors: error.response.data.errors,
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
                            <div className='card-header'>Register</div>
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


                                <form id="register-form" method="POST" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               name="name"
                                               onChange={this.handleInput}
                                               aria-describedby="name" placeholder="Enter Name"/>
                                        {
                                            this.props.errors.name &&
                                            <div className="text-danger"> {this.props.errors.name} </div>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               name="email"
                                               onChange={this.handleInput}
                                               aria-describedby="email" placeholder="Enter email"/>
                                        {
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
                                            this.props.errors.password &&
                                            <div className="text-danger"> {this.props.errors.password} </div>
                                        }
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                                <div className="mt-4">
                                    <a href='/login'>Login Here</a>
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
        message: state.alert.register.message,
        errors: state.alert.register.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch({type: "REGISTER", payload: user}),
        showAlert: (alert) => dispatch({type: "SHOW_REGISTER_ALERT", payload: alert}),
        hideAlert: () => dispatch({type: "HIDE_REGISTER_ALERT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
