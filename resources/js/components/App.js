import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import { Provider } from 'react-redux';
import store from '../store/index';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
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
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
