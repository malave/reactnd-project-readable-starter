import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

// build the router
const router = (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='*' component={NotFound} />
    </Switch>
);

// export
export { router };