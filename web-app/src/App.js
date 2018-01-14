import React, { Component } from 'react';
import { router } from './router';

class App extends Component {
    render() {
        return (
            <div>
                <div>Header</div>
                <div>{router}</div>
                <div>Footer</div>
            </div>
        );
    }
}

export default App;
