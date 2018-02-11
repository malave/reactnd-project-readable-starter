import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './containers/Header/Main';
import { router, } from './router';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='*' component={MainPage} />
                <div className={'container'}>{router}</div>
            </div>
        );
    }
}

export default App;