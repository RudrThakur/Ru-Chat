import axios from 'axios'
import React, { Component } from 'react'

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {

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
                            <div className='card-header'>Register</div>
                            <div className='card-body'>

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
