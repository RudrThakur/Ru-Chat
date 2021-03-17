import axios from 'axios'
import React, { Component } from 'react'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loginForm: {
                email: '',
                password: ''
            }
        }
    }

    componentDidMount () {

    }

    render () {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>Login</div>
                            <div className='card-body'>

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"

                                               placeholder="Enter email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password" />
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

export default Login
