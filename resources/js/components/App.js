import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import Chat from './Chat'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Chat} />
                    </Switch>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                    </Switch>
                    <Switch>
                        <Route exact path='/register' component={Register} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
