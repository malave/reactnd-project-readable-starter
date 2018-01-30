import React, { Component } from 'react';
import { Breadcrumb } from 'react-materialize';
import { NavLink, } from 'react-router-dom';
import { router } from './router';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Breadcrumb>
                        <NavLink to="/">Readable</NavLink>
                        <NavLink to="/category">Category</NavLink>
                        <NavLink to="/category/123">Post</NavLink>
                    </Breadcrumb>
                </div>
                <div className={'container'}>
                    {router}
                </div>

            </div>
        );
    }
}

export default App;
