import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import {Provider} from 'react-redux';
import {store, persistor} from '../store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Switch>
                                <Route exact path='/' component={Chat}/>
                            </Switch>
                            <Switch>
                                <Route exact path='/login' component={Login}/>
                            </Switch>
                            <Switch>
                                <Route exact path='/register' component={Register}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
